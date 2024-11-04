'use client'
import {useState} from "react";
import InputField from "../components/InputField";
import { IoAddCircleSharp } from "react-icons/io5";

const PostJobs = ()=>{
    const [formData, setFormData] = useState({
        jobTitle: '',
        company: '',
        location: '',
        salary: '',
        description: [
            // 
            {type: 'heading', content: 'Job Responsibilities'},
            {type: 'list', content: ['']},
            {type: 'paragraph', content: '' },
        ]
    });



    //handles the change on an input field
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDescriptionChange = (e) => {
        const newDescription = [...formData.description];
        newDescription[2].content = e.target.value;
        setFormData({
            ...formData,
            newDescription,
        });
    };


    //keeps description up to date
    const handleListChange = (listIndex, updatedValue) => {  
        const responsibilityList = [...formData.description[1].content];
        responsibilityList[listIndex] = updatedValue;
        // creates a copy of the whole description not just the list
        const newDescription = [...formData.description];
        newDescription[1].content = responsibilityList

        setFormData({
            ...formData,
            description: newDescription,
        });
       
    };

    const addListItem = () => {
        const newList = [...formData.description[1].content, ''];
        const newDescription = [...formData.description];
        newDescription[1].content = newList;
        setFormData({
            ...formData,
            description: newDescription,
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('JobPosted: ', formData);

        // Handle form submission, e.g., send formData to a backend server.
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-md space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Post a Job</h2>
            <InputField
                label="Job title"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Entry-Level Teacher"
            />
            
            <InputField
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
            />

            <InputField
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Brooklyn, NY 12111"
            />

            <InputField
                label="Salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="Entry-Level Teacher"
            />

            <InputField
                label="Description"
                name="description"
                value={formData.description[2].content}
                onChange={handleDescriptionChange}
                placeholder="Entry-Level Teacher"
            />

            {/* Job Responsibilities Section */}

            
            <label className="block font-semibold mb-1">{formData.description[0].content}</label>
            {   // grab the list of responsibilities
                formData.description[1].content.map((item, index) => (
                    <InputField
                        key={index}
                        label={``}
                        value={item}
                        onChange={(e) => handleListChange(index, e.target.value)}
                        placeholder={`Responsibility ${index + 1}`}
                    />
                ))
                
            }

            <div className="flex flex-col">
                <div className="flex mb-4 justify-center items-center h-full">
                    <IoAddCircleSharp size={40} onClick={addListItem} className="cursor-pointer" />
                </div>
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200">Submit</button>    
            </div>    


        </form>
    );

}

export default PostJobs