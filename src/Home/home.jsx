import { useRef , useEffect} from "react";
import { LargeCard, SmallCard } from "./cardComponents/trendingcard";
import {FaLightbulb,FaChartLine,FaBrain,FaRocket,FaFlask,FaTools,FaCogs,FaMobileAlt,FaCloud,FaBalanceScale,FaUserShield,FaGavel,FaUserSecret,FaRobot,FaNetworkWired, FaArrowLeft,FaArrowRight} from "react-icons/fa";
import RecentCard from "./cardComponents/recentcard";
import {TypeAnimation} from 'react-type-animation'
import { motion, useScroll } from "motion/react"
import HeroCard from "./cardComponents/herocard";

export default function HomeContent() {
  const scrollRef = useRef(null)
  const containerRef = useRef(null)
  const width = 180
  const data = [
  {
    rank: 1,
    title: "Understanding AI Ethics swfgas gwggrgrw gwrgwrgwrgx srgsrwgwgwwfw fwfwf",
    img: "https://example.com/images/ai-ethics.jpg",
    user: "Jane Doe",
    date: "2025-06-10",
    tag: "AI Ethics",
    footprints: 120
  },
  {
    rank: 2,
    title: "Machine Learning Basics",
    img: "https://example.com/images/ml-basics.jpg",
    user: "John Smith",
    date: "2025-06-12",
    tag: "Machine Learning",
    footprints: 95
  },
  {
    rank: 3,
    title: "Deep Learning Advances",
    img: "https://example.com/images/deep-learning.jpg",
    user: "Alice Johnson",
    date: "2025-06-14",
    tag: "Deep Learning",
    footprints: 150
  },
  {
    rank: 4,
    title: "AI in Healthcare",
    img: "https://example.com/images/ai-healthcare.jpg",
    user: "Bob Lee",
    date: "2025-06-13",
    tag: "Healthcare AI",
    footprints: 110
  },
  {
    rank: 5,
    title: "Natural Language Processing Trends",
    img: "https://example.com/images/nlp-trends.jpg",
    user: "Carol King",
    date: "2025-06-11",
    tag: "NLP",
    footprints: 130
  }
]
  const subcategories = [
  // Insights
  { name: "Trends Analysis", icon: <FaChartLine /> },
  { name: "Expert Opinions", icon: <FaLightbulb /> },
  { name: "Research Highlights", icon: <FaBrain /> },

  // Innovations
  { name: "AI Startups", icon: <FaRocket /> },
  { name: "Breakthroughs", icon: <FaFlask /> },
  { name: "Tech Prototypes", icon: <FaTools /> },

  // Applications
  { name: "Automation", icon: <FaCogs /> },
  { name: "Mobile AI", icon: <FaMobileAlt /> },
  { name: "Cloud Solutions", icon: <FaCloud /> },

  // Ethics
  { name: "Fairness", icon: <FaBalanceScale /> },
  { name: "Privacy & Security", icon: <FaUserShield /> },
  { name: "AI Regulation", icon: <FaGavel /> },

  // Agents
  { name: "Virtual Assistants", icon: <FaUserSecret /> },
  { name: "Robotics", icon: <FaRobot /> },
  { name: "Multi-Agent Systems", icon: <FaNetworkWired /> },
];

  function scrollLeft() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -width, behavior: "smooth" });
    }
  }

  function scrollRight() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: width, behavior: "smooth" });
    }
  }

  const ParticleBackground = () => {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      // Set canvas to full window size
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      
      // Create particles
      const particles = [];
      const particleCount = 200;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2,
        });
      }
    
      // Animation loop
      let animationFrameId;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;
          
          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
          
          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
          ctx.fill();
        });
        
        animationFrameId = requestAnimationFrame(animate);
      };
      
      animate();
    
      // Cleanup
      return () => {
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationFrameId);
      };
  }, []);
  
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

  const ScrollLinked = () => {
    const { scrollYProgress } = useScroll()

    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 70,
                    left: 0,
                    right: 0,
                    height: 3,
                    originX: 0,
                }}
                className="z-[10000] default-gradient"
            />
        </>
    )
}

  return (
    <main className="bg-black min-h-screen pt-8 p-4 text-white font-sans">
      {/*Particle Effect*/}
      <ParticleBackground />

      {/*Scrollbar Effect*/}
      <ScrollLinked />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              EXPLORE THE FUTURE OF
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              <TypeAnimation 
                sequence={[
                  "AI & AUTOMATION",
                  2000,
                  "MACHINE LEARNING",
                  4000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                />
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Decode the World of AI—News, Guides, and Expert Analysis.
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

      {/* Info Message */}
      <section className="flex justify-center items-center">
        <div className="">
            
        </div>
      </section>

      {/* Trending Stories */}
      <section className="max-w-7xl mx-auto">
        <div className="text-2xl font-bold mb-6 cursor-pointer hover:underline">
          TRENDING TOPICS
        </div>
        <div className="h-[570px] grid grid-cols-2 gap-6">
          <div className="">
            <LargeCard />
          </div>
          <div style={{scrollbarWidth: "none"}} className="flex flex-wrap gap-3 overflow-scroll">
            {data.map((item)=>(
             <SmallCard
                rank={item.rank}
                title={item.title}
                img={item.img}
                user={item.user}
                date={item.date}
                tag={item.tag}
                footprints={item.footprints}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why to choose Section */}
      <section className="bg-neutral-950 py-16 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            WHY AI ENTHUSIASTS CHOOSE AUTOAI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert-Curated</h3>
              <p className="text-gray-400 text-sm">Content reviewed by AI researchers and industry professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Always Current</h3>
              <p className="text-gray-400 text-sm">Breaking news and updates within hours of developments</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">In-Depth Analysis</h3>
              <p className="text-gray-400 text-sm">Technical deep-dives explained in accessible language</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Global Perspective</h3>
              <p className="text-gray-400 text-sm">AI developments from around the world, not just Silicon Valley</p>
            </div>
          </div>
        </div>
      </section>

      {/*Category Section*/}
      <section className="w-full h-[60px] mb-12 flex flex-row items-center bg-neutral-950 relative">
          <button
            onClick={scrollLeft}
            className="z-10 p-2 mx-2 bg-neutral-800 rounded-full text-white hover:bg-neutral-700 transition"
            aria-label="Scroll left"
          >
            <FaArrowLeft />
          </button>
          
          <div style={{scrollbarWidth: "none" , scrollBehavior: "smooth"}} ref={scrollRef} className="flex flex-row text-sm items-center gap-5 overflow-x-auto relative">
            {subcategories.map(({name , icon})=>(
              <div
                key={name}
                className="flex flex-row h-[40px] hover:bg-gradient-to-r from-blue-500 to-purple-500 select-none cursor-pointer items-center gap-2 text-white whitespace-nowrap px-4 py-2 bg-neutral-800 rounded-md shadow-sm"
              >
                <span>{icon}</span>
                <span className="font-medium">{name}</span>
              </div>
            ))}
          </div>
          
          <button
            onClick={scrollRight}
            className="z-10 p-2 mx-2 bg-neutral-800 rounded-full text-white hover:bg-neutral-700 transition"
            aria-label="Scroll left"
          >
            <FaArrowRight />
          </button>
      </section> 

      {/* Recent Section */} 
      <section className="max-w-7xl mx-auto mb-6">
        <div className="text-2xl font-bold mb-6 cursor-pointer hover:underline">
          PUBLISHED RECENTLY
        </div>
        <div style={{scrollBehavior: 'smooth'}} 
        className="
        [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-blue-400
        [&::-webkit-scrollbar-thumb]:rounded-full
          scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100 h-[900px] flex flex-col gap-3 overflow-auto">
            {[1,2,3,4,5,6,7,8,9].map((_, idx)=>(
            <div key={idx} className="h-full">
              <RecentCard
                key={idx}
                title="How AI Is Transforming Healthcare"
                img="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
                date="June 16, 2025"
                tag="Healthcare"
                excerpt="Discover the latest breakthroughs in AI-driven diagnostics, patient care, and medical research."
                href="/articles/ai-healthcare"
              />
            </div>))}
        </div>
      </section>
    </main>
  );
}
