"use client";

import { useSidebar } from "../layout";

export default function HtmlCss() {
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
                    <h1>HTML CSS</h1>

                    <p>
                        CSS (Cascading Style Sheets) is used to style and layout
                        HTML elements. You can apply CSS in three main ways:
                        <strong> Inline</strong>, <strong>Internal</strong>, and{" "}
                        <strong>External</strong>.
                    </p>

                    <h2>1. Inline CSS</h2>
                    <p>
                        Inline CSS is written directly inside the HTML tag using
                        the <code>style</code> attribute.
                    </p>
                    <pre>{`<p style="color: green; font-size: 18px;">This is inline styled text.</p>`}</pre>
                    <h3>Live Output:</h3>
                    <iframe
                        srcDoc={`<p style="color: green; font-size: 18px;">This is inline styled text.</p>`}
                        style={{
                            width: "100%",
                            height: "50px",
                            border: "1px solid #ccc",
                        }}
                    ></iframe>

                    <h2>2. Internal CSS</h2>
                    <p>
                        Internal CSS is defined within a{" "}
                        <code>&lt;style&gt;</code> tag inside the{" "}
                        <code>&lt;head&gt;</code> of the HTML document.
                    </p>
                    <pre>{`<html>
  <head>
    <style>
      p {
        color: blue;
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <p>This is internally styled text.</p>
  </body>
</html>`}</pre>
                    <h3>Live Output:</h3>
                    <iframe
                        srcDoc={`<html><head><style>p { color: blue; font-size: 20px; }</style></head><body><p>This is internally styled text.</p></body></html>`}
                        style={{
                            width: "100%",
                            height: "60px",
                            border: "1px solid #ccc",
                        }}
                    ></iframe>

                    <h2>3. External CSS</h2>
                    <p>
                        External CSS uses a separate CSS file linked using the{" "}
                        <code>&lt;link&gt;</code> tag.
                    </p>
                    <pre>{`<!-- HTML file -->
<html>
  <head>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <p>This is styled using external CSS.</p>
  </body>
</html>

/* styles.css */
p {
  color: purple;
  font-size: 22px;
}`}</pre>
                    <p>
                        <strong>Note:</strong> External CSS won’t work in the
                        iframe demo since it requires a separate file, but it is
                        the most scalable approach.
                    </p>

                    <h2>Why Use CSS?</h2>
                    <ul>
                        <li>
                            To control layout and presentation of HTML content
                        </li>
                        <li>
                            To reuse styles across multiple pages (with external
                            CSS)
                        </li>
                        <li>To improve user experience and branding</li>
                    </ul>

                    <h2>Common CSS Properties</h2>
                    <ul>
                        <li>
                            <code>color</code> – text color
                        </li>
                        <li>
                            <code>background-color</code> – background color
                        </li>
                        <li>
                            <code>font-size</code> – size of text
                        </li>
                        <li>
                            <code>margin</code>, <code>padding</code> – spacing
                        </li>
                        <li>
                            <code>border</code> – outlines elements
                        </li>
                        <li>
                            <code>text-align</code> – alignment (left, center,
                            right)
                        </li>
                        <li>
                            <code>display</code> – layout behavior (block,
                            inline, flex, etc.)
                        </li>
                    </ul>

                    <h2>Live Example with Multiple CSS Properties</h2>
                    <pre>{`<div style="background-color: lightgray; padding: 10px; border: 1px solid #000;">
  <h3 style="color: darkred; text-align: center;">Styled Box</h3>
  <p style="font-size: 16px; color: black;">
    This is a styled div with a heading and paragraph.
  </p>
</div>`}</pre>
                    <h3>Live Output:</h3>
                    <iframe
                        srcDoc={`<div style="background-color: lightgray; padding: 10px; border: 1px solid #000;">
  <h3 style="color: darkred; text-align: center;">Styled Box</h3>
  <p style="font-size: 16px; color: black;">
    This is a styled div with a heading and paragraph.
  </p>
</div>`}
                        style={{
                            width: "100%",
                            height: "110px",
                            border: "1px solid #ccc",
                        }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
