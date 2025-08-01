"use client";
import { useSidebar } from "../layout";

export default function HtmlFavicon() {
    const { setSidebarOpen } = useSidebar();

    return (
        <>
            <div className="html-home-main">
                <div className="html-home">
                    <span
                        className="material-symbols-outlined html-dock"
                        onClick={() => setSidebarOpen((prev) => !prev)}
                    >
                        dock_to_right
                    </span>
                    <div className="container">
                        <h1>HTML Favicon</h1>
                        <p>
                            A <strong>favicon</strong> is a small icon displayed
                            in the browser tab next to the page title.
                        </p>
                        <p>
                            It helps with website branding and improves user
                            experience by making it easier to identify a tab
                            among many.
                        </p>

                        <h2>How to Add a Favicon</h2>
                        <p>
                            Add the following <code>&lt;link&gt;</code> element
                            inside the <code>&lt;head&gt;</code> section of your
                            HTML:
                        </p>

                        <pre>
                            {`<link rel="icon" type="image/x-icon" href="/favicon.ico">`}
                        </pre>

                        <h2>Example (Basic Favicon)</h2>
                        <pre>
                            {`<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>
<body>
  <h1>Hello, world!</h1>
</body>
</html>`}
                        </pre>

                        <h2>Favicon Formats</h2>
                        <ul>
                            <li>
                                <strong>.ico</strong> — traditional format,
                                supported by all browsers.
                            </li>
                            <li>
                                <strong>.png</strong> — widely used with better
                                quality.
                            </li>
                            <li>
                                <strong>.svg</strong> — scalable, but not
                                supported in all browsers as favicons.
                            </li>
                        </ul>

                        <h2>Modern Example (Multiple Sizes)</h2>
                        <pre>
                            {`<link rel="icon" href="/favicon.png" type="image/png" sizes="32x32">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">`}
                        </pre>

                        <h2>Best Practices</h2>
                        <ul>
                            <li>
                                Place your <code>favicon.ico</code> file in the
                                root folder (<code>/public</code> in Next.js).
                            </li>
                            <li>
                                Use a 16x16, 32x32, or 48x48 pixel icon for best
                                compatibility.
                            </li>
                            <li>
                                Use the correct MIME type like{" "}
                                <code>image/x-icon</code> or{" "}
                                <code>image/png</code>.
                            </li>
                            <li>
                                Use multiple formats for wider browser support.
                            </li>
                        </ul>

                        <h2>In Next.js</h2>
                        <p>
                            Place the favicon file inside your{" "}
                            <code>/public</code> directory and include the link
                            in <code>app/layout.js</code> or{" "}
                            <code>_document.js</code> (if using custom
                            Document).
                        </p>

                        <h3>Example for Next.js</h3>
                        <pre>
                            {`// app/layout.js
export const metadata = {
  title: "My Site",
  icons: {
    icon: "/favicon.ico",
  },
};`}
                        </pre>
                    </div>
                </div>
            </div>
        </>
    );
}
