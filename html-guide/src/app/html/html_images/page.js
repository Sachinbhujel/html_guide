"use client";
import { useSidebar } from "../layout";
import Image from "next/image";

export default function HtmlImages() {
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
                        <h1>HTML Images</h1>
                        <p>
                            Images in HTML are defined using the{" "}
                            <code>&lt;img&gt;</code> tag.
                        </p>
                        <p>
                            The <code>&lt;img&gt;</code> tag is empty, it
                            contains attributes only, and does not have a
                            closing tag.
                        </p>
                        <ul>
                            <li>
                                <code>src</code> – Specifies the path to the
                                image.
                            </li>
                            <li>
                                <code>alt</code> – Provides alternate text for
                                the image.
                            </li>
                            <li>
                                <code>width</code> and <code>height</code> – Set
                                the size of the image.
                            </li>
                        </ul>

                        <h2>Example</h2>
                        <pre>
                   
                                {`<img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl in a jacket" width="200" height="300">`}
                   
                        </pre>

                        <h2>Live Output</h2>
                        <Image
                            src="https://www.w3schools.com/html/img_girl.jpg"
                            alt="Girl in a jacket"
                            width="200"
                            height="300"
                        />

                        <h2>Image with Text</h2>
                        <p>
                            You can also place an image inside a paragraph or
                            along with text:
                        </p>
                        <pre>
                       
                                {`<p>My cat: <img src="https://www.w3schools.com/html/img_chania.jpg" alt="Cat"></p>`}
                       
                        </pre>

                        <h2>Live Output</h2>
                        <p>
                            My cat:{" "}
                            <Image
                                src="https://www.w3schools.com/html/img_chania.jpg"
                                alt="Cat"
                                 width="200"
                            height="300"
                            />
                        </p>

                        <h2>Best Practices</h2>
                        <ul>
                            <li>
                                Always use the <code>alt</code> attribute for
                                accessibility.
                            </li>
                            <li>
                                Use appropriate image sizes for performance.
                            </li>
                            <li>
                                Consider responsive images for different
                                devices.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
