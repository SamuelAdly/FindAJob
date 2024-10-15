import React from 'react';
import Link from 'next/link';


const imgOverlay = `bg-center before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-50`;


const SplitLandingPage = () => {
    return (
        <div className="flex h-screen">
            <div className={`relative w-1/2 bg-cover ${imgOverlay} flex items-center justify-center transition-all duration-300 hover:w-3/4 w-1/2 hover:before:bg-opacity-0 bg-[url('./assets/images/for-hire-img.jpg')]`}>
                <div className="text-center text-white z-10">
                    <h1 className="text-3xl font-bold">Job Seekers</h1>
                    <p className="mt-4">Explore thousands of job listings and find your dream job</p>
                    <Link href="./FindJobs">
                        <button className="mt-6 inline-block bg-black bg-opacity-50 px-4 py-2 rounded text-white">Find Jobs</button>
                    </Link>
                </div>
            </div>
            <div className={`relative w-1/2 bg-cover ${imgOverlay} flex items-center justify-center transition-all duration-300 hover:w-3/4 w-1/2 hover:before:bg-opacity-0 bg-[url('./assets/images/hiring-img.jpg')]`}>
                <div className="text-center text-white z-10">
                    <h1 className="text-3xl font-bold">Employers</h1>
                    <p className="mt-4">Post a job and find the perfect candidate for your company</p>
                    <Link href="./FindJobs/page.js">
                        <button className="mt-6 inline-block bg-black bg-opacity-50 px-4 py-2 rounded text-white">Employers</button>
                    </Link>
                </div>

            </div>
        </div>    
    )
}

export default SplitLandingPage;