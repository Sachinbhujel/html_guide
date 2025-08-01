import "../globals.css";
import Link from "next/link";

export default function Sidebar({ isVisible, sidebarRef }) {
    return (
        <>
            {isVisible && (
                <div className="sidebar flex min-h-screen" ref={sidebarRef}>
                    <div className="w-[250px] bg-black text-white h-[calc(100vh-108px)] overflow-y-auto fixed top-[108px]">
                        <div className="flex h-screen flex-col justify-between border-e border-gray-100">
                            <div className="pr-2">
                                <ul className="mt-6 space-y-1">
                                    <Link
                                        href="/html"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Home
                                    </Link>

                                    <Link
                                        href="/html/html_introduction"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Introduction
                                    </Link>

                                    <Link
                                        href="/html/html_editors"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Editors
                                    </Link>

                                    <Link
                                        href="/html/html_basics"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Basics
                                    </Link>

                                    <Link
                                        href="/html/html_elements"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Elements
                                    </Link>

                                    <Link
                                        href="/html/html_attributes"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Attributes
                                    </Link>

                                    <Link
                                        href="/html/html_headings"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Headings
                                    </Link>

                                    <Link
                                        href="/html/html_paragraphs"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Paragraphs
                                    </Link>

                                    <Link
                                        href="/html/html_styles"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Styles
                                    </Link>

                                    <Link
                                        href="/html/html_formatting"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Formatting
                                    </Link>

                                    <Link
                                        href="/html/html_quotations"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Quotations
                                    </Link>

                                    <Link
                                        href="/html/html_comments"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Comments
                                    </Link>

                                    <li>
                                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                                            <summary className="flex cursor-pointer items-center justify-between rounded-lg">
                                                <Link
                                                    href="/html/html_colors"
                                                    className="block rounded-lg px-4 py-2 text-sm font-medium"
                                                >
                                                    HTML Colors
                                                </Link>

                                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="size-5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                            </summary>

                                            <ul className="mt-2 space-y-1 px-4">
                                                <li>
                                                    <Link
                                                        href="/html/html_colors/rgb"
                                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                                    >
                                                        RGB
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        href="/html/html_colors/hex"
                                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                                    >
                                                        HEX
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        href="/html/html_colors/hsl"
                                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                                    >
                                                        HSL
                                                    </Link>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>

                                    <Link
                                        href="/html/html_css"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML CSS
                                    </Link>

                                    <Link
                                        href="/html/html_links"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Links
                                    </Link>

                                    <Link
                                        href="/html/html_images"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Images
                                    </Link>

                                    <Link
                                        href="/html/html_favicon"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Favicon
                                    </Link>

                                    <Link
                                        href="/html/html_page_title"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Page Title
                                    </Link>

                                    <Link
                                        href="/html/html_tables"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Tables
                                    </Link>

                                    <Link
                                        href="/html/html_lists"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Lists
                                    </Link>

                                    <Link
                                        href="/html/html_block_and_inline"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Block & Inline
                                    </Link>

                                    <Link
                                        href="/html/html_div"
                                        className="block rounded-lg px-4 py-2 text-sm font-medium"
                                    >
                                        HTML Div
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
