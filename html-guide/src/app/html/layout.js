import Sidebar from "../components/Sidebar"

export default function AppLayout({ children }){
    return (
        <div className="flex gap-20">
           <Sidebar />
           <div>
                {children}
           </div> 
        </div>
    )
}