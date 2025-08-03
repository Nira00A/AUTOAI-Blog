import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter , FaEnvelope} from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function About(){
    return(
        <div className={`text-white relative`}>
            {/*About Hero section*/}
            <section className="max-w-7xl h-[790px] mx-auto px-5 mb-12">
                <div className="w-full h-full grid grid-cols-[50%_50%] select-none">
                    {/*Profile img section*/}
                    <div>
                        <div className="h-full w-[350px] ml-[175px] relative">
                            <img draggable="false"  className="w-full h-full object-cover" src="/utilities/astronaut.svg"/>
                        
                            <div className="absolute border-2 border-white rounded-lg top-[25%] -left-[50%] w-[350px] h-[390px] bg-black">
                                <div className="absolute top-[10%] -left-[7%] px-3 py-2 text-purple-500 bg-white rounded-md">
                                    <FaEnvelope className="h-5 w-5"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*About me section*/}
                    <div className="w-full h-full flex flex-col gap-3 justify-center">
                        <div className="">
                            <div className="relative text-6xl font-bold text-white">
                                <div className="relative z-20">ABOUT US</div>

                                <img draggable="false"  className="z-10 absolute h-28 w-28 -top-5 left-[30%]" src="/utilities/circle.svg" />
                            </div>

                        </div>

                        <div className="text-neutral-500">
                            <div className="min-w-[200px] pt-1">-Empowering the future where intelligent
                            automation meets human possibility</div>
                        </div>

                        <ul className="relative text-neutral-500 list-disc flex flex-col gap-2 mt-10 ml-5">
                            <li>Empower your thoughts with blogging</li>
                            <li>Writing helps you organize complex ideas and deepen your understanding.</li>
                            <li>Blogging motivates ongoing research and curiosity.</li>
                        
                            <img draggable="false"  className="absolute h-20 w-20 -bottom-[40%] left-[60%]" src="/utilities/styledSig.svg"/>
                        </ul>
                    </div>
                </div>
            </section>

            {/*About Body section*/}
            <section className="max-w-7xl h-max mx-auto pt-12 pb-10">
                <div className="flex flex-col items-center gap-3">
                    <div className="font-semibold border-b-2">OUR MISSION</div>

                    <div className="text-3xl leading-snug text-center w-[60%]">
                        We believe that blogging is more than just sharing ideas—it's 
                        about sparking conversations and building relationships
                    </div>

                    <div className="text-neutral-500 leading-relaxed w-full text-center lg:w-4/5 mt-6">
                        At AutoAI, we are a collective of creative technologists, 
                        passionate writers, and curious minds dedicated to making 
                        the world of blogging and intelligent automation accessible,
                        inspiring, and rewarding for everyone.

                        <br />
                        Our community brings together innovators and explorers from
                        all walks of life—content creators, developers, business leaders,
                        and newcomers—united by the belief that sharing knowledge and
                        experience.
                    </div>

                    <Link to={'/signin'} className="mt-6 py-2 px-4 bg-purple-500 rounded-lg cursor-pointer hover:opacity-80">
                        Join us
                    </Link>
                </div>
            </section>

            <section className="relative w-full h-max flex flex-col justify-center items-center  bg-neutral-950 mx-auto pt-12 pb-10">
                <div className="w-[600px] h-[300px] rounded-md bg-neutral-500">
                </div>

                <div className="mt-6 text-xl font-semibold italic bottom-0">
                    "A video makes the app easier to understand and more relatable."
                </div>
            </section>

            <section className="max-w-7xl h-max mx-auto pt-12 p-5 pb-10">
                <div className="flex flex-col items-center gap-10">
                    <div className="font-semibold border-b-2">Why to choose us</div>

                    <div className="flex flex-row max-[1024px]:flex-col gap-10 p-5">
                        {['A','B','C'].map((items)=>(
                            <div className="flex flex-col gap-3">
                                <div className="h-[400px] w-[300px] rounded-md bg-neutral-500">

                                </div>

                                <div className="w-full text-center">This is an example </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <SocialSidebar />
            
        </div>
    )
}

function SocialSidebar(){
    return (
        <div className="absolute top-[340px] left-4 w-10 rounded-lg shadow-md flex flex-col items-center justify-center p-2 space-y-2">
        
        {/* GitHub */}
        <Link
            to="/github"d
            className="bg-gray-800 hover:bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
            aria-label="GitHub"
        >
            <FaGithub className="w-4 h-4" />
        </Link>

        {/* LinkedIn */}
        <Link
            to="/linkedin"
            className="bg-blue-700 hover:bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
            aria-label="LinkedIn"
        >
            <FaLinkedin className="w-4 h-4" />
        </Link>

        {/* Twitter */}
        <Link
            to="/twitter"
            className="bg-blue-400 hover:bg-blue-300 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
            aria-label="Twitter"
        >
            <FaTwitter className="w-4 h-4" />
        </Link>
        
        </div>
    );
};