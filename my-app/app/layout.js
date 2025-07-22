import "./globals.css";
import Footer from "./component/footer/page";
import Navbar from "./component/navbar/page";

export const metadata = {
  title: "Html Guide",
  description: "Learn HTML like W3Schools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=code_blocks" />
      </head>
      <body className="min-h-screen">
        <Navbar />

        {/*<div className="flex">
          <aside className="fixed top-26 left-0 w-64 h-[calc(100vh-4rem)] bg-gray-100 p-4 shadow">
            <ul className="space-y-4">
              <li><a className="text-gray-800 hover:text-blue-600" href="/html_introduction">HTML Introduction</a></li>
              <li><a className="text-gray-800 hover:text-blue-600" href="/html_elements">HTML Elements</a></li>
            </ul>
          </aside>
          
          <main className="ml-64 mt-16 p-6 w-full">{children}</main>
        </div>*/}
      </body>
    </html>
  );
}