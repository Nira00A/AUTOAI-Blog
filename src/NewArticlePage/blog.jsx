import {motion , AnimatePresence} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaBug, FaSearch } from 'react-icons/fa'
import { useBlog } from '../contextApis/blogContext'
import BlogCard from './blogCard'
import { useProfile } from '../contextApis/profileContext'

export default function Blog(){
    const [onSearchClick , setOnSearchClick] = useState(false)
    const [searchVal , setSearchVal] = useState('')
    const tagsRef = useRef()
    const [left , setlLeft] = useState(false)
    const [right , setRight] = useState(true)
    const {allPost} = useBlog()
    const [categoryMenu , setCategoryMenu] = useState(false)
    const [currentCategory , setCurrentCategory] = useState('new')
    
    const blogCategories = [
        { "id": 1, "name": "new" },
        { "id": 2, "name": "trendy" },
        { "id": 3, "name": "featured" },
        { "id": 4, "name": "popular" },
    ]


    const tags = [
        { "name": "AI Trends" },
        { "name": "Data" },
        { "name": "Reports" },
        { "name": "Research" },
        { "name": "Market" },
        { "name": "Breakthroughs" },
        { "name": "Startups" },
        { "name": "Tools" },
        { "name": "Emerging Tech" },
        { "name": "Patents" },
        { "name": "Real-world AI" },
        { "name": "Use Cases" },
        { "name": "Automation" },
        { "name": "Integration" },
        { "name": "Deployment" },
        { "name": "Bias" },
        { "name": "Privacy" },
        { "name": "Regulation" },
        { "name": "Responsible AI" },
        { "name": "Fairness" },
        { "name": "Autonomous" },
        { "name": "Bots" },
        { "name": "Multi-agent" },
        { "name": "Architectures" },
        { "name": "Assistants" }
    ]

    const scrollLeft = () =>{
        if(tagsRef.current){
            tagsRef.current.scrollBy({left: -150, behavior: 'smooth' })
        }
    }

    const scrollRight = () =>{
        if(tagsRef.current){
            tagsRef.current.scrollBy({left: 150, behavior: 'smooth' })
        }
    }

    const visibleScrollButtons = () =>{
        const el = tagsRef.current
        if(el){
            setlLeft(el.scrollLeft > 0)
            setRight(el.scrollLeft + el.clientWidth < el.scrollWidth)
        }
    }

    useEffect(()=>{
        const el = tagsRef.current
        if(!el) return

        el.addEventListener('scroll' , visibleScrollButtons)
        visibleScrollButtons()

        return () => {el.removeEventListener('scroll' , visibleScrollButtons)}
    },[])

    return(
        <div className="h-max max-w-7xl mt-10 mx-auto px-5">
            <div className='w-full flex justify-between'>
                {/*Search Bar*/}
                <motion.div
                onMouseEnter={()=>setOnSearchClick(true)}
                onMouseLeave={()=>setOnSearchClick(false)}
                className='focus:outline-purple-500 h-10 px-3 w-min rounded-full bg-neutral-800 flex flex-row items-center gap-2'>
                    <FaSearch className='text-purple-500'/>
                    <AnimatePresence>
                        {(onSearchClick || searchVal) && 
                            <motion.span
                            initial={{opacity: 0 , width: 0}}
                            animate={{opacity: 1 , width: 200}}
                            exit={{opacity: 0 , width: 0}}
                            transition={{duration: 0.3 , ease: 'easeInOut'}}>
                                <input value={searchVal} onChange={(e)=>setSearchVal(e.target.value)} className='text-white w-full focus-within:outline-none bg-transparent z-50' placeholder='Search...' type='search' id='search-blogs'/>
                            </motion.span>}
                    </AnimatePresence>
                </motion.div>

                <div className='bg-neutral-800 p-3 rounded-full hover:opacity-80 cursor-pointer'>
                    <FaBug className='text-white'/>
                </div>
            </div>

            <div className='mt-3 flex flex-col gap-3'>
                <div className='font-semibold text-neutral-300 text-4xl'>
                    Blogs
                </div>
                <div className='text-neutral-500'>
                    Discover insightful stories and ideas in our blog collection.
                </div>
            </div>

            <div className='mt-5 w-full relative overflow-y-scroll hide-scrollbar'>
                <button disabled={!left} onClick={scrollLeft} className={`${!left ? 'hidden' : ''} absolute top-[10%] p-1 hover:bg-purple-500 bg-neutral-300 z-50`}>
                    <FaArrowLeft />
                </button>

                <div ref={tagsRef} className='flex flex-row overflow-x-auto hide-scrollbar gap-1'>
                    {tags.map((item)=>(
                        <div key={item.name} className='px-2 py-1 whitespace-nowrap bg-neutral-800 rounded-full text-sm text-white hover:bg-neutral-600 cursor-pointer'>
                            {item.name}
                        </div>
                    ))}
                </div>

                <button disabled={!right} onClick={scrollRight} className={`${right ? 'hover:bg-purple-500 bg-neutral-300' : 'hidden'} absolute top-[10%] right-0 p-1 z-50`}>
                    <FaArrowRight />
                </button>
            </div>

            <div className='flex flex-col justify-between my-3'>
                <div onClick={()=>setCategoryMenu((v)=>!v)} className={`${categoryMenu ? 'bg-neutral-700 text-white' : ''} rounded-md p-1 w-min relative text-neutral-500`}>
                    <div className='flex flex-row items-center cursor-pointer hover:text-neutral-300'>
                        <div>{currentCategory}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#737373"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                    </div>
                
                    {categoryMenu && 
                    <AnimatePresence>
                        <motion.div
                        initial={{opacity: 0}}
                        animate={categoryMenu ? {opacity: 1} : {opacity: 0}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.3 , ease: 'easeInOut'}}
                        className='z-[100] absolute -left-1 -bottom-32 flex flex-col w-20 border border-neutral-700 bg-neutral-800'>
                            {blogCategories.map(({id , name})=>(
                                <div className='hover:bg-neutral-500 cursor-pointer p-1 text-sm' key={id}>
                                    {name}
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                    }
                </div>
            </div>

            <hr className='border-[1px] border-neutral-700'/>

            <div className='flex flex-row gap-3 mt-5'>
                {allPost.map((item)=>(
                    <BlogCard data={item}/>
                ))}
            </div>
        </div>
    )
}