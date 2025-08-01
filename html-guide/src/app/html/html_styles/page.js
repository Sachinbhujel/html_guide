"use client";

import { useSidebar } from "../layout";

export default function HtmlStyles() {
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
                    <h1>HTML Styles</h1>

                    <h2>What is Styling in HTML?</h2>
                    <p>
                        Styling is used to change the appearance of HTML
                        elements. It is mainly done using CSS (Cascading Style
                        Sheets), but you can also add some styles directly in
                        HTML.
                    </p>

                    <h2>Inline Styles</h2>
                    <p>
                        You can add styles directly inside an HTML tag using the{" "}
                        <code>style</code> attribute:
                    </p>
                    <pre>{`<p style="color: blue; font-size: 18px;">This is a blue paragraph.</p>`}</pre>

                    <h2>Internal CSS</h2>
                    <p>
                        You can add styles inside a <code>&lt;style&gt;</code>{" "}
                        tag within the HTML <code>&lt;head&gt;</code>:
                    </p>
                    <pre>{`<head>
  <style>
    p {
      color: green;
      font-size: 16px;
    }
  </style>
</head>`}</pre>

                    <h2>External CSS</h2>
                    <p>
                        Styles are usually written in separate CSS files and
                        linked in the HTML:
                    </p>
                    <pre>{`<head>
  <link rel="stylesheet" href="styles.css">
</head>`}</pre>

                    <h2>Common CSS Properties</h2>
                    <ul>
                        <li>
                            <code>color</code>: text color
                        </li>
                        <li>
                            <code>background-color</code>: background color
                        </li>
                        <li>
                            <code>font-size</code>: size of text
                        </li>
                        <li>
                            <code>font-family</code>: font style
                        </li>
                        <li>
                            <code>margin</code>: space outside elements
                        </li>
                        <li>
                            <code>padding</code>: space inside elements
                        </li>
                    </ul>

                    <h2>Example with Inline Styles</h2>
                    <pre>{`<p style="color: red; font-weight: bold;">This is a red, bold paragraph.</p>`}</pre>

                    <h2>Live Output:</h2>
                    <iframe
                        srcDoc={`<!DOCTYPE html>
<html>
  <body>
    <p style="color: blue; font-size: 18px;">This is a blue paragraph.</p>
    <p style="color: red; font-weight: bold;">This is a red, bold paragraph.</p>
  </body>
</html>`}
                        style={{
                            width: "100%",
                            height: "150px",
                            border: "1px solid #ccc",
                        }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
