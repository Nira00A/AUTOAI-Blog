import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios'
import { toast } from "react-toastify";
import { useProfile } from "../contextApis/profileContext";
import Loading from "../LoadingPages/authLoading"

export default function Settings(){
    const {loadingProfile , setLoadingProfile} = useProfile()
    const { settingForm , saveSetting} = useProfile()
    const [form , setForm] = useState(settingForm)
    const [originalForm , setOriginalForm] = useState(settingForm)
    const [dirty , setDirty] = useState(false)

    const [editor , setEditor] = useState(settingForm && settingForm.default_text_editor)
    const [reading , setReading] = useState(settingForm && settingForm.reading_mode)
    const [appNotify , setAppNotify] = useState(settingForm && settingForm.app_notifications)
    const [recoNotify , setRecoNotify] = useState(settingForm && settingForm.latest_recommendation)
    const [theme , setTheme] = useState(settingForm && settingForm.theme)
    
    const editorOptions = [
        {id: 1 , name: 'normal'},
        {id: 2 , name: 'complex'}
    ]

    const themes = [
        {id: 1 , name: 'dark'},
        {id: 2 , name: 'light'}
    ]

    const languages = [
        { id: 1, name: 'English', short: 'en' },
        { id: 2, name: 'French', short: 'fr' },
        { id: 3, name: 'Spanish', short: 'es' },
        { id: 4, name: 'German', short: 'de' },
        { id: 5, name: 'Chinese (Simplified)', short: 'zh' },
        { id: 6, name: 'Japanese', short: 'ja' },
        { id: 7, name: 'Hindi', short: 'hi' },
        { id: 8, name: 'Russian', short: 'ru' },
        { id: 9, name: 'Italian', short: 'it' },
        { id: 10, name: 'Portuguese', short: 'pt' }
    ];

    const readingMode = [
        {id: 1 , name: 'card' },
        {id: 2 , name: 'compact'}
    ]

    useEffect(()=>{
        setForm(settingForm)
        setOriginalForm(settingForm)
        setDirty(false)
    },[settingForm])

    const handleChange = (feild , value) =>{
        setForm((prev)=> {
            const updated = {...prev , [feild] : value}

            const changed = Object.keys(updated).some((item) => originalForm[item] !== updated[item])

            setDirty(changed)

            return updated
        })

        if(feild === 'default_text_editor'){
            setEditor(value)
        }

        if(feild === 'reading_mode'){
            setReading(value)
        }

        if(feild === 'theme'){
            setTheme(value)
        }
    }

    const handleNotifyChange = () =>{
        setAppNotify((v) => {
            const cond = !v
            handleChange( 'app_notifications' , cond)
            return cond
        })

    }

    const handleRecoChange = () =>{
        setRecoNotify((v) => {
            const cond = !v
            handleChange( 'latest_recommendation' , cond)
            return cond
        })

    }

    const handleSave = async () =>{
        console.log(form)

        try {
            await saveSetting(form)

            
        } catch (error) {
            console.log(error)
        }
    }

    if(loadingProfile) return <Loading />

    if(!settingForm) return <Loading />

    return(
        <div className="w-full">
            <div className="w-[800px] max-[840px]:w-full flex flex-col gap-3">
                
                {/*Content Preference*/}
                <div className="text-white text-xl font-semibold mb-3">Content Preference</div>

                {/*Text Editor*/}
                <div className=" h-[70px] flex flex-col bg-neutral-800 rounded-lg py-1 px-3">
                    <div className="h-full flex justify-between">
                        <div className="h-full flex flex-col justify-center">
                            <div className="text-white text-sm">
                            Default Text Editor
                            </div>
                            <div className="text-xs text-neutral-500">
                                Customize your own text editor from the above
                            </div>
                        </div>

                        <div className="h-full flex flex-col justify-center">
                            <select 
                            value={settingForm && editor}
                            onChange={(e)=>handleChange( 'default_text_editor' , e.target.value)}
                            className="w-[100px] h-[50%] rounded-lg border border-neutral-700 bg-neutral-700 focus-within:outline-none
                            focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 transition-all text-white
                            cursor-pointer text-xs">
                                <option key="select-editor" className="text-sm" disabled>Select editor</option>

                                {editorOptions.map((item)=>(
                                    <option
                                    key={item.id} 
                                    className="text-sm">
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/*Language change*/}
                <div className=" h-[70px] flex flex-col bg-neutral-800 rounded-lg py-1 px-3">
                    <div className="h-full flex justify-between">
                        <div className="h-full flex flex-col justify-center">
                            <div className="text-white text-sm">
                                Change your Language
                            </div>
                            <div className="text-xs text-neutral-500">
                                Change your language with upto 10 language supported
                            </div>
                        </div>

                        <div className="h-full flex flex-col justify-center">
                            <select 
                            className="w-[100px] h-[50%] rounded-lg border border-neutral-700 bg-neutral-700 focus-within:outline-none
                            focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 transition-all text-white text-xs
                            cursor-pointer">
                                <option id="select-editor" className="text-sm" disabled>Select editor</option>

                                {languages.map((item)=>(
                                    <option
                                    key={item.id} 
                                    className="text-sm">
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/*Reading mode*/}
                <div className=" h-[70px] flex flex-col bg-neutral-800 rounded-lg py-1 px-3">
                    <div className="h-full flex justify-between">
                        <div className="h-full flex flex-col justify-center">
                            <div className="text-white text-sm">
                                Reading mode
                            </div>
                            <div className="text-xs text-neutral-500">
                                Customize your reading mode
                            </div>
                        </div>

                        <div className="h-full flex flex-col justify-center">
                            <select
                            value={settingForm && reading}
                            onChange={(e)=>handleChange( 'reading_mode' , e.target.value)}
                            className="w-[100px] h-[50%] rounded-lg border border-neutral-700 bg-neutral-700 focus-within:outline-none
                            focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 transition-all text-white text-xs
                            cursor-pointer">
                                <option id="select-editor" className="text-sm" disabled>Select editor</option>

                                {readingMode.map((item)=>(
                                    <option
                                    key={item.id} 
                                    className="text-sm flex flex-row justify-center items-center gap-1">
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/*AI generated content*/}
                <div className=" h-[70px] flex flex-col bg-neutral-800 rounded-lg py-1 px-3">
                    <div className="h-full flex justify-between">
                        <div className="h-full flex flex-col justify-center">
                            <div className="text-white text-sm">
                                AI Generated Suggestion 
                            </div>
                        </div>

                        <div className="h-full flex flex-col justify-center">
                            <div className="text-sm text-neutral-500">Comming soon</div>
                        </div>
                    </div>
                </div>

                {/*Notification*/}
                <div className="text-white text-xl font-semibold mb-3 mt-5">Notification</div>
            
                <div className=" h-[70px] flex flex-col bg-neutral-800 rounded-lg py-1 px-3">
                    <div className="h-full flex justify-between items-center">
                        <div className="h-full flex flex-col justify-center">
                            <div className="text-white text-sm">
                                App Notifications
                            </div>
                            <div className="text-xs text-neutral-500">
                                Email and push settings (new followers, comments, mentions)
                            </div>
                        </div>

                        <div 
                            onClick={handleNotifyChange} 
                            className={`${appNotify && 'bg-purple-200'} transition-all h-5 w-10 bg-neutral-700 rounded-full relative cursor-pointer`}>
                            <motion.div
                            animate={appNotify ? {x: '100%' , backgroundColor: '#a855f7'} : {x: 0}}
                            transition={{duration: 0.3 , ease: 'easeInOut'}}
                            className="absolute top-0 left-0 h-full w-[50%] bg-white rounded-full">

                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className=" h-[70px] flex flex-col bg-neutral-800 rounded-lg py-1 px-3">
                    <div className="h-full flex items-center justify-between">
                        <div className="h-full flex flex-col justify-center">
                            <div className="text-white text-sm">
                                Latest Recommendation
                            </div>
                            <div className="text-xs text-neutral-500">
                                Get notify when latest trendy blogs appears
                            </div>
                        </div>

                        <div 
                            onClick={handleRecoChange} className={`${recoNotify && 'bg-purple-200'} transition-all h-5 w-10 bg-neutral-700 rounded-full relative cursor-pointer`}>
                            <motion.div
                            animate={recoNotify ? {x: '100%' , backgroundColor: '#a855f7'} : {x: 0}}
                            transition={{duration: 0.3 , ease: 'easeInOut'}}
                            className="absolute top-0 left-0 h-full w-[50%] bg-white rounded-full">

                            </motion.div>
                        </div>
                    </div>
                </div>

                {/*Application's Theme*/}
                <div className="text-white text-xl font-semibold mb-3 mt-5">Theme</div>
            
                <div className=" h-[70px] flex flex-col bg-neutral-800 rounded-lg py-1 px-3">
                    <div className="h-full flex items-center justify-between">
                        <div className="h-full flex flex-col justify-center">
                            <div className="text-white text-sm">
                                Application's Theme (dark , light)
                            </div>
                        </div>

                        <select
                            value={settingForm && theme}
                            onChange={(e)=>handleChange( 'theme' , e.target.value)}
                            className="w-[100px] h-[50%] rounded-lg border border-neutral-700 bg-neutral-700 focus-within:outline-none
                            focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50 transition-all text-white text-xs
                            cursor-pointer">
                                <option id="select-editor" className="text-sm" disabled>Select editor</option>

                                {themes.map((item)=>(
                                    <option
                                    key={item.id} 
                                    className="text-sm flex flex-row justify-center items-center gap-1">
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>

                {/*Save Button*/}
                <motion.button 
                onClick={handleSave}
                whileTap={{scale: 1.1}}
                disabled={!dirty} 
                className={`${dirty ? 'opacity-100 cursor-pointer' : 'opacity-60 cursor-not-allowed'} mt-5 w-min whitespace-nowrap text-white px-3 py-2 bg-purple-500 rounded-lg`}>
                    Save changes
                </motion.button>
            </div>
        </div>
    )
}