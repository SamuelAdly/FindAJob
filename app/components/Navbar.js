import { TiHome } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";
import { FaFileUpload } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";

export default function Navbar () {
    return (
    <nav className=" bg-white border-b-2 border-black z-50 fixed w-full shadow-lg text-black">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">

                <div className="flex items-center">
                    <a href="/" className="hover:text-gray-700 flex items-center space-x-1">
                        <TiHome className="h-6 w-6"/>
                        <h1 className="font-bold text-xl sm:text-2xl tracking-tight">FindAJob</h1>
                    </a>
                </div>

                <div className="flex items-center space-x-4">
                    <a href="/FindJobs" className="hover:text-gray-700 p-1 rounded-md text-sm font-medium flex items-center space-x-1">
                        <FaSearch className="h-4 w-4"/>
                        <span className=" hidden sm:inline">Find Jobs</span>
                    </a>
                    
                    <a href="/CareerHelp" className="hover:text-gray-700 p-1 rounded-md text-sm font-medium flex items-center space-x-1">
                        <IoMdHelp className="h-5 w-5"/>
                        <span className=" hidden sm:inline">Career Help</span>
                    </a>
                    
                    <a href="/UploadResume" className="hover:text-gray-700 p-1 rounded-md text-sm font-medium flex items-center space-x-1">
                        <FaFileUpload className="h-4 w-4"/>
                        <span className=" hidden sm:inline">Upload Resume</span>
                    </a>
                    
                    <a href="/PostJobs" className="hover:text-gray-700 p-1 rounded-md text-sm font-medium flex items-center space-x-1">
                        <IoMdAdd className="h-5 w-5"/>
                        <span className=" hidden sm:inline">Post Jobs</span>
                    </a>
                </div>

                <div className="flex items-center space-x-2">

                    <button className="bg-gray-800 border-2 border-black text-white rounded p-1 hover:bg-gray-700 active:scale-90 flex items-center space-x-1">
                        <FaSignInAlt className="h-4 w-4"/>
                        <span className=" hidden sm:inline">Sign In</span>
                    </button>

                    <button className="hover:bg-gray-200 border-2 border-black rounded p-1 active:scale-90 flex items-center space-x-1">
                        <BsFillPersonPlusFill className="h-4 w-4"/>
                        <span className=" hidden sm:inline">Register</span>
                    </button>
                </div>
            </div>
        </div>

    </nav>
    )
}