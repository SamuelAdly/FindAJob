import React from 'react';

const Step1 = ({ formData, setFormData }) => {
    return (
        <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold text-center">Personal Details</h2>

            {/* First Name */}

            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mt-4">First Name</label>
            <input
                className="mt-1 block w-full px-4 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="text"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />

            {/* Last Name */}

            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mt-4">Last Name</label>
            <input
                className="mt-1 block w-full px-4 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="text"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />

            {/* Email */}

            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">Email</label>
            <input
                className="mt-1 block w-full px-4 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            {/* Phone */}

            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mt-4">Phone</label>
            <input
                className="mt-1 block w-full px-4 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="tel"
                placeholder="123-456-7890"
                pattern = "^\d{3}[-]\d{3}[-]\d{4}$"
                maxLength="12"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />

            {/* Location */}

            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <input 
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="text" 
                name="location" 
                placeholder="Enter your location" 
                onChange={(e) => setFormData({ ...formData, location: e.target.value })} 
            />

            
        </div>
    );
};

export default Step1;