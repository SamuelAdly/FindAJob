

export default function Navbar () {
    return (
    <nav className=" flex items-center justify-between mt-1 border-b-2 pr-2 pb-2 border-black">
        <ul className="p-2 flex space-x-4">
            <li><a href="/" >Home</a></li>
            <li><a href="/FindJobs" >Find Jobs</a></li>
            <li><a href="/" >Career Help</a></li>
            <li><a href="/" >Upload Resume</a></li>
            <li><a href="/" >Post Jobs</a></li>
        </ul>
        <div className="flex space-x-4">
            <button className="bg-gray-800 border-2 border-black text-white rounded p-1 hover:bg-gray-900">Sign In</button>
            <button className="hover:bg-gray-200 border-2 border-black rounded p-1">Register</button>
        </div>
    </nav>
    )
}