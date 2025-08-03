import { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill-new';
import 'react-quill-new/dist/quill.bubble.css';
import { CreateDraftHeader } from './creativeDraft';

export function NormalDraft(){
    const [value, setValue] = useState('');

    const container = [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
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

    /*Quill image upload Logic [By AI]*/
    function imageHandler() {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = () => {
            const file = input.files[0];
            if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const quill = this.quill;
                const range = quill.getSelection();
                quill.insertEmbed(range.index, 'image', e.target.result); // Data URL
            };
            reader.readAsDataURL(file);
            }
        };
    }

    const handleChange = (value, delta, source, editor) =>{
        setValue(value)
    }

    return(
        <div>
            <CreateDraftHeader />
            <div className="h-max max-w-7xl mx-auto">
                <div className='w-full h-full py-10 px-2'>
                    <div className='w-full h-full flex flex-col gap-5 '>
                        <div className='group'>
                            <input className='w-full bg-transparent text-5xl font-medium focus:outline-none text-white placeholder-neutral-500 hover:placeholder-neutral-400' placeholder='Title'/>
                        
                            <div className='h-0.5 bg-gradient-to-r from-transparent via-purple-500 transform  scale-x-0 duration-500 transition-all ease-in-out group-focus-within:scale-x-100'>

                            </div>
                        </div>

                        <ReactQuill className='stylish-quill text-white' placeholder='Write here...' theme='bubble' modules={modules} value={value} onChange={handleChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}