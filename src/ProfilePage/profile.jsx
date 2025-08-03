import { FaArrowAltCircleRight, FaBriefcase, FaCog, FaEdit, FaPen, FaPlus, FaStar, FaTimes, FaUpload, FaUser } from "react-icons/fa";
import { AnimatePresence , motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { useState , useEffect} from "react";
import { useProfile } from "../contextApis/profileContext";
import { toast } from "react-toastify";
import { ProfileLoading } from "../LoadingPages/profileLoading";
import { useBlog } from "../contextApis/blogContext";
import { useAuth } from "../contextApis/authContext";

// src/components/ProfilePage.jsx
export default function Profile() {
    const [addressHover , setAddressHover] = useState(false)
    const [userPost , setUserPost] = useState({})
    const [allPost , setAllPost] = useState(false)
    const [edit , setEdit] = useState(false)
    const { loadingProfile } = useProfile()
    const {updateProfile} = useProfile()
    const { toastifyNotification , blogFetchProfile} = useBlog()
    const { role , name} = useAuth()
    const [profile , setProfile] = useState({})

    const todos = [
        {
            "heading": "Add Your Skills",
            "description": "Highlight your top skills to stand out."
        },
        {
            "heading": "Complete Your Profile",
            "description": "Provide your bio and contact details."
        },
        {
            "heading": "Explore the Feild",
            "description": "Read and add your contribution to the community."
        }
    ]

    const handleEdit = () =>{
        setEdit((v)=>!v)
    }

    useEffect(()=>{
        const fetchProfileBlogs = async () =>{
            try {
                const result = await blogFetchProfile({userid : profile.userid})
                setUserPost(result)
            } catch (error) {
                console.log(error)
            }
        }

        if(profile){
            fetchProfileBlogs()
        }
        
    },[profile])

    if (loadingProfile) return <ProfileLoading />
    
    return (
        <div>
            {toastifyNotification()}
            <div className="max-w-7xl mx-auto pt-10">
                <AnimatePresence>{edit && <EditProfile setEdit={setEdit}/>}</AnimatePresence>
                {/*Top bar*/}
                <div className="relative bg-neutral-800 rounded-md w-full h-44">
                    {/*Banner edit button*/}
                    <div className="absolute p-2 m-1 bg-neutral-800 rounded-full cursor-pointer text-neutral-300 hover:text-white top-0 right-0">
                        <FaEdit />
                    </div>

                    {/*Profile Picture*/}
                    <div 
                    className="max-[425px]:h-32 max-[425px]:w-32 max-[425px]:top-[65%] max-[425px]:left-3 flex justify-center items-center transition-all absolute top-[50%] object-cover left-10 h-40 w-40 border-[8px] border-neutral-900 bg-neutral-800 rounded-full">
                        {updateProfile && updateProfile.profile_img ? 
                            <img src={ updateProfile.profile_img} className="rounded-full w-full h-full object-cover" alt="profile-picture" />
                        :
                        <FaUser className="transition-all h-20 w-20 max-[425px]:h-16 max-[425px]:w-16 text-neutral-500"/>}
                    </div>
                </div>

                {/*Profile Introduction*/}
                <div className="flex justify-between mt-3 px-10 max-[425px]:px-3">
                    <div className="mt-16 flex flex-col gap-2">

                        {/*Name*/}
                        <div className="text-3xl font-semibold text-white max-[425px]:text-2xl transition-all">{name}</div>
                        
                        {/*Add Bio*/}
                        {updateProfile && updateProfile.bio ?
                        <div className="text-neutral-500 w-[500px] max-[360px]:text-xs max-[768px]:w-full text-sm">{updateProfile.bio}</div>
                        :
                        <motion.div 
                        onClick={handleEdit}
                        onMouseEnter={() => setAddressHover(true)}
                        onMouseLeave={()=> setAddressHover(false)}
                        className="flex flex-row w-min h-8 p-2 px-[9px] gap-1 rounded-full bg-neutral-800 text-sm cursor-pointer hover:bg-purple-500 text-white items-center">
                            <FaPlus />
                            <AnimatePresence>
                                {addressHover && 
                                    <motion.span
                                    initial={{opacity: 0 , width: 0}}
                                    animate={{opacity: 1 , width: 'auto'}}
                                    exit={{opacity: 0 , width: 0 }}
                                    className="overflow-hidden whitespace-nowrap min-h-0"
                                    transition={{duration: '0.3' , ease: 'easeInOut'}}>
                                    Add address 
                                    </motion.span>}
                            </AnimatePresence>
                        </motion.div>
                        }

                        {/*Edit and settings button*/}
                        <div className="flex flex-row gap-3 mt-3">
                            <div onClick={handleEdit} className="rounded-full hover:-translate-y-1 flex flex-row gap-1 items-center text-white cursor-pointer font-semibold text-sm bg-purple-500 justify-center w-28 py-3 max-[425px]:py-2 max-[425px]:w-24 max-[425px]:text-xs transition-all">
                                {loadingProfile ? <div className="spinner"></div> : <div className="flex flex-row items-center gap-1"><FaPen /> Edit Profile</div>}
                            </div>

                            <Link to={'/settings'} className="rounded-full hover:opacity-70 flex flex-row gap-1 items-center text-white cursor-pointer font-semibold text-sm border border-purple-500 justify-center w-28 py-3 max-[425px]:py-2 max-[425px]:w-24 max-[425px]:text-xs transition-all ">
                                <FaCog /> Settings
                            </Link>
                        </div>
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
                                {updateProfile && updateProfile.curr_role && 
                                    <div className="max-[425px]:text-xs text-sm select-none transition-all px-2 py-1 bg-purple-500 text-white rounded-lg w-min whitespace-nowrap">{updateProfile.curr_role}</div>
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

                {/*Tasks to do in profile*/}
                <div className="w-full mt-10 px-10 flex max-sm:flex-col gap-3 max-[425px]:px-3">
                    {todos.map((item , index)=>(
                        <Link key={index} className="flex-1 flex cursor-pointer rounded-xl w-auto gap-1  p-3 bg-purple-200 border hover:border-purple-500 shadow-md justify-between">
                            <div className="flex flex-col">
                                <div className="text-sm text-black font-semibold">{item.heading}</div>
                                <p className="text-xs text-neutral-800">{item.description}</p>
                            </div>

                            <div className="flex h-full items-center">
                                <FaArrowAltCircleRight className="h-6 w-6 text-purple-500"/>
                            </div>
                        </Link>
                    ))}
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
                        {userPost && userPost.length === 0 ? 
                        <div className="">

                        </div>
                        :
                        <div className="w-full h-full mt-20 flex flex-col gap-3 items-center ">
                            <img alt="sad-robot-image" className="grayscale h-[240px] w-[240px] max-[426px]:h-[200px] transition-all" src="/svg/noPostRobot.svg"/>
                        
                            <div className="text-neutral-300 text-2xl font-semibold max-[426px]:text-lg transition-all">No Posts Yet...</div>
                        
                            <p className="w-[300px] text-center text-neutral-500 max-[426px]:w-full max-[426px]:text-sm transition-all">Looks like this person haven't posted anything yet</p>
                        </div>
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

function EditProfile({setEdit}){
    const {setUpdateProfile , saveProfile , updateProfile , profileFetch  , loadingProfile} = useProfile()
    const [img , setImg] = useState(null)
    const [notify , setNotify] = useState()
    const [profileForm , setProfileForm] = useState(updateProfile)
    const { toastifyNotification } = useBlog()

    useEffect(() => {
        if(loadingProfile) return
        
        setProfileForm(updateProfile)
        setImg(updateProfile ? updateProfile.profile_img : null);
        setNotify(updateProfile ? updateProfile.notification_perms : false);
    }, [setEdit]);

    useEffect(() => {
        setProfileForm(prev => ({ ...prev, notification_perms: notify }));
    }, [notify]);

    const handleImgChange = async (e) =>{
        const file = e.target.files?.[0];
        if (!file) return;

        // Upload file to Cloudinary via unsigned upload (frontend)
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "autoai"); 

        const res = await fetch(`https://api.cloudinary.com/v1_1/dtwq7ejpp/image/upload`, {
            method: "POST",
            body: formData,
        });

        const data = await res.json();
        setImg(data.url)
        setProfileForm((prev) => ({...prev , profile_img: data.url}))
    }

    const handleNotify = () =>{
        setNotify(v => !v)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        setUpdateProfile(profileForm)

        try {
            await saveProfile(profileForm)
            toast.success('Successfully updated')
        } catch (error) {
            toast.error('Error while updating')
        } finally {
            setEdit(false)
        }
    }

    return(
        <motion.div
        initial={{opacity: 0}} 
        animate={{opacity:1}}
        exit={{opacity: 0}}
        className="fixed inset-0 top-0 left-0 z-50 bg-black bg-opacity-70">
            <div className="h-full flex justify-center items-center">
                <motion.div
                initial={{opacity:0 , x: '-120%' , scale: 0}} 
                animate={{opacity: 1 , x: 0 , scale: 1}}
                exit={{opacity:0 , x: '-120%' , scale: 0}}
                transition={{duration: 0.3 , ease: 'easeInOut'}}
                className="p-5 flex flex-col h-max w-[400px] gap-3 rounded-lg shadow-lg border border-neutral-700 bg-neutral-800">
                    {/*Profile header*/}
                    <div className="relative flex flex-col gap-1">
                        <div className="text-white text-2xl font-semibold">Edit profile</div>
                        <div className="text-neutral-500 text-sm">Provide details about yourself and any other personal information.</div>
                    
                        <div onClick={()=>setEdit(false)} className="absolute cursor-pointer top-2 right-0">
                            <FaTimes className="text-white"/>
                        </div>
                    </div>

                    <hr className="my-3 border border-neutral-700"/>

                    {/*Profile body*/}
                    <div className="flex flex-col gap-3">
                        <div className="text-xl font-semibold text-white">
                            Basic Information
                        </div>

                        {/*Photo uploader*/}
                        <div className="w-full"> 
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <div className="text-white font-semibold text-sm">Profile photo</div>
                                    <div className="text-neutral-500 text-sm mb-2">Recommended 300 x 300</div>

                                    {img ? 
                                    <div className="flex flex-row gap-2">
                                        {/*Change*/}
                                        <div className="relative flex justify-center items-center hover:opacity-80 cursor-pointer h-7 w-14 text-xs rounded-lg text-white border border-neutral-500 bg-transperent">
                                            <div>Change</div>
                                            <input onChange={(e)=>handleImgChange(e)} className="absolute opacity-0 top-0 left-0 w-full h-full cursor-pointer" accept="image/*" type="file"/>
                                        </div>

                                        {/*Remove*/}
                                        <div onClick={()=>setImg(null)} className="flex justify-center items-center hover:opacity-80 cursor-pointer h-7 w-14 text-xs rounded-lg text-white border border-neutral-500 bg-transperent">
                                            <div>Remove</div>
                                        </div>
                                    </div>
                                    :
                                    //Upload
                                    <div className="relative flex justify-center items-center hover:opacity-80 cursor-pointer h-7 w-14 text-xs rounded-lg text-white border border-neutral-500 bg-transperent">
                                        <div>Upload</div>
                                        <input onChange={(e)=>handleImgChange(e)} className="absolute opacity-0 top-0 left-0 w-full h-full cursor-pointer" accept="image/*" type="file"/>
                                    </div>
                                    }
                                </div>

                                <div>
                                    <div className={`${!img && 'flex justify-center items-center'} h-[80px] w-[80px] rounded-full bg-neutral-500`}>
                                        {img ?  <img className="w-full h-full object-cover rounded-full" src={img} alt="Profile" /> : <FaUpload className="text-white"/>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Profile Bio*/}
                        <div className="flex flex-col">
                            <label form="bio-input-profile" className="text-sm font-semibold text-white">Bio</label>
                            <textarea value={profileForm && profileForm.bio ? profileForm.bio : ''} onChange={(e)=>setProfileForm((prev) => ({...prev , bio: e.target.value}))} id="bio-input-profile" className="px-3 focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50
                            transition scrollbar-hidden p-1 bg-transparent text-white placeholder-neutral-400 placeholder:text-sm max-h-[70px] rounded-md border border-neutral-700 focus-within:ring-1 focus-within:ring-purple-500 focus-within:outline-none" placeholder="Example: Hey everyone! I am a programmer. I love to play football..."></textarea>
                            <div className="placeholder-neutral-500 text-xs text-neutral-500">Brief description for your profile.</div>
                        </div>

                        {/*Current Role setting*/}
                        <CurrentRoleSelector
                            initialRole={profileForm ? profileForm.curr_role : ""}
                            onChange={(selectedRole) => {
                                setProfileForm((prev) => ({...prev , curr_role: selectedRole}))
                            }}
                        />

                        {/*Notification*/}
                        <div className="text-white flex flex-row justify-between text-sm">
                            <div>
                                Make subscribe to our notifications
                            </div>

                            <div onClick={handleNotify} className={`${notify && 'bg-purple-200'} transition-all w-10 bg-neutral-700 rounded-full relative cursor-pointer`}>
                                <motion.div
                                animate={notify ? {x: '100%' , backgroundColor: '#a855f7'} : {x: 0}}
                                transition={{duration: 0.3 , ease: 'easeInOut'}}
                                className="absolute top-0 left-0 h-full w-[50%] bg-white rounded-full">

                                </motion.div>
                            </div>
                        </div>

                        <hr className="mb-3 border border-neutral-700"/>

                        {/*Save Button*/}
                        <motion.button
                            onClick={(e)=>handleSubmit(e)}
                            whileTap={{scale: 1.03}}
                            transition={{ type: "spring", stiffness: 500, damping: 17 }}
                            className="bg-purple-500 hover:opacity-80 rounded-lg text-white flex justify-center items-center h-[45px] w-full">
                                Save 
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

function CurrentRoleSelector({ initialRole, onChange }) {

    const roles = [
        "Software Engineer",
        "Product Manager",
        "Designer",
        "Data Scientist",
        "QA Engineer",
        "DevOps Engineer",
        "UX Researcher",
        "Technical Writer",
        "Marketing Specialist",
        "HR Manager",
    ];

  const [currentRole, setCurrentRole] = useState(initialRole || "");

  function handleChange(e) {
    setCurrentRole(e.target.value);
    if (onChange) onChange(e.target.value);
  }

  return (
    <div className="mb-3">
      <label htmlFor="currentRole" className="block font-semibold text-sm text-white mb-1">
        Current Role
      </label>
      <select
        id="currentRole"
        value={currentRole}
        onChange={handleChange}
        className="
          block w-full rounded-md border border-neutral-700 bg-neutral-800
          py-2 px-3 text-sm cursor-pointer text-white shadow-sm placeholder-neutral-500
          focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50
          transition
        "
      >
        <option value="" disabled>
          Select your role
        </option>
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
}
