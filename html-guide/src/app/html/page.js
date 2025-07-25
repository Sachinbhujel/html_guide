import "../globals.css";

export default function page() {
    return (
        <>
            <div className="html-home">
                <span className="material-symbols-outlined html-dock-to-right">
                    dock_to_right
                </span>
                <div className="container">
                    <h1>HTML Tutorial</h1>
                    <p>
                        Welcome to the HTML tutorial. Here you will learn
                        everything you need to know about HTML – the language
                        for building web pages.
                    </p>

                    <h2>What is HTML?</h2>
                    <ul>
                        <li>
                            HTML stands for{" "}
                            <strong>HyperText Markup Language</strong>
                        </li>
                        <li>
                            HTML is the standard markup language for creating
                            web pages
                        </li>
                        <li>
                            HTML describes the structure of a web page using
                            elements
                        </li>
                        <li>HTML elements are represented by tags</li>
                        <li>
                            HTML files are saved with the <code>.html</code>{" "}
                            extension
                        </li>
                    </ul>

                    <h2>Example: Basic HTML Page</h2>
                    <pre>
                        &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt;
                        &lt;title&gt;My First HTML Page&lt;/title&gt;
                        &lt;/head&gt; &lt;body&gt; &lt;h1&gt;Hello,
                        World!&lt;/h1&gt; &lt;p&gt;This is my first HTML
                        page.&lt;/p&gt; &lt;/body&gt; &lt;/html&gt;
                    </pre>

                    <h2>Live Output:</h2>
                    <iframe
                        srcDoc={`
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>`}
                    ></iframe>

                    <h2>HTML Topics</h2>
                    <div className="topic-list">
                        <a href="html-elements">HTML Elements</a>
                        <a href="html-headings">HTML Headings</a>
                        <a href="html-paragraphs">HTML Paragraphs</a>
                        <a href="html-links">HTML Links</a>
                        <a href="html-images">HTML Images</a>
                        <a href="html-lists">HTML Lists</a>
                        <a href="html-tables">HTML Tables</a>
                        <a href="html-forms">HTML Forms</a>
                        <a href="html-attributes">HTML Attributes</a>
                        <a href="html-block-inline">HTML Block & Inline</a>
                        <a href="html-media">HTML Media</a>
                        <a href="html-semantics">HTML Semantic Elements</a>
                        <a href="html-colors">HTML Colors</a>
                    </div>
                </div>
            </div>
        </>
    );
}
