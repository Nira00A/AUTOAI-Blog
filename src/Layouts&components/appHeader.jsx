import { useEffect, useState , useRef} from "react";
import { FaBars, FaInbox, FaSearch, FaTimes , FaUser} from "react-icons/fa";
import { Link , useNavigate} from "react-router-dom";
import { useAuth } from "../contextApis/authContext";
import ProfileBar from "../ProfilePage/profileBar";
import { AnimatePresence } from "framer-motion";
import { useProfile } from "../contextApis/profileContext";

export default function AppHeader(){
    const { logout } = useAuth()
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate()
    const [openProfile , setOpenProfile] = useState(false)
    const menuRef = useRef()
    const iconRef = useRef()
    const { updateProfile } = useProfile()

    useEffect(()=>{
        function handleClickOutside(event){
            if(menuRef.current && !menuRef.current.contains(event.target) && iconRef.current && !iconRef.current.contains(event.target))
            {
                setOpenProfile(false)
            }
        }
        document.addEventListener('mousedown' , handleClickOutside)
        return () => {
            document.removeEventListener('mousedown' , handleClickOutside)
        }
    },[])

    useEffect(() => {
        if (menu) {
        document.body.style.overflow = "hidden";
        } else {
        document.body.style.overflow = "auto";
        }
        return () => {
        document.body.style.overflow = "auto";
        };
    }, [menu]);

    const handleLogout = async () =>{
        await logout();
        navigate('/')
    }

    return(
        <>
        <div className={`bg-transperant h-[70px] w-full border-b border-neutral-700 flex justify-center items-center`}>
            <div className="flex flex-row w-full px-4 justify-between">
                <div className="flex items-center pl-[6px]">
                    <img className="w-[30px]" src="/svg/logo.svg"/>
                </div>

                <div onClick={() => setMenu(!menu)} className="text-[20px] cursor-pointer flex items-center pr-[10px] text-white md:hidden">
                    {
                    menu ? (<FaTimes/>) : (<FaBars/>)
                    }
                </div>

                <div className="flex flex-row items-center gap-5 pr-1 hidden md:flex">
                    <div className="relative">
                        <input 
                        id="search-bar"
                        type="search"
                        placeholder="Search"
                        className="w-[250px] h-10 focus:outline-none focus:ring-1 focus:ring-neutral-300 rounded-lg border border-neutral-600 text-white placeholder-neutral-500 pl-9 bg-neutral-900"/>

                        <div className="absolute text-neutral-500 top-1/3 left-3 cursor-pointer">
                            <FaSearch/>
                        </div>
                    </div>
                    
                    <div >
                        <FaInbox className="h-6 w-6 text-neutral-500 hover:text-white cursor-pointer"/>
                    </div>

                    <div className="text-neutral-500 hover:text-neutral-300">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-120H640q-30 38-71.5 59T480-240q-47 0-88.5-21T320-320H200v120Zm280-120q38 0 69-22t43-58h168v-360H200v360h168q12 36 43 58t69 22ZM200-200h560-560Z"/></svg>
                    </div>

                    <div className="relative">
                        <div ref={iconRef} onClick={() => setOpenProfile(v => !v)} className="justify-center items-center flex object-cover h-8 w-8 bg-neutral-800 rounded-full cursor-pointer">
                            {updateProfile && updateProfile.profile_img ? 
                                <img src={ updateProfile.profile_img} className="w-full h-full object-cover rounded-full" alt="profile-picture" />
                            :
                            <FaUser className="transition-all h-4 w-4 text-neutral-500"/>}
                        </div>
                        <AnimatePresence>
                            {openProfile ? <ProfileBar cond={openProfile} ref={menuRef}/> : ''}
                        </AnimatePresence>
                    </div>
                    


                </div>
            </div>

            <div className={`
                fixed left-0 bottom-0 w-full h-[790px] bg-black z-40
                transform ${menu ? "translate-y-0" : "translate-y-full"}
                transition-transform duration-300 ease-in-out
                flex-col px-5 gap-6 
                md:hidden flex
                `}
                style={{ pointerEvents: menu ? "auto" : "none" }}
            >
            <div className="flex gap-4 mt-6 max-[320px]:flex-col">
                <div className="h-[35px] w-[70px] max-[320px]:w-full rounded-md flex justify-center items-center text-white text-[14px] hover:opacity-80 cursor-pointer default-gradient">
                Log In
                </div>
                <div className="h-[35px] w-[70px] max-[320px]:w-full rounded-md flex justify-center items-center text-white text-[14px] hover:opacity-80 cursor-pointer default-gradient">
                Sign In
                </div>
            </div>
            </div>
        </div>
        </>
    )
    }
