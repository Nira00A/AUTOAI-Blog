import { FaArrowAltCircleRight, FaBriefcase, FaCog, FaEdit, FaPen, FaPlus, FaStar, FaUser } from "react-icons/fa";
import { AnimatePresence , motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { useState , useEffect} from "react";
import { useProfile } from "../contextApis/profileContext";
import { ProfileLoading } from "../LoadingPages/profileLoading";
import { useBlog } from "../contextApis/blogContext";
import { useAuth } from "../contextApis/authContext";
import { toast } from "react-toastify";

// src/components/ProfilePage.jsx
export default function ProfilePublic() {
    const [allPost , setAllPost] = useState(true)
    const [userPost , setUserPost] = useState()
    const { loadingProfile } = useProfile()
    const { toastifyNotification , accountFetch , blogFetchProfile} = useBlog()
    const { role } = useAuth()
    const {profileFetch} = useProfile()
    const [profile , setProfile] = useState({})
    const [account , setAccount] = useState({})
    const {profileSlug} = useParams();

    useEffect(()=>{
        const fetchProfile = async () =>{
            
            try {
                const result = await profileFetch({slug : profileSlug})
                setProfile(result.res)
            } catch (error) {
                console.log(error)
                toast.error('Try again later')
            } 
        }

        if(profileSlug){
            fetchProfile()
        }
    },[profileSlug])

    useEffect(()=>{
        const fetchAccount = async () =>{
            try {
                const result = await accountFetch({userid : profile.userid})
                setAccount(result.res)
            } catch (error) {
                console.log(error)
                toast.error('Try again later')
            }
        }

        if(profile){
            fetchAccount()
        }
    },[profile])

    useEffect(()=>{
        const fetchProfileBlogs = async () =>{
            try {
                const result = await blogFetchProfile({userid : profile.userid})
                setUserPost(result)
            } catch (error) {
                console.log(error)
            }
        }

        if(profile && profile.userid){
            fetchProfileBlogs()
        }
        
    },[profile])

    if (loadingProfile) return <ProfileLoading />
    
    return (
        <div>
            {toastifyNotification()}
            <div className="max-w-7xl mx-auto pt-10">
                {/*Top bar*/}
                <div className="relative bg-neutral-800 rounded-md w-full h-44">
                    {/*Banner edit button*/}
                    <div className="absolute p-2 m-1 bg-neutral-800 rounded-full cursor-pointer text-neutral-300 hover:text-white top-0 right-0">
                        <FaEdit />
                    </div>

                    {/*Profile Picture*/}
                    <div 
                    className="max-[425px]:h-32 max-[425px]:w-32 max-[425px]:top-[65%] max-[425px]:left-3 flex justify-center items-center transition-all absolute top-[50%] object-cover left-10 h-40 w-40 border-[8px] border-neutral-900 bg-neutral-800 rounded-full">
                        {profile && profile.profile_img ? 
                            <img src={ profile.profile_img} className="rounded-full w-full h-full object-cover" alt="profile-picture" />
                        :
                        <FaUser className="transition-all h-20 w-20 max-[425px]:h-16 max-[425px]:w-16 text-neutral-500"/>}
                    </div>
                </div>

                {/*Profile Introduction*/}
                <div className="flex justify-between mt-3 px-10 max-[425px]:px-3">
                    <div className="mt-16 flex flex-col gap-2">

                        {/*Name*/}
                        <div className="text-3xl font-semibold text-white max-[425px]:text-2xl transition-all">{account && account.username}</div>
                        
                        {/*Add Bio*/}
                        {profile && profile.bio &&
                        <div className="text-neutral-500 w-[500px] max-[360px]:text-xs max-[768px]:w-full text-sm">{profile.bio}</div>}
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-1">
                            <motion.div
                                className="max-[425px]:w-min max-[425px]:justify-end justify-end p-2 h-min cursor-pointer text-sm font-semibold rounded-md flex flex-row gap-2 items-center text-neutral-500">
                                <div className="max-[425px]:hidden whitespace-nowrap">Current role</div>
                                <FaBriefcase />
                            </motion.div>

                            <div className="flex flex-row max-sm:flex-col gap-1 justify-end">
                                {/*Role*/}
                                <div className="max-[425px]:text-xs text-sm select-none transition-all px-2 py-1 bg-purple-500 text-white rounded-lg w-min">{role}</div>
                            
                                {/*User Role*/}
                                {profile && profile.curr_role && 
                                    <div className="max-[425px]:text-xs text-sm select-none transition-all px-2 py-1 bg-purple-500 text-white rounded-lg w-min whitespace-nowrap">{profile.curr_role}</div>
                                }
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <motion.div              
                            transition={{duration: 0.3 , ease: 'easeInOut'}}
                            className="max-[425px]:w-min max-[425px]:justify-end hover:bg-purple-500 bg-neutral-800 w-min p-2 h-min cursor-pointer text-sm font-semibold hover:text-neutral-300 rounded-md flex flex-row gap-2 justify-end items-center text-neutral-500">
                                <div className="max-[425px]:hidden">Skills</div>
                                <FaStar />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/*All post and Highlights section*/}
                <div className="flex flex-row gap-3 mt-5 px-10 max-[425px]:px-3">
                    <div onClick={() => setAllPost(true)} className={`${allPost ? 'bg-purple-500' : 'bg-neutral-800'} text-sm cursor-pointer font-semibold hover:opacity-70 text-white bg-neutral-800 px-3 py-1 rounded-md`}>
                        Post
                    </div>

                    <div onClick={() => setAllPost(false)} className={`${allPost ? 'bg-neutral-800' : 'bg-purple-500'} text-sm cursor-pointer font-semibold hover:opacity-70 text-white bg-neutral-800 px-3 py-1 rounded-md`}>
                        Highlights
                    </div>
                </div>

                <hr className="border border-neutral-800 my-3 mx-10"/>

                {allPost ? 
                    <div>
                        {userPost && userPost.length !== 0 ? 
                        <div className="flex-1 flex-nowrap w-full px-10">
                            {loadingProfile ? 
                            <dic>
                                {userPost && userPost.map(()=>(
                                    <div>

                                    </div>
                                ))}
                            </dic>
                            :
                            <ProfileLoading />}
                        </div>
                        :
                        <motion.div 

                        className="w-full h-full mt-20 flex flex-col gap-3 items-center ">
                            <img alt="sad-robot-image" className="grayscale h-[240px] w-[240px] max-[426px]:h-[200px] transition-all" src="/svg/noPostRobot.svg"/>
                        
                            <div className="text-neutral-300 text-2xl font-semibold max-[426px]:text-lg transition-all">No Posts Yet...</div>
                        
                            <p className="w-[300px] text-center text-neutral-500 max-[426px]:w-full max-[426px]:text-sm transition-all">Looks like this person haven't posted anything yet</p>
                        </motion.div>
                        }
                    </div>
                    :
                    <div className="text-neutral-300 text-lg font-semibold flex justify-center mt-20">
                        <div>...Comming soon...</div>
                    </div>   
                }
            </div>
        </div>
    );
}

function SmallCard({ title, desc , date , slug }) {
  return (
    <div className="small-card border rounded-md p-4 shadow-sm bg-white max-w-sm hover:shadow-md transition-shadow cursor-pointer">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{desc}</p>
      <div className="text-xs text-gray-400">{new Date(date).toLocaleDateString()}</div>
    </div>
  );
}
