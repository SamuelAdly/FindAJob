'use client'
import { useEffect } from "react"
import { useState } from "react"
import { FaSearch } from "react-icons/fa";
export default function FindJobs () {
    //hidden search taken from 50 projects 50 days 
    const [isActive, setIsActive] = useState(false)
        const handleSearchClick = () => {
            setIsActive(!isActive)
        }
    //Expanding cards taken from 50 projects 50 days modified using chatgpt for help
    const [activeIndex, setActiveIndex] = useState(null);
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
    ]
    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }


    return (
        <main className="w-full">
            <div className="text-center">
                <h1 className="text-4xl ">Job Search</h1>
                <p className=" text-gray-600">Find Your Dream Job</p>
            </div>
            <div className="flex justify-center mt-3">
                <div className={`relative h-12 ${isActive ? 'w-52' : 'w-12'} transition-all duration-300`}>
                    <input
                        type="text"
                        className={`bg-white h-12 w-${isActive ? 'full' : '12'} px-4 py-2 text-lg transition-all duration-300 focus:outline-none`}
                        placeholder="Search..."
                    />
                    <button
                        className="absolute top-0 left-0 w-12 h-12 bg-white text-2xl flex items-center justify-center cursor-pointer focus:outline-none transition-transform duration-300"
                        onClick={handleSearchClick}
                        type="submit"
                        style={{ transform: isActive ? 'translateX(196px)' : 'translateX(0)' }}
                    >
                        <FaSearch/>
                    </button>
                </div>
            </div>
            <div className="w-11/12 mx-auto mt-10 space-y-4">
                {jobPostings.map((job, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 rounded-lg text-black cursor-pointer m-2 p-6 relative transition-all duration-500 ease-in-out border border-gray-300"
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
                ))}
            </div>
        </main>
    )
}