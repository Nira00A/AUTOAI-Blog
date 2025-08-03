import { createContext , useContext , useEffect , useState} from "react";
import axios from 'axios'
import { toast } from "react-toastify";

axios.defaults.withCredentials = true;

const profileContext = createContext()

export const ProfileProvider = ({children}) =>{
    const [loadingProfile , setLoadingProfile] = useState(false)
    const [updateProfile , setUpdateProfile] = useState({})
    const [settingForm , setSettingForm] = useState({})
    const [slug , setSlug] = useState(null)
    const [allProfiles , setALLProfiles] = useState([])

    //Fetiching a profile
    useEffect(()=>{
        const controller = new AbortController();

        const fetchProfile = async () =>{
    
            setLoadingProfile(true)
            try {
                const result = await axios.post('http://localhost:5000/get/profile')
                const profile = result.data.res

                setUpdateProfile(profile)
                setSlug(profile.slug)
                toast.success('Profile fetched')
            } catch (error) {
                console.log('Error while fetching the account in the front end' , error)
                toast.error('Error while fetching the account')
                setLoadingProfile(false)
            } finally {
                setLoadingProfile(false)
            }
        }

        fetchProfile()

        return () => controller.abort()
    },[])

    /*Fetching all Blogs*/
    useEffect(()=>{
        const controller = new AbortController();

        const blogAll = async () =>{
            setLoadingProfile(true)
            try {
                const result = await axios.post('http://localhost:5000/allprofiles')
                setALLProfiles(result.data.res)
                toast.success('All profiles are fetched')
            } catch (error) {
                console.log(error , 'Error in the front end while fetching all the profiles')
                setALLProfiles([])
                toast.error('Error in fetching')
            } finally {
                setLoadingProfile(false)
            }
        }

        blogAll()

        return () => controller.abort()
    },[])

    //fetching settings
    useEffect(()=>{
        const controller = new AbortController()

        const fetchSettings = async () => {
            setLoadingProfile(true)
            try {
                const settingData = await axios.post("http://localhost:5000/get/settings" , { withCredentials: true}) 

                setSettingForm(settingData.data.res)
                toast.success('Settings data fetched')
            } catch (error) {
                console.log('Error in the frontend' , error)
                setLoadingProfile(false)
            } finally {
                setLoadingProfile(false)
            }
        }

        fetchSettings()

        return () => controller.abort()
    },[])

    //fetching slug with userid
    const profileSlugFetch = async ({userid}) =>{
        setLoadingProfile(true)
        try {
            const result = await axios.post("http://localhost:5000/get/slug" , {userid})
            return result.data
        } catch (error) {
            console.log('Error in fetching from frontend' , error)
        } finally {
            setLoadingProfile(false)
        }
    }

    //fetching profile with slug
    const profileFetch = async ({slug}) =>{
        setLoadingProfile(true)
        try {
            const result = await axios.post("http://localhost:5000/get/profile-with-slug" , {slug})
            return result.data
        } catch (error) {
            console.log('Error in fetching from frontend' , error)
        } finally {
            setLoadingProfile(false)
        }
    }

    //Saving a profile
    const saveProfile = async (updateProfile) => {
        const {bio , skills , curr_role , profile_img , banner_img , notification_perms} = updateProfile

        setLoadingProfile(true)
        try {
            await axios.post('http://localhost:5000/update/profile' , {bio , skills , curr_role , profile_img , banner_img , notification_perms})
            toast.success('Successfully updated')
        } catch (error) {
            console.log('Error in the front end while updating',error)
            setLoadingProfile(false)
        } finally{
            setLoadingProfile(false)
        }
    }

    //saving Settings
    const saveSetting = async (settingForm) =>{
        const { default_text_editor , language , reading_mode , app_notifications , latest_recommendation , theme } = settingForm
    
        setLoadingProfile(true)
        try {
            await axios.post('http://localhost:5000/update/settings' , {default_text_editor , language , reading_mode , app_notifications , latest_recommendation , theme})
            toast.success('Successfully updated')
        } catch (error) {
            console.log('Error in the front end while updating',error)
            setLoadingProfile(false)
        } finally{
            setLoadingProfile(false)
        }
    }

    return (
    <profileContext.Provider value={{updateProfile , loadingProfile , settingForm , slug , profileSlugFetch , profileFetch , setUpdateProfile , saveProfile , saveSetting , setLoadingProfile}}>
        {children}
    </profileContext.Provider>
)}

export const useProfile = () => useContext(profileContext)