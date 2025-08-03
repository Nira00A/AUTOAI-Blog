import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function Global404(){
  return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}} 
        transition={{duration: 0.3 , ease: 'easeInOut'}}
        className='w-full h-[80vh] flex flex-col justify-center items-center select-none'>
            <div className="p-3 bg-neutral-800 rounded-full">
                <svg className="h-[50px] w-[50px] max-sm:h-[30px] max-sm:w-[30px] transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#737373"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"/></svg>
            </div>

            <div className='mt-3 max-sm:text-5xl text-purple-500 text-7xl mb-12 font-bold transition-all'>
                404
            </div>

            <div className='max-sm:text-2xl text-neutral-500 text-4xl font-semibold transition-all'>
                Oops, Page Not Found
            </div>

            <div className='text-center max-sm:text-sm text-lg text-neutral-500 mt-3 transition-all'>
                Looks like our little user couldn’t locate what you’re searching for.
            </div>

            <a href="/new" 
                className="mt-5 inline-flex items-center px-4 py-2 font-semibold bg-purple-500 text-white rounded hover:bg-purple-700 transition">
                Home
            </a>

        </motion.div>
)}