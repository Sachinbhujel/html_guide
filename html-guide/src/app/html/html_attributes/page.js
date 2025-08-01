"use client";

import { useSidebar } from "../layout";

export default function HtmlAttributes() {
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
                    <h1>HTML Attributes</h1>

                    <h2>What are HTML Attributes?</h2>
                    <p>
                        Attributes provide additional information about HTML
                        elements. They are always included in the opening tag.
                    </p>

                    <h2>Common Attributes</h2>
                    <ul>
                        <li>
                            <strong>id</strong> - Specifies a unique id for an
                            element
                        </li>
                        <li>
                            <strong>class</strong> - Specifies one or more class
                            names for an element
                        </li>
                        <li>
                            <strong>href</strong> - Specifies the URL for a link
                            (<code>&lt;a&gt;</code> tag)
                        </li>
                        <li>
                            <strong>src</strong> - Specifies the source file for
                            images, scripts, etc.
                        </li>
                        <li>
                            <strong>alt</strong> - Provides alternative text for
                            images
                        </li>
                        <li>
                            <strong>title</strong> - Adds extra information
                            about an element (usually shown as a tooltip)
                        </li>
                    </ul>

                    <h2>Example of Using Attributes</h2>
                    <pre>{`<a href="https://www.example.com" title="Visit Example">
  Visit Example Website
</a>

<img src="image.jpg" alt="A beautiful scenery" />`}</pre>

                    <h2>Multiple Attributes</h2>
                    <p>
                        You can use multiple attributes inside a tag separated
                        by spaces:
                    </p>
                    <pre>{`<input type="text" id="username" class="input-field" placeholder="Enter your name" />`}</pre>

                    <h2>Boolean Attributes</h2>
                    <p>
                        Some attributes are boolean. If present, they’re true.
                        Examples:
                    </p>
                    <ul>
                        <li>
                            <code>disabled</code> — disables an input or button
                        </li>
                        <li>
                            <code>checked</code> — pre-selects a checkbox or
                            radio button
                        </li>
                        <li>
                            <code>readonly</code> — makes an input field
                            read-only
                        </li>
                    </ul>

                    <h2>Summary</h2>
                    <p>
                        Attributes customize elements and give them additional
                        functionality or information.
                    </p>
                </div>
            </div>
        </div>
    );
}
