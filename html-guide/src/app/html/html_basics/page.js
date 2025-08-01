"use client";

import { useSidebar } from "../layout";

export default function HtmlBasics() {
   const { setSidebarOpen } = useSidebar();
    return (
        <div className="html-home-main">
            <div className="html-home">
                <span className="material-symbols-outlined html-dock"  onClick={() => setSidebarOpen((prev) => !prev)}>
                    dock_to_right
                </span>
                <div className="container">
                    <h1>HTML Basics</h1>
                    <p>
                        Let’s look at how you can use different types of data in
                        an HTML document.
                    </p>

                    <h2>Basic HTML Structure</h2>
                    <pre>{`<!DOCTYPE html>
<html>
  <head>
    <title>My HTML Page</title>
  </head>
  <body>
    <!-- Your content goes here -->
  </body>
</html>`}</pre>

                    <h2>Different Types of Data in HTML</h2>

                    <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>
                        1. Headings & Paragraphs
                    </h3>
                    <pre>{`<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>This is a paragraph of text.</p>`}</pre>

                    <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>
                        2. Links
                    </h3>
                    <pre>{`<a href="https://www.google.com">Visit Google</a>`}</pre>

                    <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>
                        3. Images
                    </h3>
                    <pre>{`<img src="https://via.placeholder.com/150" alt="Placeholder Image">`}</pre>

                    <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>
                        4. Lists
                    </h3>
                    <pre>{`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<ol>
  <li>First</li>
  <li>Second</li>
</ol>`}</pre>

                    <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>
                        5. Tables
                    </h3>
                    <pre>{`<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>25</td>
  </tr>
</table>`}</pre>

                    <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>
                        6. Forms
                    </h3>
                    <pre>{`<form>
  Name: <input type="text" name="name"><br>
  <input type="submit" value="Submit">
</form>`}</pre>

                    <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>
                        7. Multimedia (Video/Audio)
                    </h3>
                    <pre>{`<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4">
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>`}</pre>

                    <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>
                        8. Special Characters
                    </h3>
                    <pre>{`<p>5 > 3 and 3 < 5</p>
<p>Use &amp; for &</p>`}</pre>

                    <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>
                        9. Comments
                    </h3>
                    <pre>{`<!-- This is a comment in HTML -->`}</pre>

                    <h2>Live Output:</h2>
                    <iframe
                        srcDoc={`<!DOCTYPE html>
<html>
  <body>
    <h1>Main Heading</h1>
    <h2>Subheading</h2>
    <p>This is a paragraph of text.</p>
    <a href="https://www.google.com" target="_blank">Visit Google</a><br>
    <img src="https://via.placeholder.com/100" alt="Placeholder"><br>
    <ul><li>Item 1</li><li>Item 2</li></ul>
    <table border="1">
      <tr><th>Name</th><th>Age</th></tr>
      <tr><td>Alice</td><td>25</td></tr>
    </table>
    <form><input type="text" placeholder="Your Name"><input type="submit"></form>
    <p>5 &gt; 3 and 3 &lt; 5</p>
  </body>
</html>`}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
