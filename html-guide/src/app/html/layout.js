"use client";

import Sidebar from "../components/Sidebar";
import { useState, createContext, useContext, useRef, useEffect } from "react";
const SidebarContext = createContext();

export function useSidebar() {
    return useContext(SidebarContext);
}

export default function AppLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const sidebarRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setSidebarOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, setSidebarOpen }}>
            <div className="flex">
                <Sidebar isVisible={isSidebarOpen} sidebarRef={sidebarRef} />
                <div>{children}</div>
            </div>
        </SidebarContext.Provider>
    );
}
