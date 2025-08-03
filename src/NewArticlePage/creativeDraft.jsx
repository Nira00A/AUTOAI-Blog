import React, { useEffect, useRef, useState } from 'react';
import { FaCog, FaQuestionCircle, FaRocket, FaSave , FaExpand , FaTimes, FaInfo, FaInfoCircle, FaUpload} from 'react-icons/fa';
import ReactQuill , { Quill } from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { motion } from "framer-motion"
import { useBlog } from '../contextApis/blogContext';
import { toast } from 'react-toastify'

export function CreativeDraft(){
    const [search , setSearch] = useState('')
    const [searchArray , setSearchArray] = useState('')
    const [deltaValue , setDeltaValue] = useState('')
    const { setBlogForm , blogForm , toastifyNotification} = useBlog()

    const tag = [
        { id: 1, name: 'Artificial Intelligence', emoji: '🤖' },
        { id: 2, name: 'Machine Learning', emoji: '🧠' },
        { id: 3, name: 'Deep Learning', emoji: '🌊' },
        { id: 4, name: 'Natural Language Processing', emoji: '🗣️' },
        { id: 5, name: 'AI Tools', emoji: '🛠️' },
        { id: 6, name: 'Content Creation', emoji: '✍️' },
        { id: 7, name: 'Productivity', emoji: '⚡' },
        { id: 8, name: 'Personal Development', emoji: '🌱' },
        { id: 9, name: 'Health & Wellness', emoji: '🧘' },
        { id: 10, name: 'Remote Work', emoji: '🏠' },
        { id: 11, name: 'Digital Marketing', emoji: '📈' },
        { id: 12, name: 'SEO', emoji: '🔍' },
        { id: 13, name: 'Blogging Tips', emoji: '📝' },
        { id: 14, name: 'Tech News', emoji: '📰' },
        { id: 15, name: 'Automation', emoji: '🤖' },
        { id: 16, name: 'Data Science', emoji: '📊' },
        { id: 17, name: 'Smart Gadgets', emoji: '📱' },
        { id: 18, name: 'Writing', emoji: '🖋️' },
        { id: 19, name: 'Self Improvement', emoji: '🚀' },
        { id: 20, name: 'Travel', emoji: '🌍' },
        { id: 21, name: 'Mindfulness', emoji: '🧘‍♂️' },
        { id: 22, name: 'Finance', emoji: '💰' },
        { id: 23, name: 'Career Advice', emoji: '💼' },
        { id: 24, name: 'Coding', emoji: '💻' },
        { id: 25, name: 'Entrepreneurship', emoji: '🚀' },
        { id: 26, name: 'Startups', emoji: '🌟' },
        { id: 27, name: 'Innovation', emoji: '💡' },
        { id: 28, name: 'Future Trends', emoji: '🔮' },
        { id: 29, name: 'Personal Branding', emoji: '🧑‍💼' },
        { id: 30, name: 'Social Media', emoji: '📱' },
        { id: 31, name: 'Fitness', emoji: '🏋️' },
        { id: 32, name: 'Mental Health', emoji: '🧠' },
        { id: 33, name: 'Work-Life Balance', emoji: '⚖️' },
        { id: 34, name: 'Inspiration', emoji: '✨' },
        { id: 35, name: 'Lifestyle Design', emoji: '🎨' }
    ];

    const container = [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['blockquote', 'code-block'],
            ['link', 'image'],
            ['clean']
        ]

    const modules = {
        toolbar: {
            container : container,
            handlers: {
                image: imageHandler
            }
        }
    }

    useEffect(()=>{
        setSearchArray([tag.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))])
    },[search])


    /*Quill image upload Logic [By AI]*/
    function imageHandler() {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            if (file) {
            {/*Upload file to Cloudinary via unsigned upload*/}

            {/* We could also use this one too As this is simple and easy
                
                // Create a Cloudinary instance and set your cloud name.
                const cld = new Cloudinary({
                    cloud: {
                    cloudName: 'demo'
                    }
                });

                // cld.image returns a CloudinaryImage with the configuration set.
                const myImage = cld.image('sample');

                // The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample*/}

            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "autoai"); 

            const res = await fetch(`https://api.cloudinary.com/v1_1/dtwq7ejpp/image/upload`, {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            const reader = new FileReader();
            reader.onload = (e) => {
                const quill = this.quill;
                const range = quill.getSelection();
                quill.insertEmbed(range.index, 'image', data.url); // Data URL
            };
            reader.readAsDataURL(file);
            }
        };
    }

    /*Handle change of the HTML*/
    const handleChange = (value, delta, source, editor) =>{
        setBlogForm(prev => ({...prev , content: value}))
        setDeltaValue(editor.getContents())
    }

    /*Search*/
    const handleAddSelected = ({id , name , emoji}) =>{
        if (blogForm.tags.length <= 2){
            setBlogForm(prev => {
                const currentTags = prev.tags || ''
                const exists = currentTags.find(item => item.id === id)
                const newTags = exists ? currentTags : [...currentTags, { id, name, emoji }]
                return {
                    ...prev,
                    tags: newTags,
                };
            })
        
        setSearch('')
    }}

    /*Tag remove*/
    const handleRemoveSelected = (id) =>{
        return  setBlogForm(prev => {
            const currentTags = prev.tags
            const filterTags = currentTags.filter(item => item.id !== id)
            return{
                ...prev,
                tags: filterTags
            }
        })
    }

    return(
        <div>
            <CreateDraftHeader />
            {toastifyNotification()}
            <div className="h-max max-w-7xl mx-auto">
                <div className='w-full h-full py-10 px-2'>
                    {/*Text Editor*/}
                    <div className='w-full h-full flex flex-col gap-5 '>
                        <div className='group'>
                            <input id='title' onChange={(e)=> setBlogForm(prev => ({...prev , title: e.target.value}))} className='w-full bg-transparent text-5xl font-medium focus:outline-none text-white placeholder-neutral-500 hover:placeholder-neutral-400' placeholder='Title'/>
                        
                            <div className='h-0.5 bg-gradient-to-r from-transparent via-purple-500 transform  scale-x-0 duration-500 transition-all ease-in-out group-focus-within:scale-x-100'>
                            </div>
                        </div>
                        
                        <ReactQuill className='stylish-quill' theme='snow' modules={modules} value={blogForm.content} onChange={handleChange}/>
                        
                        <div className='relative'>
                            <div className='flex flex-col'>
                                <div style={{scrollbarWidth: 'none'}} className="flex gap-2 px-2 pl-[6px] h-[45px] w-full rounded-lg border border-neutral-600 focus-within:ring-2 ring-purple-400">
                                {/* The input field for searching/selecting tag */}
                                <input
                                    id='search'
                                    placeholder="Search your tag"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    type="search"
                                    className="flex placeholder-shown:text-sm w-full overflow-hidden bg-transparent outline-none text-white placeholder-neutral-500"
                                />
                                </div>
                                <div className='flex flex-wrap pt-2 gap-2'>
                                    {/* Render selected tag */}
                                    {blogForm.tags.map(tag => (
                                        <span
                                        key={tag.id}
                                        className="flex flex-row gap-1 px-2 py-2 bg-purple-500 text-white rounded text-sm"
                                        >
                                        {tag.emoji} {tag.name}
                                        {/*Remove tag button */}
                                        <button
                                            className="ml-1 text-xs text-white hover:text-red-300"
                                            onClick={() => handleRemoveSelected(tag.id)}
                                            type="button"
                                        >
                                            ×
                                        </button>
                                        </span>
                                ))}
                                </div>
                            </div>

                                
                            {search ? 
                            <div className='absolute p-1 overflow-y-scroll z-40 top-12 rounded-b-md w-[100%] h-[300px] bg-neutral-800'>
                                {searchArray[0].map(({id , name , emoji}) =>(
                                <div
                                        onClick={() => handleAddSelected({id , name , emoji})}
                                        key={id}
                                        className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 transition-colors cursor-pointer"
                                        >
                                        <span className="text-sm">{emoji}</span>
                                        <span className="font-medium">{name}</span>
                                    </div>
                                ))}
                            </div>
                            :
                            <div>

                            </div>
                            }
                            
                        </div>
                    </div>             
                </div>
            </div>
        </div>
    )
}

export function CreateDraftHeader(){
    const [settingsOpen , setSettingsOpen] = useState(false)
    const [fullscreen , setFullscreen] = useState(false)
    const [isdrag , setIsdrag] = useState(false)
    const [developerMessage, setDeveloperMessage] = useState("");
    const [commentsEnabled, setCommentsEnabled] = useState(true);
    const { blogPost , setBlogForm , blogForm , validateForm , errors , loading} = useBlog()

    function useScreenWidth(){
        const [screenWidth , setScreenWidth] = useState(window.innerWidth)
        useEffect(()=>{
            const handleResize = () => setScreenWidth(window.innerWidth)
            window.addEventListener('resize' , handleResize)
            return () => window.removeEventListener('resize' , handleResize)
        },[])
        return screenWidth  
    }

    const handleDragIn = (e) =>{
        e.preventDefault()
        setIsdrag(true)
    }

    const handleDragOut = (e) =>{
        e.preventDefault()
        setIsdrag(false)
    }

    const handleDrop = (e) =>{
        e.preventDefault()
        e.stopPropagation()
        setIsdrag(false)

        const files = e.dataTransfer.files[0]
        setBlogForm(prev => ({...prev , metaImg: files ? URL.createObjectURL(files) : ''}))
    }

    const handleClose = () =>{
        setSettingsOpen(false)
        setFullscreen(false)
    }

    const handleImage = async (e) =>{
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
        // data.public_id or data.secure_url are your Cloudinary references
        setBlogForm(prev => ({ ...prev, metaImg: data.url }));
    }

    const width = useScreenWidth()

    
    const panelWidth =
    width < 640 ? "100vw" : width < 1024 ? 400 : 500;

    /*Submission of Blog for Review by the admin*/
    const handleBlogSubmitDraft = async (e) =>{
        e.preventDefault()

        const validationErrors = validateForm();
        
        //Toast error Notification
        if (Object.keys(validationErrors).length > 0) {
            toast.error('Enter the required feilds')
            return;
        }

        try {
            await blogPost({title: blogForm.title,
                            content: blogForm.content,
                            metaTitle: blogForm.metaTitle,
                            metaDesc: blogForm.metaDesc,
                            metaImg: blogForm.metaImg,
                            tags: blogForm.tags,  
                            status: blogForm.status})
        } catch (error) {
            toast.error('Error occured while saving draft')
        }

    }

    const handleBlogSubmitPublic = async (e) =>{
        e.preventDefault()

        const validationErrors = validateForm();
        
        //Toast error Notification
        if (Object.keys(validationErrors).length > 0) {
            toast.error('Enter the required feilds')
            return;
        }

        setBlogForm(prev => ({...prev , status:'public'}))

        try {
            await blogPost({title: blogForm.title,
                            content: blogForm.content,
                            metaTitle: blogForm.metaTitle,
                            metaDesc: blogForm.metaDesc,
                            metaImg: blogForm.metaImg,
                            tags: blogForm.tags,  
                            status: blogForm.status})
            toast.success('Draft successfully posted')
        } catch (error) {
            toast.error('Error occured while saving draft')
        }

    }

    return(
        <div className="sticky top-0 z-10 bg-neutral-800 h-[50px] w-full flex justify-center items-center">
            <div className="flex flex-row w-[1309px] justify-between items-center p-3 px-5 overflow-x-hidden relative">
                <div>
                    <button onClick={handleBlogSubmitPublic} style={{borderRadius: '10px' , height: '30px' , backgroundColor: '#404040 '}} className='w-max group button flex p-2 transform transition-all duration-500 items-center bg-neutral-700 gap-2'>
                        <FaRocket className='text-white group-hover:animate-pulse'/>
                        <div className='z-10 text-sm font-medium text-white'>Publish</div>
                    </button>
                </div>

                <div className=' flex flex-row gap-3'>
                    <button onClick={() => setSettingsOpen(v => !v)} style={{borderRadius: '10px',height: '30px'}} className={`${settingsOpen ? 'bg-purple-500' : 'button'} group flex justify-center px-2 transform transition-all duration-500 items-center gap-2 rounded-[10px]`}>
                        <FaCog className={`${settingsOpen ? '' : 'group-hover:animate-spin'} text-white`} />
                        <div className="z-10 text-sm font-medium text-white">Settings</div>
                    </button>

                    <button style={{borderRadius: '10px',height: '30px'}} className={` group button flex justify-center px-2 transform transition-all duration-500 items-center gap-2 rounded-[10px]`}>
                        <FaQuestionCircle className="text-white z-10" />
                        <div className="z-10 text-sm font-medium text-white">Help</div>
                    </button>


                    <button onClick={handleBlogSubmitDraft} style={{borderRadius: '10px',height: '30px'}} className={` group flex justify-center px-2 transform transition-all duration-500 items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-700`}>
                        <FaSave className="text-white z-10" />
                        <div className="z-10 text-sm font-medium text-white">Save</div>
                    </button>
                </div>
                
            </div>
            
            {/*Settings Board*/}
            {settingsOpen &&
            <motion.div
                initial = {{opacity: 0}}
                animate = {fullscreen ? {opacity: 1 , position: "fixed",top: 0,left: 0,width: "100vw",height: "100vh"} 
                        : {opacity: 1 , position: "absolute",top: 50,right: 0,width: panelWidth ,height: "calc(100vh - 50px)"}}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={` p-3 hide-scrollbar
                flex flex-col shadow-xl shadow-neutral-800 bg-neutral-900 border border-t border-neutral-800 z-50 overflow-auto`}>
                
                {/*Settings header*/}
                <div className='flex flex-row items-center justify-between px-3 h-[50px]'>
                    <div className='flex flex-row gap-5'>
                        <FaExpand onClick={() => setFullscreen(v => !v)} className='text-white h-6 w-6 cursor-pointer'/>
                        <FaTimes onClick={handleClose} className='text-white h-6 w-6 cursor-pointer'/>
                    </div>

                    <FaInfoCircle className='text-white h-6 w-6 cursor-pointer'/>
                </div>

                <div className='flex flex-col gap-2 px-3 py-3 font-medium text-neutral-700'>
                    <div className='flex flex-row gap-3'>
                        <div>Created at :</div>
                    </div>
                </div>

                {/*Image Upload*/}
                <div
                className='flex flex-col w-full px-3 pt-3 pr-4'>
                    <div className='flex flex-row justify-between items-center text-neutral-500 font-bold text-lg'>
                        <div>Upload Image</div>
                        <FaInfo/>
                    </div>

                    <div 
                    onDragEnter={handleDragIn}
                    onDragLeave={handleDragOut}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop} 
                    className={`${isdrag ? 'border-purple-500' : 'border-neutral-600'} z-50 h-[200px] flex-col w-full border shadow-md shadow-neutral-800 rounded-lg focus-within:border-green-500 mt-2 flex justify-center items-center`}>
                        {blogForm.metaImg ? <div className='relative'>
                                    <img className='relative h-20 w-20 object-cover mb-6' src={`${blogForm.metaImg}`}/>
                                    <FaTimes onClick={() => setBlogForm(prev => ({...prev , metaImg: ''}))} className='absolute -top-2 -left-2 w-6 h-6 text-white cursor-pointer'/> 
                                </div>

                        : 
                        <span className='bg-neutral-700 flex justify-center items-center rounded-full h-8 w-8 mb-6'>
                            <FaUpload className='text-white '/>
                        </span>}
                        

                        <label className='text-white text-center'>
                            <div className='text-sm'><span className='bg-clip-text bg-gradient-to-r text-blue-500 hover:underline'>Click here</span> <span>to upload your file or drag.</span></div>
                            <span className='text-sm text-neutral-500'>Supported Format;SVG,JPG,PNG (1MB each)</span>
                            <input id='img-upload' className='hidden' accept='image/*' type='file' onChange={(e)=> handleImage(e)}/>
                        </label>
                        
                    </div>
                </div>

                {/*MetaDesc*/}
                <div className='px-3 py-3'>
                    <label className="block text-neutral-500 font-bold text-lg mb-1">Meta Descripting</label>
                    <textarea
                    id='meta-desc'
                    className="w-full p-2 rounded bg-transparent text-sm placeholder-neutral-500 border border-neutral-700 focus:border-green-500 text-white resize-none"
                    rows={3}
                    maxLength={160}
                    placeholder="Write a short summary for SEO (max 160 characters)"
                    value={blogForm.metaDesc}
                    onChange={e => setBlogForm(prev => ({...prev , metaDesc: e.target.value}))}
                    />
                    <div className="text-xs text-neutral-500 mt-1">{blogForm.metaDesc.length}/160</div>
                </div>

                {/* Display Title (for extras) */}
                <div className='p-3'>
                    <label className="block text-neutral-500 font-bold text-lg mb-1">Display Title (for Extras)</label>
                    <input
                    id='meta-title'
                    className="w-full p-2 rounded bg-transparent text-sm placeholder-neutral-500 border border-neutral-700 focus:border-green-500 text-white"
                    type="text"
                    placeholder="e.g. Special Edition, Featured Post"
                    value={blogForm.metaTitle}
                    onChange={e => setBlogForm(prev => ({...prev , metaTitle: e.target.value}))}
                    />
                </div>

                {/* Message the Developer */}
                <div className='p-3'>
                    <label className="block text-neutral-500 font-bold text-lg mb-1">Message the Developer</label>
                    <textarea
                    id='dev-message'
                    className="w-full p-2 rounded bg-transparent text-sm placeholder-neutral-500 border border-neutral-700 focus:border-green-500 text-white resize-none"
                    rows={2}
                    placeholder="Send a note or feedback to the developer"
                    value={developerMessage}
                    onChange={e => setDeveloperMessage(e.target.value)}
                    />
                </div>

                {/* Status */}
                <div className='p-3'>
                    <label className="block text-neutral-500 font-bold text-lg mb-1">Set Status</label>
                    <div className="flex gap-3">
                    {["public", "private", "archived"].map(option => (
                        <button
                        key={option}
                        className={`px-4 py-2 text-sm placeholder-neutral-500 rounded font-semibold transition
                            ${blogForm.status === option
                            ? "bg-purple-500 text-white"
                            : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"}`}
                        onClick={() => setBlogForm(prev => ({...prev , status: option}))}
                        type="button"
                        >
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                        </button>
                    ))}
                    </div>
                </div>

                {/* Comments On/Off */}
                <div className="flex items-center gap-3 p-3">
                    <label className="text-neutral-500 font-bold text-lg">Comments</label>
                    <button
                    className={`px-4 py-2 rounded text-sm font-semibold transition
                        ${commentsEnabled
                        ? "bg-purple-500 text-white"
                        : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"}`}
                    onClick={() => setCommentsEnabled(!commentsEnabled)}
                    type="button"
                    >
                    {commentsEnabled ? "On" : "Off"}
                    </button>
                </div>
                
            </motion.div>
}
        </div>
    )
}