export default function Header () {
    return (
        <header className="flex p-4">
            <div className="flex space-x-4 ml-auto">
                <button className="bg-gray-800 border-2 border-black text-white rounded p-1 hover:bg-gray-900">Sign In</button>
                <button className="hover:bg-gray-200 border-2 border-black rounded p-1">Register</button>
            </div>
        </header>
    )
}