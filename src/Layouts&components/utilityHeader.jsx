import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FaAccusoft, FaBath, FaCog, FaEye, FaPagelines, FaQuestion } from "react-icons/fa"
import { useLocation, useNavigate } from "react-router-dom"

export default function UtilityHeader(){
    const [page , setPage] = useState('')
    const [onHover , setOnHover] = useState('')
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const container = [
        {id: 1 , page: 'settings' , logo: <FaCog />},
        {id: 2 , page: 'privacy' , logo: <FaEye />},
        {id: 3 , page: 'terms' , logo: <FaPagelines />},
        {id: 5 , page: 'account-management' , logo: <FaAccusoft />},
        {id: 6 , page: 'help' , logo: <FaQuestion />},
    ]

    const handleClick = (item) =>{
        setPage(item.page)
        navigate(`/` + item.page)
    }

    useEffect(()=>{
        function pathnameVerify(){
            const filterRoute = container.filter((item) => pathname.includes(item.page))
            
            if(filterRoute.length !== 0){
                setPage(filterRoute[0].page)
            }
        }

        pathnameVerify()
    },[])

    return(
        <div className="w-[500px] h-[40px] max-[630px]:w-full rounded-full flex items-center px-3 bg-neutral-800">
            <div className="w-full flex flex-row justify-between">
                {container.map((item , index)=>(
                    <div key={index} className="relative">
                        <motion.div
                        whileTap={{scale: 1.1}}
                        onClick={()=>handleClick(item)}
                        initial={{opacity: 1}}
                        animate={page === item.page ? {opacity: 1 , backgroundColor: '#d8b4fe' , color: '#a855f7'} : {}}
                        transition={{duration: 0.3 , ease: 'easeInOut'}}
                        onMouseEnter={()=>setOnHover(item.page)}
                        onMouseLeave={()=>setOnHover('')} 
                        className="text-neutral-300 cursor-pointer h-7 w-7 flex justify-center items-center rounded-full bg-neutral-700">
                            {item.logo} 
                        </motion.div>

                        <AnimatePresence>
                            {onHover === item.page &&
                            <motion.div
                            className="relative">
                                <motion.div
                                initial={{opacity: 0 , y: -10}}
                                animate={{opacity: 1 , y: 0 , display: 'flex'}}
                                exit={{opacity: 0 , y: -10}}
                                transition={{delay: 1 , duration: 0.3 , ease: 'easeInOut'}}
                                className={`absolute text-neutral-500 text-xs rounded-lg font-bold top-3 -left-5 flex justify-center py-1 w-16 bg-neutral-800`}>
                                    {item.page}
                                </motion.div>
                            </motion.div>}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    )
}