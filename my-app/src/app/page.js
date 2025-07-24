"use client";

export default function Home() {
    const tutorials = [
        { title: "Learn HTML", color: "bg-orange-400", link: "/html" },
        { title: "Learn CSS", color: "bg-blue-500", link: "/css" },
        { title: "Learn JavaScript", color: "bg-yellow-400", link: "/js" },
        { title: "Learn Python", color: "bg-green-500", link: "/python" },
        { title: "Learn SQL", color: "bg-indigo-500", link: "/sql" },
        { title: "Learn React", color: "bg-cyan-500", link: "/react" },
    ];
    return (
        <>
            <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-20">
                {/* Search Section */}
                <section className="w-full max-w-3xl flex flex-col items-center mb-20">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                        Learn to Code — For Free
                    </h2>
                    <p className="text-gray-600 text-center max-w-xl mb-7">
                        Explore tutorials, references, and examples to master
                        web development and programming languages.
                    </p>
                    <input
                        type="search"
                        placeholder="Search tutorials, references, and examples"
                        className="w-full px-6 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </section>

                {/* Tutorials Grid */}
                <section className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {tutorials.map(({ title, color, link }) => (
                        <a
                            key={title}
                            href={link}
                            className={`flex flex-col justify-center items-center h-40 rounded shadow-md text-white text-xl font-semibold ${color} hover:opacity-90 transition-opacity`}
                        >
                            {title}
                        </a>
                    ))}
                </section>
            </div>
        </>
    );
}