import React from 'react';

const Step2 = ({ formData, setFormData }) => {
    return (
        <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold text-center">Job Basics</h2>

            {/* Role */}

            <p className="block text-sm font-medium text-gray-700 mb-2">How will you be using this site? </p>
            <label className="flex items-center text-lg font-medium mb-3 cursor-pointer">
                <input className="mr-2 h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500" onChange={(e) => setFormData({...formData, role: e.target.value})} type="radio" name="role" value="employer" />
                Find a Job
            </label>
            <label className="flex items-center text-lg font-medium mb-3 cursor-pointer">
                <input className="mr-2 h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500" onChange={(e) => setFormData({...formData, role: e.target.value})} type="radio" name="role" value="employee" />
                Hire Employees
            </label> 

            {/* Industry */}

            <label for="industry" class="block text-sm font-medium text-gray-700" >Select an Industry</label>
            <select id="industry" name="industry" onChange={(e) => setFormData({...formData, industry: e.target.value})} class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Choose an industry...</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
                <option value="retail">Retail</option>
                <option value="construction">Construction</option>
                <option value="hospitality">Hospitality</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="transportation">Transportation</option>
                <option value="real-estate">Real Estate</option>
            </select>
            
            {/* Education */}
            
            <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">Highest Level of Education (if applicable)</label>
            <select 
                id="education" 
                name="education" 
                onChange={(e) => setFormData({ ...formData, education: e.target.value })} 
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="">Select your education level...</option>
                <option value="high-school">High School</option>
                <option value="associate-degree">Associate Degree</option>
                <option value="bachelor-degree">Bachelor's Degree</option>
                <option value="master-degree">Master's Degree</option>
                <option value="doctorate">Doctorate</option>
                <option value="other">Other</option>
            </select>

            {/* Location Type */}

            <label htmlFor="locationType" className="block text-sm font-medium text-gray-700 mb-2">Job Location Type</label>
            <select 
                id="locationType" 
                name="locationType" 
                onChange={(e) => setFormData({ ...formData, locationType: e.target.value })} 
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="">Select job location type...</option>
                <option value="remote">Remote</option>
                <option value="onsite">On-site</option>
                <option value="hybrid">Hybrid</option>
                <option value="flexible">Flexible</option>
                <option value="temporary">Temporary</option>
                <option value="contract">Contract</option>
            </select> 
                

            
        </div>
    );
};

export default Step2;