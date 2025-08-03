import { FaInfo, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NewArticle(){
    return(
        <div className="w-full">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-[70%_30%] gap-3 pt-10">
                    {/*1st section*/}
                    <div className="flex flex-col gap-6">
                        {/*Draft and Template section*/}
                        <div className="w-full flex gap-3">
                            {/*Creative Draft*/}
                            <div className=" w-full overflow-hidden p-3 h-[250px] border border-neutral-800 rounded-lg">
                                <img src="svg/creativeBlog.svg" className="w-full h-[50%] rounded-lg object-cover"/>

                                <div className="flex flex-col gap-2">
                                    <div className="text-white text-lg top-1 font-medium">
                                        ✨ Creative draft : Unleash your Creativity
                                    </div>

                                    <div className="text-neutral-500 text-sm pt-3">
                                        Start your creativity with immersive text editor that create with you.
                                    </div>

                                    
                                    <Link to={'/creative-blog'} style={{width: '100%'}} className="group button h-10 text-white font-bold w-full flex justify-center items-center bg-neutral-700 rounded-full">
                                        <div className="z-10">Create Draft</div>
                                    </Link>
                                </div>
                            </div>

                            {/*Blank Draft*/}
                            <div className="w-full overflow-hidden p-3 h-[250px] border border-neutral-800 rounded-lg">
                                <img src="svg/emptyBlog.svg" className="w-full h-[50%] rounded-lg object-cover"/>

                                <div className="flex flex-col gap-2">
                                    <div className="text-white text-lg top-1 font-medium">
                                        📝 Blank Draft : Begin with a Clean Slate
                                    </div>

                                    <div className="text-neutral-500 text-sm pt-3">
                                        Start with a blank page—your ideas, your way.
                                    </div>

                                    <Link to={'/blog'} style={{width: '100%'}} className="button h-10 text-white font-bold w-full flex justify-center items-center bg-neutral-700 rounded-full hover:">
                                        <div className="z-10">Start Blank</div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/*Related post sedtion*/}
                        <div>
                            <div className="font-medium text-white text-2xl">Related Topics</div>
                        </div>
                    </div>

                    {/*2nd section*/}
                    <div className="flex flex-col items-center">
                        <div className="flex flex-row gap-3 relative">
                            

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}