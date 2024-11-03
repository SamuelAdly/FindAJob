import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export default function Footer () {
const headings = ["Contact", "Job Seekers", "Employers", "Resources"];

const rows = [
    ["Socials", "Browse Jobs", "Products", "About Us"],
    ["Armand Soto", "Salary Tools", "Solutions", "Work for Us"],
    ["Samuel Adly", "Career Advice", "Pricing", "Terms of Use"],
    ["Aiden Schulman", "Company Profile", "Resources", "Privacy Center"]

];

return (
    <footer className="bg-gray-800 text-white py-10 mt-5">
        <table className="w-full">
            <thead>
                <tr>
                    {headings.map((heading, index) => (
                        <th key={index}>{heading}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) =>(
                <tr key={rowIndex}>
                    {row.map((cell, cellIndex)=>(
                        <td key={cellIndex} className="text-center">
                            {rowIndex === 0 && cellIndex === 0 ? (
                                <div className="flex items-center justify-center space-x-3">
                                    <FaInstagram />
                                    <FaSquareXTwitter />
                                    <FaLinkedin />
                                </div>
                            ): (
                                cell
                            )}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    </footer>
)

}