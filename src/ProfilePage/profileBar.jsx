import { motion } from "framer-motion"
import { forwardRef} from "react"
import { FaArrowRight, FaCog, FaPencilAlt, FaQuestionCircle, FaSignOutAlt, FaUniversalAccess, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useProfile } from "../contextApis/profileContext"
import { useAuth } from "../contextApis/authContext"

const ProfileBar = forwardRef(({cond} , ref) => {
    const profileOptions = [
        {icon: <FaPencilAlt/> , name: 'Edit Profile' ,link: '/profile'},
        {icon: <FaCog/> , name: 'Settings & Privacy',link: '/settings'},
        {icon: <FaQuestionCircle/> , name: 'Help & Support',link: '/help'},
        {icon: <FaUniversalAccess/> , name: 'Display & Accessibility',link: '/display'},
    ]
    const { updateProfile } = useProfile()
    const { name , email , logout} = useAuth()

    const handleLogout = async () =>{
        await logout()  
    }

    return(
        <motion.div
        ref={ref}
        initial = {{opacity: 0}}
        animate = {{opacity: 1 , position:'absolute' , right: '0%' , top: '130%'}}
        exit={{opacity:0}}
        transition={{ duration: 0.2, ease: "linear" }}
        className="w-[250px] rounded-lg bg-neutral-900 border border-neutral-800 shadow-neutral-800 z-[100001]">
            <div className="w-full h-full flex flex-col p-3">
                <div className="flex flex-row items-center gap-5 p-2">
                    <div className="h-8 w-8 flex justify-center items-center bg-neutral-800 rounded-full">
                        {updateProfile && updateProfile.profile_img ? 
                                <img src={ updateProfile.profile_img} className="rounded-full w-full h-full object-cover" alt="profile-picture" />
                            :
                        <FaUser className="transition-all h-4 w-4 text-neutral-500"/>}
                    </div>
                    <div className="flex flex-col text-white text-sm">
                        <div>{name}</div>
                        <div className="text-xs text-neutral-500">{email}</div>
                    </div>
                </div>

                <hr className="my-3 border-neutral-700"/>

                <div>
                    {profileOptions.map(({name , icon , link})=>(
                        <Link to={link} className={`text-white hover:bg-neutral-700 hover:text-neutral-300'} flex flex-row items-center cursor-pointer justify-between rounded-md py-2 px-2`}>
                            <div className="flex flex-row gap-2 items-center text-xs">
                                <div className="p-2 bg-neutral-800 rounded-full">{icon}</div>
                                <div>{name}</div>
                            </div>
                            <FaArrowRight className="text-sm"/>
                        </Link>
                    ))}
                    <Link onClick={handleLogout} className="transition-transform text-white hover:bg-transparent hover:text-red-500 flex flex-row items-center cursor-pointer justify-between rounded-md py-2 px-2">
                        <div className="flex flex-row gap-2 items-center text-xs">
                            <div className="p-2 bg-neutral-800 rounded-full"><FaSignOutAlt /></div>
                            <div>Log out</div>
                        </div>
                        <FaArrowRight className="text-sm"/>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
})

export default ProfileBar