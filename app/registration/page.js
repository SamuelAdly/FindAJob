'use client'
import {useState} from "react";

const registrationForm = () => {
    const labelStyle = "w-full text-lg font-medium mb-1";
    const inputStyle = "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 transition duration-200";
    const submitStyle = "w-full bg-blue-500 text-white font-semibold py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-600";
    const buttonStyle = "bg-gray-800 border-2 border-black text-white rounded p-1 hover:bg-gray-900";
    const [formData, setFormData] = useState({firstName: "", lastName: "", email:"", role: ""});
    const [currentStep, setCurrentStep] = useState(0);
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    }

    const handleClick = (event) => {
        if(event.target.id === "previousBtn"){
            if (currentStep > 0){
                setCurrentStep((prev) => prev - 1)
            }    
        } else if (event.target.id === "nextBtn"){
            // we have to set a max based on the last card component
            setCurrentStep((next) => next + 1)
        } else{
            console.log(event.target);
        }
        
    }


  return (
    <div className="w-1/2 mx-auto mt-10">
        <form className="space-y-4 bg-white rounded-lg shadow-lg p-12 border border-gray-200" onSubmit = {handleSubmit}>

            {currentStep === 0 && (
                <div>
                        <label className={labelStyle} htmlFor="firstName">First Name: </label>
                        <input className={inputStyle} type="text" id="firstName" name="firstName" value={formData.name} onChange={handleChange} />


                        <label className={labelStyle} htmlFor="lastName">Last Name: </label>
                        <input className={inputStyle} type="text" id="lastName" name="lastName" value={formData.name} onChange={handleChange} />

                </div>
            )}

            {
                currentStep === 1 && (
                    <div>
                            <label className={labelStyle} htmlFor="email">Email:</label>
                            <input className={inputStyle} type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                        
                            <p className={labelStyle}>What what are you looking for? </p>
                            <div>
                                <label className={`text-lg font-medium mb-1`}>
                                    <input className={``} type="radio" name="role" value="employer" />
                                    Find a Job
                                </label>

                            </div>
                            <div>
                                <label className={`text-lg font-medium mb-1`}>
                                    <input className={``} type="radio" name="role" value="employee" />
                                    Hire Employees
                                </label>     
                            </div>
                        


                    </div>
                
            )}

            <div className="flex justify-between">
                
                <button id="previousBtn" className={buttonStyle} onClick={handleClick}>Prev</button>
                {
                    // 1 is temporary, planning on making this dynamic and actually represent the last page
                    
                    currentStep < 1 ? <button id="nextBtn" className={buttonStyle} onClick={handleClick}>Next</button> : <button className={submitStyle} type="submit">Submit</button> 
                }
            </div>

            <div className=" border-2 relative flex justify-between  mb-8 w-full w-32 ">
                <div className="absolute top-1/2 h-1 w-full bg-neutral-400 -z-10" id="grayLine"></div>
                <div className="absolute top-1/2 h-1 w-0 bg-sky-600 transition ease" id="progress"></div>
                <div className="flex items-center justify-center w-4 h-4 bg-gray-200  rounded-full">1</div>
                <div className="flex items-center justify-center w-4 h-4 bg-gray-200  rounded-full">2</div>
                <div className="flex items-center justify-center w-4 h-4 bg-gray-200  rounded-full">3</div>
                <div className="flex items-center justify-center w-4 h-4 bg-gray-200  rounded-full">4</div>
            </div>
            
        </form>


        
    </div>

  )
}

export default registrationForm