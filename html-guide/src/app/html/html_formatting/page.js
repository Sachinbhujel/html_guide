"use client";

import { useSidebar } from "../layout";

export default function HtmlFormatting() {
  const { setSidebarOpen } = useSidebar();
  return (
    <div className="html-home-main">
      <div className="html-home">
        <span className="material-symbols-outlined html-dock" onClick={() => setSidebarOpen((prev) => !prev)}>
          dock_to_right
        </span>
        <div className="container">
          <h1>HTML Formatting</h1>

          <h2>What is HTML Formatting?</h2>
          <p>
            HTML formatting tags are used to format and style the text on a
            web page.
          </p>

          <h2>Common Formatting Tags</h2>
          <ul>
            <li><code>&lt;b&gt;</code>: Bold text</li>
            <li><code>&lt;strong&gt;</code>: Important (bold) text</li>
            <li><code>&lt;i&gt;</code>: Italic text</li>
            <li><code>&lt;em&gt;</code>: Emphasized (italic) text</li>
            <li><code>&lt;mark&gt;</code>: Highlighted text</li>
            <li><code>&lt;small&gt;</code>: Smaller text</li>
            <li><code>&lt;del&gt;</code>: Deleted (strikethrough) text</li>
            <li><code>&lt;ins&gt;</code>: Inserted (underlined) text</li>
            <li><code>&lt;sub&gt;</code>: Subscript text</li>
            <li><code>&lt;sup&gt;</code>: Superscript text</li>
          </ul>

          <h2>Examples:</h2>
          <pre>{`<p>This is <b>bold</b> text.</p>
<p>This is <strong>strong</strong> text.</p>
<p>This is <i>italic</i> text.</p>
<p>This is <em>emphasized</em> text.</p>
<p>This is <mark>highlighted</mark> text.</p>
<p>This is <small>small</small> text.</p>
<p>This is <del>deleted</del> text.</p>
<p>This is <ins>inserted</ins> text.</p>
<p>This is <sub>subscript</sub> text.</p>
<p>This is <sup>superscript</sup> text.</p>`}</pre>

          <h2>Live Output:</h2>
          <iframe
            srcDoc={`<!DOCTYPE html>
<html>
  <body>
    <p>This is <b>bold</b> text.</p>
    <p>This is <strong>strong</strong> text.</p>
    <p>This is <i>italic</i> text.</p>
    <p>This is <em>emphasized</em> text.</p>
    <p>This is <mark>highlighted</mark> text.</p>
    <p>This is <small>small</small> text.</p>
    <p>This is <del>deleted</del> text.</p>
    <p>This is <ins>inserted</ins> text.</p>
    <p>This is <sub>subscript</sub> text.</p>
    <p>This is <sup>superscript</sup> text.</p>
  </body>
</html>`}
            style={{ width: "100%", height: "280px", border: "1px solid #ccc" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
