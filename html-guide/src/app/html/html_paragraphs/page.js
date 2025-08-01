"use client";

import { useSidebar } from "../layout";

export default function HtmlParagraphs() {
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
                    <h1>HTML Paragraphs</h1>

                    <h2>What is a Paragraph in HTML?</h2>
                    <p>
                        A paragraph in HTML is defined using the{" "}
                        <code>&lt;p&gt;</code> tag. It is used to group together
                        sentences and sections of text.
                    </p>

                    <h2>Basic Paragraph Syntax</h2>
                    <pre>{`<p>This is a simple paragraph of text.</p>`}</pre>

                    <h2>Multiple Paragraphs</h2>
                    <pre>{`<p>This is the first paragraph.</p>
<p>This is the second paragraph.</p>`}</pre>

                    <h2>Paragraph with Inline Elements</h2>
                    <pre>{`<p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>`}</pre>

                    <h2>Why Use Paragraphs?</h2>
                    <ul>
                        <li>They help organize text content on a web page.</li>
                        <li>
                            Browsers add some spacing above and below paragraphs
                            by default.
                        </li>
                        <li>Paragraphs improve readability and structure.</li>
                    </ul>

                    <h2>Live Output:</h2>
                    <iframe
                        srcDoc={`<!DOCTYPE html>
<html>
  <body>
    <p>This is a simple paragraph of text.</p>
    <p>This is the first paragraph.</p>
    <p>This is the second paragraph.</p>
    <p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
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
