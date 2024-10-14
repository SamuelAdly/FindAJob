export default function FindJobs () {
    return (
        <main>
            <div className="text-center">
                <h1 className="text-4xl ">Job Search</h1>
                <p className=" text-gray-600">Find Your Dream Job</p>
            </div>

            <div className="text-center mt-3">
                <form>
                    <input className="mr-3 w-56" type="text" placeholder="Job Title, Location, or Company"/>
                    <button className=" hover:bg-gray-200 border-solid border-black border-2 rounded w-fit pl-1 pr-1" type="submit">Search</button>
                </form>
            </div>

            <p className="text-left ml-20 mt-2 w-fit text-2xl bg-slate-800 text-white rounded">Current Job Postings</p>
            <section className="text-left ml-20 mt-2 border-2 border-gray-200 border-solid rounded">
                <h1 className="font-bold">Entry-Level Teacher</h1>
                <div className="flex text-gray-600">
                <h2 className="mr-2 underline">Success Academy Charter Schools</h2>
                <h2 className="mr-2">Queens, NY</h2>
                <h2>$65,000/Year</h2>
                </div>
                <p></p>
            </section>
        </main>
    )
}