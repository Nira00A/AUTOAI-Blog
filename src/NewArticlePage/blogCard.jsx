import { Link , NavLink, useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaBug, FaEllipsisH, FaExpand, FaFile } from 'react-icons/fa';
import { useBlog } from '../contextApis/blogContext';
import { useProfile } from '../contextApis/profileContext';

export default function BlogCard({ data }) {
  const {userid , title, meta_image , meta_description , slug , tags} = data;
  const [mouseEnterImg , setMouseEnterImg] = useState(false)
  const [openMenu , setOpenMenu] = useState(false)
  const [account , setAccount] = useState('')
  const [profileSlug , setProfileSlug] = useState('')
  const { accountFetch } = useBlog()
  const { profileSlugFetch } = useProfile()

  useEffect(()=>{
    const controller = new AbortController();

    const fetchAccount = async () =>{
      try {
        const account = await accountFetch({userid : userid})
        setAccount(account.res)
      } catch (error) {
        console.log(error)
      }
    }

    fetchAccount()
    
    return () => controller.abort
  },[])

  useEffect(()=>{
      const controller = new AbortController();

      const fetchProfileSlug = async () =>{
        try {
          const slug = await profileSlugFetch({userid : userid})
          setProfileSlug(slug.res.slug)
        } catch (error) {
          console.log(error)
        }
      }

      fetchProfileSlug()
      
      return () => controller.abort
  },[])

  const tagsArray = JSON.parse(tags)

  const imageFullscreen = () =>{
    window.open(meta_image)
  }

  const handleMouseLeave = () =>{
    setMouseEnterImg(false)
    setOpenMenu(false)
  }

  return (
    <div className='grid grid-rows-[50%,50%] rounded-lg w-full max-w-[350px] h-[280px] bg-neutral-800'>
      <div className='relative w-full'>
        <motion.img
          onMouseEnter={()=>setMouseEnterImg(true)}
          onMouseLeave={()=>setMouseEnterImg(false)}
          animate={mouseEnterImg ? {opacity: 0.5} : {opacity: 1}}
          className='w-full h-full rounded-t-lg hover:opacity-50 object-cover'
          src={meta_image}
          alt={title}
        />

        <div 
          onMouseEnter={()=>setMouseEnterImg(true)}
          onMouseLeave={handleMouseLeave} 
          className='absolute flex flex-row gap-2 p-2 z-50 top-0 right-0 cursor-pointer'>
          <motion.div 
            onClick={imageFullscreen}
            initial={{opacity: 0}}
            animate={mouseEnterImg ? {opacity: 1} : {opacity: 0}}
            transition={{duration: 0.3 , ease: 'easeInOut'}}
            className='cursor-pointer'
          >
            <FaExpand className='text-neutral-300 h-5 w-5'/>
          </motion.div>

          <motion.div 
            onClick={()=>setOpenMenu((v)=>!v)}
            initial={{opacity: 0}}
            animate={mouseEnterImg ? {opacity: 1} : {opacity: 0}}
            transition={{duration: 0.3 , ease: 'easeInOut'}}
          >
            <FaEllipsisH className='text-neutral-300 h-5 w-5 relative'/>

            {(openMenu) && (
              <motion.div
              className='absolute rounded-md text-sm flex flex-col gap-1 p-1 bg-neutral-800 border border-neutral-700'>
                <div className='text-neutral-300 flex flex-row items-center gap-1 hover:text-red-500'><svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e3e3e3"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240ZM330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm34-80h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z"/></svg> Report</div>
                <div className='text-neutral-300 flex flex-row items-center gap-2'> <FaBug /> Bug</div>
              </motion.div>
            )}
          </motion.div>
        </div>

        <div className='absolute bottom-0 left-0 p-1 flex flex-row gap-1 flex-wrap'>
          {tagsArray.map(({id , name}) => (
            <div key={id} className='text-xs text-white bg-purple-500 rounded-full px-2 py-1'>
              {name}
            </div>
          ))}
        </div>
      </div>

      <div className='p-2 text-white'>
          <div className='w-full flex flex-row gap-2'>
            <div className='w-6 h-6 rounded-full bg-black'>

            </div>

            <NavLink to={`/profile/${profileSlug}`} className='text-white text-sm hover:underline'>
              {account && account.username}
            </NavLink>
          </div>

          <div className='text-xl line-clamp-1'>
            {title}
          </div>

          <div className='mt-2 text-sm text-neutral-500 line-clamp-2'>
            {meta_description}
          </div>

          <div className='w-full flex'>
            <Link className='mt-1 text-sm hover:underline text-purple-300' to={`/blogs/${slug}`}>
              Read here
            </Link>
          </div>
      </div>
    </div>
  );
}
