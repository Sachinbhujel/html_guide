"use client";

import { useSidebar } from "../layout";

export default function HtmlComments() {
     const { setSidebarOpen } = useSidebar();
  return (
    <div className="html-home-main">
      <div className="html-home">
        <span className="material-symbols-outlined html-dock" onClick={() => setSidebarOpen((prev) => !prev)}>
          dock_to_right
        </span>
        <div className="container">
          <h1>HTML Comments</h1>

          <p>
            Comments in HTML are used to add notes or explanations within the code that are not displayed by the browser.
          </p>

          <h2>Why Use Comments?</h2>
          <ul>
            <li>To explain the code for yourself or others.</li>
            <li>To temporarily disable parts of code during testing.</li>
            <li>To leave reminders or instructions within the code.</li>
          </ul>

          <h2>How to Write Comments</h2>
          <pre>{`<!-- This is a comment in HTML -->`}</pre>

          <h2>Example</h2>
          <pre>{`<!DOCTYPE html>
<html>
  <head>
    <title>Example with Comments</title>
  </head>
  <body>
    <!-- This heading will be visible -->
    <h1>Hello World</h1>

    <!--
      This paragraph is commented out and will not appear in the browser.
    -->
    <!-- <p>This paragraph is hidden.</p> -->
  </body>
</html>`}</pre>

          <h2>Live Output:</h2>
          <iframe
            srcDoc={`<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>
    <!-- <p>This paragraph is hidden.</p> -->
  </body>
</html>`}
            style={{ width: "100%", height: "100px", border: "1px solid #ccc" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
