import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useBlog } from "../contextApis/blogContext"
import { toast } from "react-toastify"
import Global404 from "../ErrorPages/error404Page"
import { FaComment, FaHeart, FaShare, FaTimes, FaUser } from "react-icons/fa"
import { AnimatePresence, motion } from "framer-motion"
import parse from 'html-react-parser';

export function BlogDisplay(){
    const [post , setPost] = useState(null)
    const [profile , setProfile] = useState(null)
    const [tags , setTags] = useState(null)
    const { slug } = useParams()
    const [copied , setCopied] = useState(false)
    const [tableOFContext , setTableOfContext] = useState([])
    const {loading , setLoading , blogFetch , toastifyNotification , accountFetch} = useBlog()
    const urlLink = window.location.href
    const [focusImg , setFocusImg] = useState('')
    const [heart , setHeart] = useState(false)
    const [share , setShare] = useState(false)
    const blogRef = useRef(null);
    const articleRef = useRef(null);

    /*console.log(document.querySelectorAll('h1'))*/

    useEffect(() => {
        if (!blogRef.current || !post) return;

        function onImgClick(e) {
            if (e.target && e.target.tagName === "IMG") {
                e.stopPropagation();
                setFocusImg(e.target.src)
            }
        }

        const blogNode = blogRef.current;
        blogNode.addEventListener("click", onImgClick);

        return () => {
            blogNode.removeEventListener("click", onImgClick);
        };
    }, [post]);


    useEffect(()=>{
        const fetchBlog = async () =>{
            setLoading(true);
            try {
                const result = await blogFetch({slug : slug})
                setPost(result.res)
            } catch (error) {
                console.log(error)
                toast.error('Try again later')
            } finally{
                setLoading(false);
            }
        }

        if(slug){
            fetchBlog()
        }
    },[slug])

    useEffect(()=>{
        const fetchAccount = async () =>{
            setLoading(true)
            try {
                const result = await accountFetch({userid : post.userid})
                setProfile(result.res)
            } catch (error) {
                console.log(error)
                toast.error('Try again later')
            } finally {
                setLoading(false)
            }
        }

        if(post){
            fetchAccount()
        }
    },[post])

    useEffect(()=>{
        if(post){
            setTags(JSON.parse(post.tags))
        }
    },[post])

    useEffect(()=>{
        if(!post) return
        if (!articleRef.current) return;

        const h1Array = []
        const slugify = (text) =>
        text.toLowerCase().replace(/[^\w]+/g, '-').replace(/(^-|-$)/g, '');

        articleRef.current.querySelectorAll('h1').forEach((item, index) => {
            const id = slugify(item.innerText) + '-' + index;
            item.id = id;   // Assign id to <h1>
            h1Array.push({ name: item.innerText, id });
        });

        setTableOfContext(h1Array)
    },[post])

    const handleShare = () =>{
        try {
            navigator.clipboard.writeText(urlLink)
            setCopied(true)
        } catch (error) {
            toast.error("Can't copy the link")
        }
    }

    const handleShareBottom = () =>{
        try {
            navigator.clipboard.writeText(urlLink)
            setShare(true)
            setTimeout(() => setShare(false) , 2000)
        } catch (error) {
            toast.error("Can't copy the link")
        }
    }

    const handleHeart = () =>{
        setHeart((v)=>!v)
    }

    if(!post) return <Global404 />

    return(
        <div>
            <AnimatePresence>{focusImg && <OverlayImg setImg={setFocusImg} img={focusImg}/>}</AnimatePresence>
            {toastifyNotification()}
            <div className="max-w-7xl mx-auto mt-10 px-3">
                <div className="flex flex-col items-center justify-center">
                    {/*Tags*/}
                    <div className="flex flex-row gap-1">
                        {tags ? tags.map((item , index)=>(
                            <div className="text-purple-300 text-xs px-2 py-1 bg-purple-500 rounded-lg" key={index}>
                                {item.name}
                            </div>
                        ))
                    :
                    ''}
                    </div>
                    
                    {/*Title*/}
                    <div className="mt-3 font-semibold text-4xl text-center text-white">
                        {post && post.title ? post.title : 'ok'}
                    </div>

                    {/*name and readtime*/}
                    <div className="flex flex-row items-center h-6 gap-3 mt-8 text-sm">
                        <div className="flex flex-row items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-neutral-800">
                                {profile && profile.image ? <img className="object-cover h-full w-full" src={profile.image}/>
                                :
                                <div className="flex justify-center text-neutral-500 items-center">
                                    {profile && profile.username ? profile.username[0] : <div className="w-full h-full flex justify-center items-center"><FaUser /></div>}
                                </div>}
                            </div>
                            <div className="text-neutral-500">
                                {profile && profile.username}
                            </div>
                        </div>

                        <div className="text-neutral-500">
                            {post && post.created_at.split('T')[0] ? post.created_at.split('T')[0] : 'ok'}
                        </div>

                        <div className=" text-neutral-500 bg-neutral-800 px-2 rounded-full">
                            {post && post.read_time ? post.read_time : 'ok'} mins read
                        </div>
                    </div>

                    {/*Sharable Buttons*/}
                    <div 
                        onClick={handleShare}
                        className="realtive mt-5 flex flex-row items-center text-xs gap-2 px-2 py-1 bg-neutral-800 hover:bg-neutral-700 rounded-md border border-neutral-700 text-white cursor-pointer">
                            <FaShare /> 
                            <div>{copied ? 'Copied' : 'Share'}</div>
                    </div>
                </div>


                <div className="flex flex-row justify-center">
                    {/* Table of Contents */}
                    <div
                        style={{paddingTop: '23px' , position: 'sticky' , top: 0}} 
                        className="w-[200px] pr-5">
                        <strong className="text-white">Contents</strong>
                        <ul>
                        {tableOFContext.map((item , index) => (
                            <li key={item.id}>
                            <a className="text-sm text-neutral-500 line-clamp-1" href={`#${item.id}`}>{index + 1}.{item.name}</a>
                            </li>
                        ))}
                        </ul>
                    </div>

                    {/*Body*/}
                    <div ref={blogRef} className="blog-post-body">
                        {post && <article ref={articleRef} className="blog-post-content"> {parse(post.content)} </article>}
                    </div>

                    {/**/}
                    <div className="w-[200px] pt-[23px] flex flex-row gap-3 justify-end">
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e3e3e3"><path d="M280-280h80v-200h-80v200Zm320 0h80v-400h-80v400Zm-160 0h80v-120h-80v120Zm0-200h80v-80h-80v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                        <FaComment className="cursor-pointer h-[18px] w-[18px] text-white"/>
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e3e3e3"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240ZM330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm34-80h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z"/></svg>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-10 mt-5 items-center">
                    <div className="flex flex-row gap-5">

                        {/*Like*/}
                        <motion.div 
                        whileTap={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 17 }}
                        onClick={handleHeart} 
                        className={`${heart ? 'bg-purple-200 text-purple-500 hover:bg-neutral-300' : 'text-white bg-neutral-800'} cursor-pointer p-3 bg-neutral-800 hover:bg-neutral-600 rounded-full`}>
                            <FaHeart />
                        </motion.div>
                        
                        {/*Share*/}
                        <div onClick={handleShareBottom} className="relative cursor-pointer p-3 bg-neutral-800 hover:bg-neutral-600 rounded-full">
                            <FaShare className=" text-white"/>

                            <motion.div 
                            initial={{opacity: 0 , x: -50}}
                            animate={share ? {opacity: 1 , x: 0} : {opacity: 0 , x: -50}}
                            exit={{opacity: 0 , x: 50}}
                            className="absolute font-bold text-xs rounded-full top-[10%] -right-16 p-2 bg-purple-200 text-purple-500">
                                Copied
                            </motion.div>
                        </div>
                    </div>
                    
                    <div className="h-[200px] w-[900px] max-[930px]:w-full flex flex-row items-center bg-neutral-800 rounded-3xl">
                        {/*Profile Icon*/}
                        <div className="ml-3 h-[100px] w-[100px] rounded-full bg-neutral-700">
                            {profile && profile.image ? <img className="object-cover h-full w-full" src={profile.image}/>
                            :
                            <div className="flex justify-center items-center text-[55px] text-neutral-500">
                                {profile && profile.username ? profile.username[0] : <div className="w-full h-full flex justify-center items-center"><FaUser /></div>}
                            </div>}
                        </div>

                        {/*Body of Author*/}
                        <div>

                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export const OverlayImg = ({setImg,img}) => {
    const imgRef = useRef()

    useEffect(()=>{
        function handleClickOutside(e){
            e.stopPropagation()
            if(!imgRef.current) return 

            if(!imgRef.current.contains(e.target)){
                setImg('')
            }
        }

        document.addEventListener('click' , handleClickOutside)

        return () => document.removeEventListener('click' , handleClickOutside)
    },[])

    return(
            <motion.div
            initial={{opacity:0 }} 
            animate={{opacity: 1 }}
            exit={{opacity: 0}}
            className="fixed inset-0 top-0 left-0 z-50 bg-black bg-opacity-70">
                <div onClick={() => setImg('')} className="absolute top-4 right-4 cursor-pointer text-white">
                    <FaTimes className="w-10 h-10"/>
                </div>
                
                <motion.div 
                initial={{opacity:0  , scale: 0}} 
                animate={{opacity: 1  , scale: 1}}
                exit={{opacity:0  , scale: 0}} 
                transition={{duration: 0.3 , ease: 'easeInOut'}} 
                className="h-full flex justify-center items-center object-cover">
                    <img ref={imgRef} className="w-[60%] h-[80%] object-cover" src={img} />
                </motion.div>
            </motion.div>
    )
}
