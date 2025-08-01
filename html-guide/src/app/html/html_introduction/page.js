"use client";

import { useSidebar } from "../layout";

export default function HtmlIntroduction() {
        const { setSidebarOpen } = useSidebar();
    return (
        <>
            <div className="html-home-main">
                <div className="html-home">
                    <span className="material-symbols-outlined html-dock" onClick={() => setSidebarOpen((prev) => !prev)}>
                        dock_to_right
                    </span>
                    <div className="container">
                        <h1>Introduction to HTML</h1>
                        <p>
                            HTML (HyperText Markup Language) is the foundation
                            of web development. It allows developers to
                            structure content for the web using a standardized
                            system of tags.
                        </p>

                        <h2>Why Learn HTML?</h2>
                        <ul>
                            <li>
                                It is the first step toward becoming a web
                                developer.
                            </li>
                            <li>Every website you visit is built with HTML.</li>
                            <li>
                                It works in all browsers and integrates well
                                with CSS and JavaScript.
                            </li>
                        </ul>

                        <h2>Core Concepts of HTML</h2>
                        <ul>
                            <li>
                                <strong>Elements:</strong> Building blocks of
                                HTML pages.
                            </li>
                            <li>
                                <strong>Tags:</strong> Special keywords wrapped
                                in angle brackets.
                            </li>
                            <li>
                                <strong>Attributes:</strong> Provide additional
                                information about elements.
                            </li>
                            <li>
                                <strong>Nesting:</strong> Elements can be nested
                                inside other elements.
                            </li>
                        </ul>

                        <h2>Example of a Simple HTML Element</h2>
                        <pre className="html-document">
                            {`<p>This is a paragraph in HTML.</p>`}
                        </pre>

                        <h2>Live Output:</h2>
                        <iframe
                            srcDoc={`<p>This is a paragraph in HTML.</p>`}
                        ></iframe>

                        <h2>How HTML Works</h2>
                        <p>
                            When a browser loads an HTML file, it reads the tags
                            and displays the content according to their meaning.
                            For example:
                        </p>
                        <ul>
                            <li>
                                <code>&lt;h1&gt;</code> is used for the main
                                heading.
                            </li>
                            <li>
                                <code>&lt;p&gt;</code> is used for paragraphs.
                            </li>
                            <li>
                                <code>&lt;a&gt;</code> is used for links.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
