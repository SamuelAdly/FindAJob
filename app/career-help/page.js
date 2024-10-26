'use client'
import { useState } from "react";

export default function CareerHelp () {
    const faqs = [
        {
            title: 'How do I write a resume?',
            description: [
                {type: 'list', content: [
                    'A resume should highlight your skills, experience, education, and accomplishments. Tailor it to the specific job you’re applying for. Use action verbs and quantify achievements when possible.',
                ]}
            ]
        },
        {
            title: 'What should be included in a cover letter?',
            description: [
                {type: 'list', content: [
                    'A cover letter should introduce yourself, explain why you’re applying for the job, and highlight how your experience matches the job description. Be concise and use a professional tone.'
                ]}
            ]
        },
        {
            title: 'How can I prepare for an interview?',
            description: [
                {type: 'list', content: [
                    'Research the company and the role.',
                    'Practice common interview questions.',
                    'Prepare examples of your work or achievements.',
                    'Dress appropriately and ask insightful questions during the interview.'
                ]}
            ]
        },
        {
            title: 'What are some common interview questions?',
            description: [
                {type: 'list', content: [
                    '"Tell me about yourself."',
                    '"Why do you want to work here?"',
                    '"What are your strengths and weaknesses?"',
                    '"Where do you see yourself in 5 years?"',
                    '"How do you handle stress?"'
                ]}
            ]
        },
        {
            title: 'How do I negotiate a salary offer?',
            description: [
                {type: 'list', content: [
                    'Research salary ranges for the position and industry.',
                    'Know your worth and practice your negotiation pitch.',
                    'Be polite and confident when discussing salary expectations.'
                ]}
            ]
        },
        {
            title: 'How can I improve my LinkedIn profile?',
            description: [
                {type: 'list', content: [
                    'Use a professional profile photo.',
                    'Write a strong headline and summary.',
                    'Highlight your work experience and list relevant skills.',
                    'Engage with posts and connect with professionals in your field.'
                ]}
            ]
        },
        {
            title: 'What is networking, and how can I do it effectively?',
            description: [
                {type: 'list', content: [
                    'Networking involves building professional relationships to share information and seek advice.',
                    'Attend industry events, join professional groups, and use LinkedIn to connect with people in your field.'
                ]}
            ]
        },
        {
            title: 'What should I do if I don’t have any work experience?',
            description: [
                {type: 'list', content: [
                    'Focus on transferable skills from volunteer work, internships, school projects, or extracurricular activities.',
                    'Consider gaining experience through internships, freelancing, or part-time jobs.'
                ]}
            ]
            },
            {
            title: 'How can I stand out when applying for jobs?',
            description: [
                {type: 'list', content: [
                    'Customize your resume and cover letter for each job.',
                    'Highlight your unique skills and show enthusiasm for the company.',
                    'Follow up after applying or interviewing.'
                ]}
            ]
            },
            {
            title: 'How do I change careers?',
            description: [
                {type: 'list', content: [
                    'Identify transferable skills and research the new industry.',
                    'Consider taking courses or certifications to gain relevant skills.',
                    'Network with professionals in your target industry for insights and advice.'
                ]}
            ]
            },
    ]

    const resources = [
        {
            title: 'Resume and Cover Letter Help',
            description: [
                { type: 'list', content: [
                    { text: 'Zety Resume Builder', url: 'https://zety.com/' }, 
                    { text: 'Indeed Career Guide', url: 'https://www.indeed.com/career-advice/resumes-cover-letters' }, 
                    { text: 'Canva Resume Templates', url: 'https://www.canva.com/resumes/templates/' }
                ]}
            ]
        },
        {
            title: 'Interview Preparation',
            description: [
                { type: 'list', content: [
                    { text: 'Glassdoor Interview Questions', url: 'https://www.glassdoor.com/Interview/index.htm' }, 
                    { text: 'Big Interview', url: 'https://biginterview.com/' },  
                    { text: 'Mock Interview Practice', url: 'https://www.pramp.com/' }
                ]}
            ]
        },
        {
            title: 'Salary Research and Negotiation',
            description: [
                { type: 'list', content: [ 
                    { text: 'Payscale Salary Research', url: 'https://www.payscale.com/' }, 
                    { text: 'Salary.com', url: 'https://www.salary.com/' },  
                    { text: 'Negotiation Tips – The Muse', url: 'https://www.themuse.com/advice/how-to-negotiate-salary-37-tips-you-need-to-know' }
                ]}
            ]
        },
        {
            title: 'LinkedIn Optimization',
            description: [
                { type: 'list', content: [
                    { text: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/' }, 
                    { text: 'How to Write a LinkedIn Summary', url: 'https://www.thebalancecareers.com/write-a-linkedin-summary-2063727' },  
                    { text: 'LinkedIn Profile Checklist', url: 'https://www.jobscan.co/blog/linkedin-profile-checklist/' }
                ]}
            ]
        },
        {
            title: 'Networking',
            description: [
                { type: 'list', content: [
                    { text: 'Meetup', url: 'https://www.meetup.com/' },  
                    { text: 'LinkedIn Groups', url: 'https://www.linkedin.com/groups/' }, 
                    { text: 'Networking Tips – Forbes', url: 'https://www.forbes.com/sites/dailymuse/2013/03/19/the-20-minute-networking-meeting-how-little-time-can-lead-to-big-opportunities/' }
                ]}
            ]
        },
        {
            title: 'Job Search Platforms',
            description: [
                { type: 'list', content: [
                    { text: 'Indeed', url: 'https://www.indeed.com/' }, 
                    { text: 'LinkedIn Jobs', url: 'https://www.linkedin.com/jobs/' }, 
                    { text: 'Glassdoor', url: 'https://www.glassdoor.com/Job/index.htm' },  
                    { text: 'Google Jobs', url: 'https://careers.google.com/' }
                ]}
            ]
        },
        {
            title: 'Career Development Courses',
            description: [
                { type: 'list', content: [
                    { text: 'Coursera Career Courses', url: 'https://www.coursera.org/browse/business/career-success' }, 
                    { text: 'edX Career Development', url: 'https://www.edx.org/course/career-development' }, 
                    { text: 'Skillshare', url: 'https://www.skillshare.com/' }
                ]}
            ]
        },
        {
            title: 'Freelance and Gig Work',
            description: [
                { type: 'list', content: [
                    { text: 'Upwork', url: 'https://www.upwork.com/' }, 
                    { text: 'Fiverr', url: 'https://www.fiverr.com/' }, 
                    { text: 'Freelancer', url: 'https://www.freelancer.com/' }
                ]}
            ]
        },
        {
            title: 'Career Change Resources',
            description: [
                { type: 'list', content: [
                    { text: 'Career Change Guide – Indeed', url: 'https://www.indeed.com/career-advice/finding-a-job/how-to-change-careers' }, 
                    { text: 'The Balance Careers – Career Change', url: 'https://www.thebalancecareers.com/career-change-4161890' }, 
                    { text: 'Skillshare Career Change Courses', url: 'https://www.skillshare.com/browse/career-change' }
                ]}
            ]
        },
        {
            title: 'Work-Life Balance and Career Counseling',
            description: [
                { type: 'list', content: [
                    { text: 'Career Counseling – BetterUp', url: 'https://www.betterup.com/' }, 
                    { text: 'Therapist Directory for Work-Life Balance', url: 'https://www.psychologytoday.com/us/therapists' }, 
                    { text: 'Work-Life Balance – MindTools', url: 'https://www.mindtools.com/pages/article/newHTE_95.htm' }
                ]}
            ]
        }
    ]

    const [activeFaqIndex, setActiveFaqIndex] = useState(null);
    const [activeResourceIndex, setActiveResourceIndex] = useState(null)

    const handleFaqClick = (index) => {
        setActiveFaqIndex(activeFaqIndex === index ? null : index)
    }

    const handleResourceClick = (index) => {
        setActiveResourceIndex(activeResourceIndex === index ? null : index)
    }

    return (
        <main className="w-full min-h-screen">
            <div className="text-center mt-5 mb-10">
                <h1 className="text-5xl font-bold text-gray-800">Career Help</h1>
                <p className="text-gray-600 italic text-lg mt-2">Get Advice and Resources to Boost Your Career</p>
            </div>
    
            {/* FAQs Section */}
            <div className="w-11/12 mx-auto mt-10 space-y-4">
                <h2 style={{ fontFamily: "sans-serif" }} className="text-6xl font-extrabold text-gray-800">FAQS</h2>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 shadow-md rounded-lg text-black cursor-pointer m-2 p-6 relative hover:scale-105 hover:bg-gray-200 transition transform border border-gray-300"
                        onClick={() => handleFaqClick(index)}
                    >
                        <h3 className="text-2xl font-bold mb-2">{faq.title}</h3>
                        {activeFaqIndex === index && (
                            <div className="mt-4 text-sm transition-max-height duration-500 ease-in-out overflow-hidden">
                                {faq.description.map((section, idx) => {
                                    if (section.type === 'list') {
                                        return (
                                            <ul key={idx} className="list-disc list-inside mb-2">
                                                {section.content.map((item, itemIdx) => (
                                                    <li key={itemIdx}>{item}</li>
                                                ))}
                                            </ul>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            {/* Resources Section */}
            <div className="w-11/12 mx-auto mt-10 space-y-4">
                <h2 style={{ fontFamily: "sans-serif" }} className="text-6xl font-extrabold text-gray-800">Resources</h2>
                {resources.map((resource, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-100 shadow-md rounded-lg text-black cursor-pointer m-2 p-6 relative hover:scale-105 hover:bg-gray-200 transition transform border border-gray-300"
                        onClick={() => handleResourceClick(index)}
                    >
                        <h3 className="text-2xl font-bold mb-2">{resource.title}</h3>
                        {activeResourceIndex === index && (
                            <div className="mt-4 text-sm transition-max-height duration-500 ease-in-out overflow-hidden">
                                {resource.description.map((section, idx) => {
                                    if (section.type === 'list') {
                                        return (
                                            <ul key={idx} className="list-disc list-inside mb-2">
                                                {section.content.map((item, itemIdx) => (
                                                    typeof item === 'string' ? (
                                                        <li key={itemIdx}>{item}</li>
                                                    ) : (
                                                        <li key={itemIdx}>
                                                            <a 
                                                                href={item.url} 
                                                                className="text-blue-500 underline hover:text-blue-700"
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                            >
                                                                {item.text}
                                                            </a>
                                                        </li>
                                                    )
                                                ))}
                                            </ul>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
}