import axios from 'axios'
import { ToastContainer , toast , Bounce} from 'react-toastify'
import { createContext , useContext , useEffect, useState } from 'react'
import { Cloudinary } from '@cloudinary/url-gen';

axios.defaults.withCredentials = true;

const blogContext = createContext()

export const BlogProvider = ({children}) =>{
    const [blogForm , setBlogForm] = useState({title: '' , content: '' , metaTitle: '' , metaDesc: '' , metaImg: '' , tags: [] , status: ''})
    const [errors , setErrors] = useState({})
    const [loading , setLoading] = useState(false)
    const [allPost , setAllPost] = useState([])

    /*Toastify*/
    function toastifyNotification(){
        return <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
                />
    }

    /*By AI*/
    const stripHtml = (html) => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || '';
    };

    /*ReadTime Calculation*/
    const readTimeCalculation = (count) =>{
        const totalTimePerSecond = Math.floor(count / 250)

        if(totalTimePerSecond <= 5){
            return 5
        }else if (totalTimePerSecond <= 10){
            return 10
        }else if (totalTimePerSecond <= 15){
            return 15
        }

        return 30
    }

    /*Fetching all Blogs*/
    useEffect(()=>{
        const controller = new AbortController();

        const blogAll = async () =>{
            setLoading(true)
            try {
                const result = await axios.post('http://localhost:5000/allpost')
                setAllPost(result.data.res)
                toast.success('All blogs are fetched')
            } catch (error) {
                console.log(error , 'Error in the front end')
                setAllPost([])
                toast.error('Error in fetching')
            } finally {
                setLoading(false)
            }
        }

        blogAll()

        return () => controller.abort()
    },[])

    /*Blog Post*/
    const cld = new Cloudinary({ cloud: { cloudName: 'dtwq7ejpp' } });

    const blogPost = async ({title , content , metaTitle , metaDesc , metaImg , tags , status}) =>{
        try {
            const readTime = readTimeCalculation(stripHtml(content).length)

            const result = await axios.post("http://localhost:5000/blog/post" , {title , content , metaTitle , metaDesc , metaImg , tags , readTime , status} , {withCredentials : true})
            console.log('Successfully submitted' , result.data)
            toast.success('Draft successfully posted')
        } catch (error) {
            console.log('Bad Attempt , Try again...', error)
        }   
    }

    /*Errors in Blog Post*/
    const validateForm = () =>{
        const newErrors = {};
        const contentCheck = stripHtml(blogForm.content)

        setLoading(true)
        try {
            if (!blogForm.title || blogForm.title.trim() === '') {
            newErrors.title = 'Please enter a title';
            }
            if (contentCheck.length === 0) {
            newErrors.content = 'Please enter content';
            }
            if (!blogForm.metaTitle || blogForm.metaTitle.trim() === '') {
            newErrors.metaTitle = 'Please enter a meta title';
            }
            if (!blogForm.metaDesc || blogForm.metaDesc.trim() === '') {
            newErrors.metaDesc = 'Please enter a meta description';
            }
            if (!blogForm.metaImg === '') {
            newErrors.metaImg = 'Please provide a meta image URL';
            }
            // For tags, assuming it is an array and you require at least one tag
            if (!Array.isArray(blogForm.tags) || blogForm.tags.length === 0) {
            newErrors.tags = 'Please add at least one tag';
            }
            // For status, assuming it must be a non-empty string (like 'public' or 'private')
            if (!blogForm.status || blogForm.status.trim() === '') {
            newErrors.status = 'Please set the status';
            }
            setErrors(newErrors)
            return newErrors

        } catch (error) {
            console.log(error , 'Error in Validating the From')
        } finally{
            setLoading(false)
        }
    }

    //Account Fetch
    const accountFetch = async ({userid}) =>{
        setLoading(true)
        try {
            const result = await axios.post("http://localhost:5000/blog/account" , {userid})
            return result.data
        } catch (error) {
            console.log('Error in fetching from frontend' , error)
        } finally {
            setLoading(false)
        }
    }

    //Blog Fetching using Slug
    const blogFetch = async ({slug}) => {
        setLoading(true)
        try {
            const result = await axios.post("http://localhost:5000/blog/get" , {slug})

            if(result.data.length === 0){
                toast.error('No blog found')
            }

            return result.data
        } catch (error) {
            console.log('Error in fetching from frontend' , error)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    //User's blog fetching 
    const blogFetchProfile = async ({userid}) => {
        setLoading(true)
        try {
            if(!userid) return toast.error('User blogs cant be fetched')

            const result = await axios.post("http://localhost:5000/blog/get/profile" , {userid})
            return result.data.res || []
        } catch (error) {
            console.log('Error fetching the user blogs in the frontend')
        } finally {
            setLoading(false)
        }
    }

    return(
        <blogContext.Provider value={{allPost , blogForm , errors , loading , setLoading , accountFetch , blogFetch , blogFetchProfile , setBlogForm , blogPost , validateForm , toastifyNotification}}>
            {children}
        </blogContext.Provider>
    )
}

export const useBlog = () => useContext(blogContext)
