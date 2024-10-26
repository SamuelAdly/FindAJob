'use client'
import Image from "next/image"
import logo from "../assets/images/logo.png"
import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { GiConfirmed } from "react-icons/gi";


export default function SignIn () {
    const [signInData, setSignInData] = useState({
        email: '',
        otc: '',
    });

    const [isCodeSent, setIsCodeSent] = useState(false)
    const handleSendCode = () => {
        setIsCodeSent(true)
        console.log('One-time Code Sent to ' + signInData.email + '. Please Enter Code Below.');
        console.log('for testing purposes just put a 6 digit code')
    }
    
    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };
    const isValidOTC = (otc) => {
        const otcPattern = /^[0-9]{6}$/;
        return otcPattern.test(otc);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isValidOTC(signInData.otc)){
            console.log('Sign In Successful');
            console.log('Form submitted:', signInData);
        } else {
            console.log('Invalid OTC. Please try again.');
        }
        
    };
    return (
        <form onSubmit={handleSubmit} className="m-auto flex flex-col mt-10 p-10 w-1/2 border-2 border-gray-100">
            <div className="flex flex-col items-center w-full">
                <a href="../">
                    <Image width={512} height={512} src={logo} alt="FindAJob Logo" className="w-20 h-6 rounded-full" />
                </a>
                    <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
                    

                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">Email</label>
                <div className="flex w-full">
                    <input
                    className="block w-full border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-12 px-4"
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={signInData.email}
                    onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                    />
                    <button type="button" onClick={handleSendCode} disabled={isCodeSent || !isValidEmail(signInData.email)} className="bg-gray-800 text-white rounded-r-md flex items-center justify-center h-12 px-4 hover:bg-gray-700 active:scale-90">
                        Send
                        <IoIosSend className="h-5 w-5 ml-1" />
                    </button>
                </div>
                {isCodeSent && (
                    <div className="flex flex-col items-center mb-8 w-full">
                        <label htmlFor="otc" className="block text-sm font-medium text-gray-700 mt-4">One Time Code</label>
                        <input
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-12 px-4"
                            type="text"
                            placeholder="Enter your one-time code"
                            value={signInData.otc}
                            onChange={(e) => setSignInData({ ...signInData, otc: e.target.value })}
                        />
                        <button type="submit" className="bg-gray-800 text-white rounded-md flex items-center justify-center h-12 px-4 hover:bg-gray-700 active:scale-90 mt-2">
                        Confirm Code
                            <GiConfirmed className="h-5 w-5 ml-1" />
                    </button>
                    </div>
                )}
                <p className=" text-gray-600 italic text-md mt-1">Dont Have An Account?
                    <a className="ml-1 text-blue-500 hover:text-blue-700 underline " href="../registration">Sign Up</a>
                </p>
            </div>
        </form>
    )
}