"use client";

import { useSidebar } from "../layout";

export default function HtmlQuotations() {
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
                    <h1>HTML Quotations</h1>

                    <h2>What are HTML Quotations?</h2>
                    <p>
                        HTML provides tags to include quotations and citations
                        properly on web pages.
                    </p>

                    <h2>Quotation Tags</h2>
                    <ul>
                        <li>
                            <code>&lt;q&gt;</code>: Defines a short inline
                            quotation.
                        </li>
                        <li>
                            <code>&lt;blockquote&gt;</code>: Defines a long
                            quotation (block-level).
                        </li>
                        <li>
                            <code>&lt;cite&gt;</code>: Defines the source or
                            author of a quotation.
                        </li>
                        <li>
                            <code>&lt;abbr&gt;</code>: Defines an abbreviation
                            or acronym.
                        </li>
                    </ul>

                    <h2>Examples & Live Output:</h2>

                    <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>
                        1. &lt;q&gt; — Inline Quote
                    </h3>
                    <pre>{`<p>This is a short quote: <q>To be or not to be.</q></p>`}</pre>
                    <iframe
                        srcDoc={`<!DOCTYPE html>
<html>
  <body>
    <p>This is a short quote: <q>To be or not to be.</q></p>
  </body>
</html>`}
                        style={{
                            width: "100%",
                            height: "60px",
                            border: "1px solid #ccc",
                        }}
                    ></iframe>

                    <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>
                        2. &lt;blockquote&gt; — Block Quote
                    </h3>
                    <pre>{`<blockquote>
  <p>This is a longer block quote from a famous author.</p>
</blockquote>`}</pre>
                    <iframe
                        srcDoc={`<!DOCTYPE html>
<html>
  <body>
    <blockquote>
      <p>This is a longer block quote from a famous author.</p>
    </blockquote>
  </body>
</html>`}
                        style={{
                            width: "100%",
                            height: "100px",
                            border: "1px solid #ccc",
                        }}
                    ></iframe>

                    <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>
                        3. &lt;cite&gt; — Citation
                    </h3>
                    <pre>{`<p><cite>— William Shakespeare</cite></p>`}</pre>
                    <iframe
                        srcDoc={`<!DOCTYPE html>
<html>
  <body>
    <p><cite>— William Shakespeare</cite></p>
  </body>
</html>`}
                        style={{
                            width: "100%",
                            height: "50px",
                            border: "1px solid #ccc",
                        }}
                    ></iframe>

                    <h3 style={{ fontSize: "18px", marginBottom: "5px" }}>
                        4. &lt;abbr&gt; — Abbreviation
                    </h3>
                    <pre>{`<p>The abbreviation <abbr title="World Health Organization">WHO</abbr> is widely known.</p>`}</pre>
                    <iframe
                        srcDoc={`<!DOCTYPE html>
<html>
  <body>
    <p>The abbreviation <abbr title="World Health Organization">WHO</abbr> is widely known.</p>
  </body>
</html>`}
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
