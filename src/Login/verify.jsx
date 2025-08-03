import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contextApis/authContext";

export default function Verify() {
    const [code , setCode] = useState()
    const [isLoading , setIsLoading] = useState(false)
    const [errors, setErrors] = useState({});
    const { verifyOTP , email} = useAuth()
    const navigate = useNavigate()

    const validateForm = () =>{
        const newErrors = {}
        if (!code){
            newErrors.code = 'Enter a code to verify'
        }
        else if (code.length !== 6){
            newErrors.code = 'Enter a valid 6-digit number'
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!validateForm()) return console.log('error')
        
        setIsLoading(true)
        try {
            await verifyOTP({email , code})
        }
        finally{
            setIsLoading(false)
            navigate('/new')
            console.log("Signin attempted");
        }
    }

    return (
        <div className="flex justify-center items-center text-white w-full min-h-screen bg-neutral-950 px-4">
            <div className="w-full max-w-md">   
                <div className="flex flex-col p-5 sm:p-5 w-full border border-neutral-800 rounded-lg items-center shadow-lg">
                    {/* Icon divider */}
                    <div className="pt-4 w-full flex justify-center items-center flex-row">
                        <hr className="border border-neutral-900 w-full mx-2" />
                        <div className="p-3 sm:p-4 rounded-full bg-blue-500 flex items-center justify-center">
                        <FaPhone className="text-base sm:text-lg" />
                        </div>
                        <hr className="border border-neutral-900 w-full mx-2" />
                    </div>

                    {/* Title and description */}
                    <div className="pt-8 flex flex-col items-center gap-3 sm:gap-4">
                        <div className="text-xl sm:text-2xl text-center font-semibold">
                        Enter verification code
                        </div>
                        <div className="w-[95%] text-center text-neutral-400 text-sm sm:text-base">
                        An email was sent to your gmail with a verification code.
                        Enter the code in the box below to continue.
                        </div>
                    </div>

                    {/* Input and actions */}
                    <form onSubmit={handleSubmit} className="pt-8 w-full max-w-xs flex flex-col">
                        <input
                            maxLength={6}
                            inputMode="numeric"
                            value={code}
                            onChange={(e)=>setCode(e.target.value)}
                            placeholder="Enter code"
                            className={` h-12 sm:h-[50px] w-full placeholder-neutral-700 bg-transparent border rounded-md px-3 border-neutral-800 focus:outline-none focus:border-blue-600 transition
                            ${errors.code ? 'border-red-500' : 'mb-4'}`}
                        />

                        {errors.code && (
                            <p className="py-3 text-sm text-red-400" role="alert">
                                {errors.code}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="w-full font-medium text-white hover:scale-105 transition-all bg-gradient-to-r from-blue-700 to-purple-700 mt-1 border border-neutral-800 cursor-pointer flex h-12 sm:h-[50px] bg-neutral-900 justify-center items-center rounded-md hover:opacity-80"
                            >
                            Submit 
                        </button>

                        <div className="w-full pt-2 text-end">
                        <Link to="/signin" className="text-sm text-blue-500 hover:underline">
                            Try again?
                        </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
    }
