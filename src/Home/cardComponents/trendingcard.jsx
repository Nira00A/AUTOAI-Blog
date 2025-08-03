import { FaStar } from "react-icons/fa";

export function SmallCard({rank , title , img , user , date , tag , footprints}){
    return(
        <div className="h-[280px] w-[280px] bg-neutral-900 flex flex-col rounded-2xl relative">
            <div className="h-full relative">
                <img src={img} className="h-full w-full rounded-t-2xl"/>
                <div className="right-0 bottom-0 p-[2px] text-[10px] m-1 rounded-md bg-red-300 text-white absolute">
                    #{tag}
                </div>
                <div className="top-0 left-0 absolute p-4 bg-red-300 text-white rounded-tl-2xl">
                    #{rank}
                </div>
            </div>
            <div className="h-full w-full flex flex-col p-2 relative justify-between">
                <div className="text-white font-semibold text-[18px] w-full overflow-hidden text-ellipsis line-clamp-2">
                    {title}
                </div>


                <div className="text-neutral-500 flex flex-row items-center mb-3 gap-1">
                    <div className="rounded-full bg-white h-8 w-8">
                        
                    </div>
                    <div className="flex flex-col text-[12px]">
                        <div className="text-white">
                            by {user}
                        </div>
                        <div className="text-neutral-500">
                            {date}
                        </div>
                        <div className="flex justify-center items-center text-[12px] gap-1 right-0 bottom-0 p-2 absolute text-red-300">
                            <FaStar/> {footprints} NEW READS
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function LargeCard({rank , title , img , user , date , tag , footprints}){
    return(
        <div className="h-[570px] w-full bg-neutral-900 grid grid-rows-2 rounded-2xl relative">
            <div className="h-full relative">
                <img src={img} className="h-full w-full rounded-t-2xl"/>
                <div className="right-0 bottom-0 p-[2px] text-[10px] m-1 rounded-md bg-red-300 text-white absolute">
                    #{tag}
                </div>
                <div className="top-0 left-0 absolute p-4 bg-red-300 text-white rounded-tl-2xl">
                    #{rank}
                </div>
            </div>
            <div className="h-full w-full flex flex-col p-2 relative justify-between">
                <div className="text-white font-semibold text-[18px] w-full overflow-hidden text-ellipsis line-clamp-2">
                    {title}
                </div>


                <div className="text-neutral-500 flex flex-row items-center mb-3 gap-1">
                    <div className="rounded-full bg-white h-8 w-8">
                        
                    </div>
                    <div className="flex flex-col text-[12px]">
                        <div className="text-white">
                            by {user}
                        </div>
                        <div className="text-neutral-500">
                            {date}
                        </div>
                        <div className="flex justify-center items-center text-[12px] gap-1 right-0 bottom-0 p-2 absolute text-red-300">
                            <FaStar/> {footprints} NEW READS
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}