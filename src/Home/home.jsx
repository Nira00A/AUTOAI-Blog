import React from "react";

export default function HomeContent() {
  return (
    <main className="bg-black min-h-screen px-4 py-8 text-white font-sans">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            UNLOCK THE SECRETS OF
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              AI WITH THOMAS
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Your journey into the future of Artificial Intelligence begins here
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform">
            Begin Exploration
          </button>
        </div>
        {/* Featured Article Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
              alt="Artificial Intelligence in Space Exploration"
              className="rounded-lg w-full h-72 object-cover border-2 border-blue-500 shadow-lg"
            />
            <span className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-1 rounded-full text-xs font-bold">
              New
            </span>
            <div className="mt-4">
              <span className="uppercase text-xs text-pink-400 font-bold">
                Space
              </span>
              <h2 className="text-2xl font-bold mt-1 mb-2">
                ARTIFICIAL INTELLIGENCE IN SPACE EXPLORATION
              </h2>
              <p className="text-gray-400 text-sm mb-2">
                October 16, 2023
              </p>
              <p className="text-gray-300 mb-2">
                Explore how AI is revolutionizing our journey beyond Earth, from autonomous navigation to real-time data analysis.
              </p>
              <a href="#" className="text-pink-400 font-semibold hover:underline">
                READ MORE
              </a>
            </div>
          </div>
          {/* Side Articles */}
          <div className="grid gap-6">
            <div className="flex gap-4 items-start">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=200&q=80"
                alt="Computer Vision"
                className="w-24 h-20 rounded-lg object-cover border-2 border-purple-500"
              />
              <div>
                <span className="uppercase text-xs text-purple-400 font-bold">
                  Computer
                </span>
                <h3 className="font-semibold text-lg mb-1">
                  HIGH-VALUE APPLICATIONS OF COMPUTER VISION
                </h3>
                <p className="text-gray-400 text-xs mb-1">October 16, 2023</p>
                <a href="#" className="text-purple-400 text-xs font-semibold hover:underline">
                  READ MORE
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80"
                alt="Analysis"
                className="w-24 h-20 rounded-lg object-cover border-2 border-pink-500"
              />
              <div>
                <span className="uppercase text-xs text-pink-400 font-bold">
                  Science
                </span>
                <h3 className="font-semibold text-lg mb-1">
                  ANALYSIS RENDERED ENTIRELY HIGHLY INDEED TO GARDEN
                </h3>
                <p className="text-gray-400 text-xs mb-1">October 16, 2023</p>
                <a href="#" className="text-pink-400 text-xs font-semibold hover:underline">
                  READ MORE
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80"
                alt="Tech"
                className="w-24 h-20 rounded-lg object-cover border-2 border-blue-500"
              />
              <div>
                <span className="uppercase text-xs text-blue-400 font-bold">
                  Special
                </span>
                <h3 className="font-semibold text-lg mb-1">
                  ARTIFICIAL INTELLIGENCE IS THE NEXT BIG THING IN TECHNOLOGY
                </h3>
                <p className="text-gray-400 text-xs mb-1">October 16, 2023</p>
                <a href="#" className="text-blue-400 text-xs font-semibold hover:underline">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI & GPT Tools Section */}
      <section className="max-w-7xl mx-auto mt-16">
        <h2 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
          AI & GPT TOOLS
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tool Card 1 */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg p-5 border border-purple-700 shadow-lg">
            <img
              src="https://dummyimage.com/400x200/222/fff&text=AIGIFY"
              alt="AIGIFY"
              className="rounded-md mb-4 w-full h-32 object-cover"
            />
            <h3 className="font-bold text-lg mb-2">AIGIFY</h3>
            <p className="text-gray-400 text-sm mb-3">
              Create websites and presentations with AI-generated content and design.
            </p>
            <a href="#" className="text-purple-400 font-semibold hover:underline text-sm">
              READ MORE
            </a>
          </div>
          {/* Tool Card 2 */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg p-5 border border-pink-700 shadow-lg">
            <img
              src="https://dummyimage.com/400x200/333/fff&text=ESSAI"
              alt="ESSAI"
              className="rounded-md mb-4 w-full h-32 object-cover"
            />
            <h3 className="font-bold text-lg mb-2">ESSAI</h3>
            <p className="text-gray-400 text-sm mb-3">
              Discover powerful AI tools for research, writing, and creative work.
            </p>
            <a href="#" className="text-pink-400 font-semibold hover:underline text-sm">
              READ MORE
            </a>
          </div>
          {/* Tool Card 3 */}
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg p-5 border border-blue-700 shadow-lg">
            <img
              src="https://dummyimage.com/400x200/444/fff&text=SQUAD"
              alt="SQUAD"
              className="rounded-md mb-4 w-full h-32 object-cover"
            />
            <h3 className="font-bold text-lg mb-2">SQUAD</h3>
            <p className="text-gray-400 text-sm mb-3">
              Join a community of AI enthusiasts and professionals to learn and collaborate.
            </p>
            <a href="#" className="text-blue-400 font-semibold hover:underline text-sm">
              READ MORE
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
