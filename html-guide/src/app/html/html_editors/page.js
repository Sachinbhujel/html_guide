"use client";

import { useSidebar } from "../layout";

export default function HtmlEditors() {
    const { setSidebarOpen } = useSidebar();
    return (
        <div className="html-home-main">
            <div className="html-home">
                <span className="material-symbols-outlined html-dock" onClick={() => setSidebarOpen((prev) => !prev)}>
                    dock_to_right
                </span>
                <div className="container">
                    <h1>HTML Editors</h1>
                    <p>
                        To write and run HTML code, you need an editor. There are two types of HTML editors:
                    </p>

                    <h2>1. Text Editors (Simple)</h2>
                    <p>These are basic editors where you manually write HTML:</p>
                    <ul>
                        <li>Notepad (Windows)</li>
                        <li>TextEdit (Mac)</li>
                        <li>Notepad++</li>
                    </ul>

                    <h2>2. Professional Code Editors (Recommended)</h2>
                    <p>These offer features like syntax highlighting, auto-completion, extensions, and more:</p>
                    <ul>
                        <li><strong>VS Code</strong> – Most popular, free, made by Microsoft</li>
                        <li><strong>Sublime Text</strong> – Lightweight and fast</li>
                        <li><strong>Atom</strong> – Open-source, customizable</li>
                        <li><strong>Brackets</strong> – Great for frontend/web design</li>
                        <li><strong>WebStorm</strong> – Paid, feature-rich</li>
                    </ul>

                    <h2>3. Online HTML Editors</h2>
                    <p>You can also write and run HTML directly in the browser using these tools:</p>
                    <ul>
                        <li><a href="https://codepen.io" target="_blank">CodePen</a></li>
                        <li><a href="https://jsfiddle.net" target="_blank">JSFiddle</a></li>
                        <li><a href="https://playcode.io" target="_blank">PlayCode</a></li>
                        <li><a href="https://codesandbox.io" target="_blank">CodeSandbox</a></li>
                    </ul>

                    <h2>Writing HTML in VS Code</h2>
                    <p>Here’s how you can create a basic HTML file in VS Code:</p>
                    <pre>{`1. Open VS Code
2. Create a new file: index.html
3. Write the following code:
------------------------------
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`}</pre>

                    <p>4. Save the file with `.html` extension</p>
                    <p>5. Open the file in your browser (right-click → Open with → Chrome/Edge/etc.)</p>

                    <h2>Tip:</h2>
                    <p>In VS Code, you can type <code>!</code> and press <strong>Tab</strong> to auto-generate a full HTML boilerplate!</p>
                </div>
            </div>
        </div>
    );
}
