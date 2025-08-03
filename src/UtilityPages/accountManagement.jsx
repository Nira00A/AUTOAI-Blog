import { AnimatePresence, motion } from "framer-motion";
import { useState , useEffect} from "react";
import { FaDumpster, FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../contextApis/authContext";
import { toast } from "react-toastify";
import { useProfile } from "../contextApis/profileContext";

export default function AccountManagement(){
    const [visible , setVisible] = useState(true)
    const [confirmVisible , setConfirmVisible] = useState(true)
    const [showProfile , setShowProfile] = useState(false)
    const [onDelete , setOnDelete] = useState(false)
    const {email} = useAuth()

    const handleshowProfile = () =>{
        setShowProfile(v => !v)
    }

    const handleDeleteClick = () =>{
        setOnDelete(v => !v)
    }

    return(
        <div className="w-full">
            <AnimatePresence>{onDelete && <DeleteAccount setOnDelete={setOnDelete}/>}</AnimatePresence>
            <form className="w-[800px] max-[840px]:w-full flex flex-col gap-3">

                {/*Account settings*/}
                <div className="text-xl text-white font-semibold">Account Settings</div>
            
                <div className="flex flex-col gap-1">
                    <label className="text-neutral-500 text-sm font-bold" htmlFor="email-aaccount-management">Email</label>
                    <div id="email-account-management" placeholder="Enter email" className="select-none text-white cursor-not-allowed placeholder:text-sm p-3 h-[50px] bg-neutral-800 border border-neutral-700 rounded-lg" >{email}</div>
                </div>

                <div className="flex flex-col gap-1 relative">
                    <label className="text-neutral-500 text-sm font-bold" htmlFor="password-account-management">Password</label>
                    <div className="w-full relative">
                        <input autoComplete="false" id="password-account-management" type={visible ? 'password' : 'text'} placeholder="Enter password" className="relative w-full focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 transition-all 
                        text-white placeholder:text-sm p-3 h-[50px] bg-neutral-800 border border-neutral-700 rounded-lg"/>
                        <button
                            type="button"
                            onClick={() => setVisible((v) => !v)}
                            className="cursor-pointer absolute right-3 top-[55%] -translate-y-1/2 text-neutral-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded p-1"
                            aria-label={visible ? "Hide password" : "Show password"}
                        >
                            {visible ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-neutral-500 text-sm font-bold" htmlFor="password-confirm-account-management">Confirm Password</label>
                    <div className="w-full relative">
                        <input autoComplete="false" id="confirm-password-account-management" type={confirmVisible ? 'password' : 'text'} placeholder="Enter confirm password" className="relative w-full focus:outline-none focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 transition-all 
                        text-white placeholder:text-sm p-3 h-[50px] bg-neutral-800 border border-neutral-700 rounded-lg" />
                        <button
                            type="button"
                            onClick={() => setConfirmVisible((v) => !v)}
                            className="cursor-pointer absolute right-3 top-[55%] -translate-y-1/2 text-neutral-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded p-1"
                            aria-label={confirmVisible ? "Hide password" : "Show password"}
                        >
                            {confirmVisible ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {/*Profile & Data*/}
                <div className="text-xl text-white font-semibold mt-5">Privacy & Data</div>

                <div className=" h-[70px] flex flex-col bg-neutral-800 rounded-lg py-1 px-3">
                    <div className="h-full flex justify-between items-center">
                        <div className="h-full flex flex-col justify-center">
                            <div className="text-white text-sm">
                                Profile & posts
                            </div>
                            <div className="text-xs text-neutral-500">
                                Show/hide profile or posts from public.
                            </div>
                        </div>

                        <div onClick={handleshowProfile} className={`${showProfile && 'bg-purple-200'} transition-all h-5 w-10 bg-neutral-700 rounded-full relative cursor-pointer`}>
                            <motion.div
                            animate={showProfile ? {x: '100%' , backgroundColor: '#a855f7'} : {x: 0}}
                            transition={{duration: 0.3 , ease: 'easeInOut'}}
                            className="absolute top-0 left-0 h-full w-[50%] bg-white rounded-full">

                            </motion.div>
                        </div>
                    </div>
                </div>

                {/*Delete account*/}
                <div className="text-xl text-red-500 font-semibold mt-5">Delete personal Account</div>

                <p className="text-neutral-500 text-sm">Permanently remove your Personal Account and all of its contents from the Auto-AI blog platform.
                    This action is not reversable, so please continue with caution.
                </p>

                <button type="button" onClick={handleDeleteClick} className="px-2 py-1 bg-red-500 text-white rounded-lg w-min whitespace-nowrap hover:opacity-80">
                    Delete Personal Account
                </button>
            </form>
        </div>
    )
}

function DeleteAccount({setOnDelete}){
    const {loadingProfile} = useProfile()
    const [email , setDeleteEmail] = useState('')
    const { deleteAccount } = useAuth()

    const handleAccountDeletePermanent = async () =>{
        if(!email){
            toast.error('Provide an email')
        }

        await deleteAccount({email : email})
    }

    return(
        <motion.div
        initial={{opacity: 0}} 
        animate={{opacity:1}}
        exit={{opacity: 0}}
        className="fixed inset-0 top-0 left-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
            <motion.div
            initial={{opacity:0 , x: '-110%', y: '80%' , scale: 0}} 
            animate={{opacity: 1 , x: 0 , y: 0, scale: 1}}
            exit={{opacity:0 , x: '-110%' , y: '80%', scale: 0}}
            transition={{duration: 0.3 , ease: 'easeInOut'}}
            className="w-[400px] items-center bg-neutral-800 rounded-lg flex flex-col px-10 py-5"
            >
                <div className="flex">
                    <div className="p-3 bg-red-200 rounded-full">
                        <FaDumpster className="text-lg text-black"/>
                    </div>
                </div>

                {/*Delete Account*/}
                <div className="text-2xl font-semibold text-white mt-5">
                    Delete Account
                </div>

                <div className="text-red-400 w-[60%] text-sm mt-5 text-center">
                    <span className="font-semibold text-red-500">WARNING</span> this is permanent and cannot be undone!
                </div>

                <div className="mt-5 text-sm text-neutral-500">
                    All of your post , settings will be immediately deleted. Any post 
                    you have created or saved will be deleted. The accounts you follow will be 
                    unfollowed.
                </div>

                <div className="flex flex-col gap-1 mt-5 w-full">
                    <label className="text-neutral-500 text-sm font-bold" htmlFor="email-aaccount-management">Confirm email</label>
                    <input onChange={(e)=>setDeleteEmail(e.target.value)} type="email" placeholder="Enter email" className="focus:outline-none focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50 transition-all 
                    text-white placeholder:text-sm p-3 h-[45px] bg-neutral-800 border border-neutral-700 rounded-lg" id="email-account-management" />
                </div>

                <hr className="w-full border border-neutral-700 my-5"/>

                <div className="flex flex-row w-full gap-1">
                    <button onClick={()=>setOnDelete(false)} className="hover:text-white w-full rounded-lg flex justify-center items-center text-sm font-semibold text-neutral-500 py-2 px-3 bg-neutral-700">
                        Go back
                    </button>

                     <button onClick={handleAccountDeletePermanent} className="whitespace-nowrap w-full rounded-lg flex justify-center items-center text-sm font-semibold text-white py-1 bg-red-500">
                        {loadingProfile ? <div className="delete-spinner"></div> : <div>Execute Deletion</div>}
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}