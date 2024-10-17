
export default function Footer () {
const headings = ["Logo", "Job Seekers", "Employers", "Resources"];

const rows = [
    ["Socials", "Browse Jobs", "Products", "About Us"],
    ["", "Salary Tools", "Solutions", "Work for Us"],
    ["", "Career Advice", "Pricing", "Terms of Use"],
    ["", "Company Profile", "Resources", "Privacy Center"]

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
                            {cell}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    </footer>
)

}