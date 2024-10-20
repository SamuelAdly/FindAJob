'use client'
import {useState} from "react";
import Step1 from "../components/steps/Step1";
import Step2 from "../components/steps/Step2";
import Step3 from "../components/steps/Step3";

const registrationForm = () => {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        role: '',
        industry: '',
        education: '',
        locationType: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Submit form data to a server here if needed
    };
    
    // render correct step component based on how far completion has gone
    const renderStep = () => {
        switch (step) {
            case 1:
                return <Step1 formData={formData} setFormData={setFormData} />;
            case 2:
                return <Step2 formData={formData} setFormData={setFormData} />;
            case 3:
                return <Step3 formData={formData} setFormData={setFormData} />;
            default:
                return <Step1 formData={formData} setFormData={setFormData} />;
        }
    };
    
    // function is called on state change to keep track of progress dynamically and change css accordingly for #progress

    const progress = (() => {
        switch (step){
            case 1:
                return '0';
            case 2:
                return '1/2';
            case 3:
                return 'full'
        }
    })();

  return (
        <form onSubmit={handleSubmit} className="m-auto flex flex-col mt-10 p-10 w-1/2 border-2 border-gray-100">
            <div className="relative flex justify-between  mb-8 w-full">

                {/* progress bar  50 projects 50 days idea was used and modified to fit project needs*/}
                
                <div className="absolute top-1/2 h-1 w-full bg-neutral-400 -z-10" id="grayLine"></div>
                <div className={`absolute top-1/2 h-1 w-${progress} bg-sky-600 transition ease-in-out -z-10`} id="progress"></div>
                
                {/* Go through each element in the array, calling a function that renders each progress step and chooses whether to change background color based on what step its on to help give more visual feedback*/}
                {[1, 2, 3].map((progressStep) => (
                    <div key={progressStep} className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors duration-300 ease-in-out ${progressStep <= step ? 'bg-sky-600 border-sky-600 text-white' : 'bg-gray-200 border-gray-300 text-gray-500'}`}>
                        {progressStep}
                    </div>
                ))}  
            </div>    
                           
            {renderStep()}
            <div className="flex justify-between mt-4">
                {step > 1 && <button type="button" className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-200" onClick={()=> setStep((prev)=>prev-1)}>Back</button>}
                {step < 3 && <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200" onClick={()=> setStep((prev)=>prev+1)}>Next</button>}
                {step === 3 && <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200">Submit</button>}
            </div>     
            
            
        </form>

  )
}

export default registrationForm