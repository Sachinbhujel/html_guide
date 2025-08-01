"use client";

import { useSidebar } from "../layout";

export default function HtmlElements() {
     const { setSidebarOpen } = useSidebar();
    return (
        <div className="html-home-main">
            <div className="html-home">
                <span className="material-symbols-outlined html-dock" onClick={() => setSidebarOpen((prev) => !prev)}>
                    dock_to_right
                </span>
                <div className="container">
                    <h1>HTML Elements</h1>

                    <h2>What are HTML Elements?</h2>
                    <p>
                        HTML elements are the building blocks of all websites. An HTML element is defined by a start tag, some content, and an end tag.
                    </p>
                    <pre>{`<p>This is a paragraph.</p>
<h1>This is a heading</h1>`}</pre>

                    <h2>Nested HTML Elements</h2>
                    <p>
                        HTML elements can contain other HTML elements. For example, a <code>&lt;div&gt;</code> can contain paragraphs, headings, or images.
                    </p>
                    <pre>{`<div>
  <h2>My Title</h2>
  <p>This is inside a div.</p>
</div>`}</pre>

                    <h2>Empty HTML Elements</h2>
                    <p>
                        Some HTML elements don’t have content. These are called empty elements. Example:
                    </p>
                    <pre>{`<br />  <!-- Line break -->`}</pre>

                    <h2>HTML is Not Case Sensitive</h2>
                    <p>
                        HTML tags are not case sensitive: <code>&lt;h1&gt;</code> is the same as <code>&lt;H1&gt;</code>. But it’s best practice to use lowercase.
                    </p>
                </div>
            </div>
        </div>
    );
}
