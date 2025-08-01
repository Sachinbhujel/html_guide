"use client";

export default function Home() {
    const tutorials = [
        { title: "Learn HTML", color: "bg-orange-400", link: "/html" },
        { title: "Learn CSS", color: "bg-green-400", link: "/css" },
        { title: "Learn JavaScript", color: "bg-yellow-400", link: "/js" },
        { title: "Learn React", color: "bg-blue-400", link: "/python" },
        { title: "Learn Node", color: "bg-lime-400", link: "/sql" },
        { title: "Learn Next.js", color: "bg-violet-400", link: "/react" },
        { title: "Learn Tailwind", color: "bg-cyan-400", link: "/tailwind" },
    ];
    return (
        <>
            <div className="min-h-screen  flex flex-col items-center px-4 py-20">
                {/* Search Section */}
                <section className="w-full max-w-3xl flex flex-col items-center mb-20">
                    <h2 className="text-4xl font-bold mb-6 text-center">
                        Learn to Code — For Free
                    </h2>
                    <p className="text-gray-700 text-center max-w-xl mb-7">
                        Explore tutorials, references, and examples to master
                        web development and programming languages.
                    </p>
                    <input
                        type="search"
                        placeholder="Search tutorials, references, and examples"
                        className="w-full px-3 py-3 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-lg text-center underline font-medium mt-4 text-blue-500">
                        Not Sure Where To Begin?
                    </span>
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
