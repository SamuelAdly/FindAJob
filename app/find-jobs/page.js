'use client'
import { useState } from "react"
import { FaSearch } from "react-icons/fa";
export default function FindJobs () {
    //search bar term so whatever user enters in the search it gets filtered
    const [searchTerm, setSearchTerm] = useState("")

    //hidden search taken from 50 projects 50 days 
    //isactive is used to determine whether to expand or collapse the search bar
    const [isActive, setIsActive] = useState(false)
    //this function toggles the search bar width
        const handleSearchClick = () => {
            setIsActive(!isActive)
        }

    //Expanding cards taken from 50 projects 50 days modified using chatgpt for help
    //activeindex stores the index of the currently expanded job posting. If active it will show the details and expand
    const [activeIndex, setActiveIndex] = useState(null);
    //list of job posting objects that show title, company, location, salary, and description. Based on type the content gets displayed differently
    const jobPostings = [
        {
            title: 'Entry-Level Teacher',
            company: 'Success Academy Charter Schools',
            location: 'Queens, NY',
            salary: '$65,000/Year',
            description: [
                { type: 'heading', content: 'Job Responsibilities:' },
                { type: 'list', content: [
                    'Lesson Planning and Instruction: Develop and implement lesson plans that align with curriculum standards and cater to diverse learning styles.',
                    'Assessment and Evaluation: Assess student progress through assignments, tests, and observations. Provide timely feedback and support to help students improve.',
                    'Classroom Management: Establish and enforce classroom rules and procedures to maintain a productive learning environment.',
                    'Communication and Collaboration: Communicate regularly with students, parents, and guardians regarding academic progress and behavioral issues. Collaborate with other teachers, staff, and administration to support student success.'
                ]}
            ],
        },
        {
            title: 'QA/QC Technician',
            company: 'Chocolate Works',
            location: 'Freeport, NY 11520',
            salary: '$18/hr',
            description: [
                { type: 'heading', content: 'Job Responsibilities:' },
                { type: 'list', content: [
                    'Conduct quality inspections on products to ensure they meet specified standards.',
                    'Perform data collection and analysis to identify trends and areas for improvement.',
                    'Implement quality management practices in line with ISO 13485, HACCP, and ISO 9001 requirements.',
                    'Collaborate with the QA/QC team to maintain and improve overall product quality.'
                ]}
            ],
        },
        {
            title: 'IT Supervisor',
            company: 'Noat Footwear',
            location: 'Melville, NY 11747',
            salary: '$75,000 - $110,000/year',
            description: [
                { type: 'heading', content: 'Job Responsibilities:' },
                { type: 'list', content: [
                    'System Monitoring: Regularly monitor and ensure optimal performance of computer software, hardware, printers, and other peripherals.',
                    'Service Coordination: Coordinate service requests for software, computer, and printer issues.',
                    'Maintenance: Perform necessary hardware and software maintenance.',
                    'Problem Reporting: Document and report equipment problems or failures.',
                    'Procurement: Manage all pricing and procurement of IT equipment and provide additional estimates for electrical power needs.',
                    'Account Management: Assist in maintaining distribution groups and employee email addresses.',
                    'Equipment Setup: Install and configure new equipment, including desktops, laptops, printers, and network devices.',
                    'Technical Support: Serve as a technical resource for equipment maintenance and hardware/software purchases.',
                    'Printer Maintenance: Install toner, clear paper jams, and perform routine maintenance on printers and copiers.',
                    'Software Installation: Install and configure desktop software.',
                    'Installation Tasks: Mount TVs and other electronic devices as needed.',
                    'Account Creation: Create and maintain Microsoft Active Directory and Exchange accounts.',
                    'Team Collaboration: Work effectively as a team player.',
                    'After-Hours Support: Provide IT support outside of regular working hours when necessary.',
                    'User Assistance: Assist users with general computer software problems and escalate issues as needed.'
                ]}
            ],
        },
        {
            title: 'Software Developer',
            company: 'Mioym Equities, Inc',
            location: 'Purchase, NY 10577',
            salary: '$20 - $25/hr',
            description: [
                { type: 'heading', content: 'Job Responsibilities:' },
                { type: 'paragraph', content: 'We are looking for a SOFTWARE DEVELOPER with front end and back end experience. Must be fluid in the following technologies:' },
                { type: 'list', content: [
                    'JavaScript',
                    'Node',
                    'Express.js',
                    'GraphQL',
                    'SQL',
                    'Postgres',
                    'React',
                    'Puppeteer',
                    'AWS',
                    'EC2'
                ]}
            ],
        },
    ] //handles the expansion of the cards. If its not already clicked it expands if it is already expanded then it collapses
    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    } //filters the job postings based on the searchterm entered by the user
    const filteredJobs = jobPostings.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="w-full">
            <div className="text-center mt-5 mb-10">
                <h1 className="text-5xl font-bold text-gray-800">Job Search</h1>
                <p className=" text-gray-600 italic text-lg mt-2">Find Your Dream Job</p>
            </div>
            <div className="flex justify-center mt-3">
                <div className={`relative h-12 ${isActive ? 'w-52' : 'w-12'} transition-all duration-300`}>
                    <input
                        type="text"
                        className={`bg-white border-2 border-black h-12 w-${isActive ? 'full' : '12'} px-2 py-2 text-lg transition-all duration-300 focus:outline-none`}
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        className="absolute top-0 left-0 w-12 h-12 bg-white text-2xl flex items-center justify-center cursor-pointer focus:outline-none transition-transform duration-300"
                        onClick={handleSearchClick}
                        type="submit"
                        style={{ transform: isActive ? 'translateX(210px)' : 'translateX(0)' }}
                    >
                        <FaSearch/>
                    </button>
                </div>
            </div>
            <div className="w-11/12 mx-auto mt-10 space-y-4">
                {filteredJobs.length > 0 ? (filteredJobs.map((job, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 shadow-md rounded-lg text-black cursor-pointer m-2 p-6 relative hover:scale-105 hover:bg-gray-200 transition transform border border-gray-300"
                        onClick={() => handleClick(index)}
                    >
                        <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                        <p className="text-lg mb-1">{job.company}</p>
                        <p className="text-gray-500">{job.location}</p>
                        <p className="text-green-600">{job.salary}</p>

                        {activeIndex === index && (
                            <div className="mt-4 text-sm transition-max-height duration-500 ease-in-out overflow-hidden">
                                {job.description.map((section, idx) => {
                                    if (section.type === 'heading') {
                                        return <h4 key={idx} className="font-semibold">{section.content}</h4>;
                                    } else if (section.type === 'list') {
                                        return (
                                            <ul key={idx} className="list-disc list-inside mb-2">
                                                {section.content.map((item, itemIdx) => (
                                                    <li key={itemIdx}>{item}</li>
                                                ))}
                                            </ul>
                                        );
                                    } else if (section.type === 'paragraph') {
                                        return <p key={idx} className="mb-2">{section.content}</p>;
                                    }
                                    return null;
                                })}
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-600 my-2 font-extrabold">No Jobs Found</p> //no search results found? Display no jobs found
            )}
            </div>
        </main>
    )
}