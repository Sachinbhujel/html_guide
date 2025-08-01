"use client";

import { useSidebar } from "../layout";

export default function HtmlLinks() {
    const { setSidebarOpen } = useSidebar();
    return (
        <div className="html-home-main">
            <style>
                {`.link {
                        color: blue;
                        text-decoration: none;
                    }
                    .link:hover {
                        color: red;
                        text-decoration: underline;
                    }`}
            </style>
            <div className="html-home">
                <span
                    className="material-symbols-outlined html-dock"
                    onClick={() => setSidebarOpen((prev) => !prev)}
                >
                    dock_to_right
                </span>
                <div className="container">
                    <h1>HTML Links</h1>

                    <p>
                        HTML links are used to navigate from one page to another
                        or open external websites. They are created using the{" "}
                        <code>&lt;a&gt;</code> tag.
                    </p>

                    <h2>Basic Syntax</h2>
                    <pre>{`<a href="https://example.com">Visit Example</a>`}</pre>
                    <p>
                        This will create a clickable link that opens the
                        provided URL.
                    </p>

                    <h2>Attributes</h2>
                    <ul>
                        <li>
                            <code>href</code> – The destination URL
                        </li>
                        <li>
                            <code>target</code> – Where to open the link (e.g.,{" "}
                            <code>_blank</code> for new tab)
                        </li>
                        <li>
                            <code>title</code> – Tooltip when hovered
                        </li>
                        <li>
                            <code>download</code> – Download the linked resource
                            instead of navigating
                        </li>
                    </ul>

                    <h2>Open in New Tab</h2>
                    <pre>{`<a href="https://example.com" target="_blank">Open in New Tab</a>`}</pre>

                    <h2>Local Links</h2>
                    <p>
                        You can link to another page in your website like this:
                    </p>
                    <pre>{`<a href="/about.html">About Us</a>`}</pre>

                    <h2>Email Links</h2>
                    <pre>{`<a href="mailto:someone@example.com">Send Email</a>`}</pre>

                    <h2>Telephone Links</h2>
                    <pre>{`<a href="tel:+1234567890">Call Us</a>`}</pre>

                    <h2>Download Link</h2>
                    <pre>{`<a href="/files/manual.pdf" download>Download Manual</a>`}</pre>

                    <h2>HTML Link Styling with CSS</h2>
                    <pre>{`<style>
a {
    color: blue;
    text-decoration: none;
}
a:hover {
    color: red;
    text-decoration: underline;
}
</style>`}</pre>

                    <h2>Live Output Example:</h2>
                    <div
                        style={{ backgroundColor: "#f0f0f0", padding: "1rem" }}
                    >
                        <p>
                            <a
                                href="https://www.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link"
                            >
                                Visit Google
                            </a>
                        </p>
                        <p>
                            <a href="mailto:test@example.com" className="link">
                                Send Email
                            </a>
                        </p>
                        <p>
                            <a href="tel:+1234567890" className="link">
                                Call +1234567890
                            </a>
                        </p>
                        <p>
                            <a
                                href="/files/sample.pdf"
                                className="link"
                                download
                            >
                                Download PDF
                            </a>
                        </p>
                    </div>

                    <h2>Tips:</h2>
                    <ul>
                        <li>
                            Always use <code>target=&quot;_blank&quot;</code>{" "}
                            with{" "}
                            <code>rel=&quot;noopener noreferrer&quot;</code> for
                            security.
                        </li>
                        <li>
                            Keep your links descriptive – avoid “click here”.
                        </li>
                        <li>
                            Use CSS to visually style and differentiate links.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
