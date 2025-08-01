"use client";

import { useSidebar } from "../layout";

export default function HtmlHeadings() {
    const { setSidebarOpen } = useSidebar();
    return (
        <div className="html-home-main">
            <div className="html-home">
                <span
                    className="material-symbols-outlined html-dock"
                    onClick={() => setSidebarOpen((prev) => !prev)}
                >
                    dock_to_right
                </span>
                <div className="container">
                    <h1>HTML Headings</h1>

                    <h2>What are HTML Headings?</h2>
                    <p>
                        HTML headings are used to define headings on a webpage.
                        They range from <code>&lt;h1&gt;</code> (most important)
                        to <code>&lt;h6&gt;</code> (least important).
                    </p>

                    <h2>Heading Tags</h2>
                    <ul>
                        <li>
                            <code>&lt;h1&gt;</code> - Main heading
                        </li>
                        <li>
                            <code>&lt;h2&gt;</code> - Subheading
                        </li>
                        <li>
                            <code>&lt;h3&gt;</code> - Section heading
                        </li>
                        <li>
                            <code>&lt;h4&gt;</code> - Subsection heading
                        </li>
                        <li>
                            <code>&lt;h5&gt;</code> - Smaller heading
                        </li>
                        <li>
                            <code>&lt;h6&gt;</code> - Smallest heading
                        </li>
                    </ul>

                    <h2>Example Usage</h2>
                    <pre>{`<h1>This is an H1 heading</h1>
<h2>This is an H2 heading</h2>
<h3>This is an H3 heading</h3>
<h4>This is an H4 heading</h4>
<h5>This is an H5 heading</h5>
<h6>This is an H6 heading</h6>`}</pre>

                    <h2>Why Use Headings?</h2>
                    <ul>
                        <li>They help organize content logically.</li>
                        <li>Improve accessibility and SEO.</li>
                        <li>Assist screen readers to navigate your page.</li>
                    </ul>

                    <h2>Live Output:</h2>
                    <iframe
                        srcDoc={`<!DOCTYPE html>
<html>
  <body>
    <h1>This is an H1 heading</h1>
    <h2>This is an H2 heading</h2>
    <h3>This is an H3 heading</h3>
    <h4>This is an H4 heading</h4>
    <h5>This is an H5 heading</h5>
    <h6>This is an H6 heading</h6>
  </body>
</html>`}
                        style={{
                            width: "100%",
                            height: "200px",
                            border: "1px solid #ccc",
                        }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
