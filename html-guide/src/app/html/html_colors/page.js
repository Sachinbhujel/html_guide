"use client";

import { useSidebar } from "../layout";

export default function HtmlColors() {
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
                    <h1>HTML Colors</h1>

                    <p>
                        Colors in HTML can be applied to text and backgrounds
                        using the
                        <code>style</code> attribute with color names, HEX, RGB,
                        etc.
                    </p>

                    <h2>Text Color Using Name</h2>
                    <pre>{`<p style="color: red;">This is red text.</p>`}</pre>
                    <h3>Live Output:</h3>
                    <iframe
                        srcDoc={`<p style="color: red;">This is red text.</p>`}
                        style={{
                            width: "100%",
                            height: "50px",
                            border: "1px solid #ccc",
                        }}
                    ></iframe>

                    <h2>Text Color Using HEX</h2>
                    <pre>{`<p style="color: #00ff00;">This is green text.</p>`}</pre>
                    <h3>Live Output:</h3>
                    <iframe
                        srcDoc={`<p style="color: #00ff00;">This is green text.</p>`}
                        style={{
                            width: "100%",
                            height: "50px",
                            border: "1px solid #ccc",
                        }}
                    ></iframe>

                    <h2>Text Color Using RGB</h2>
                    <pre>{`<p style="color: rgb(0, 0, 255);">This is blue text.</p>`}</pre>
                    <h3>Live Output:</h3>
                    <iframe
                        srcDoc={`<p style="color: rgb(0, 0, 255);">This is blue text.</p>`}
                        style={{
                            width: "100%",
                            height: "50px",
                            border: "1px solid #ccc",
                        }}
                    ></iframe>

                    <h2>Background Color</h2>
                    <pre>{`<div style="background-color: lightblue; padding: 10px;">
  This div has a light blue background.
</div>`}</pre>
                    <h3>Live Output:</h3>
                    <iframe
                        srcDoc={`<div style="background-color: lightblue; padding: 10px;">
  This div has a light blue background.
</div>`}
                        style={{
                            width: "100%",
                            height: "60px",
                            border: "1px solid #ccc",
                        }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
