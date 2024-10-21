"use client";
import { useState } from "react";
import { MdInsertDriveFile, MdOutlineFileUpload } from "react-icons/md";

const registrationForm = () => {
    const [formData, setFormData] = useState({
        file: null,
        fileName: "No selected file",
    });

    const handleChange = e => {
        if (e.target.files[0]) {
            setFormData({
                ...formData,
                file: e.target.files[0],
                fileName: e.target.files[0].name,
            });
        }
    };

    const handleClick = e => {
        document.querySelector(".uploadResume").click();
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Submit form data to a server here if needed
    };

    return (
        <div className="m-auto flex flex-col mt-10 p-10 w-2/3 border-2 border-gray-100">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-evenly items-center w-full min-h-40"
            >
                <div
                    className="flex flex-col justify-evenly items-center h-full w-full cursor-pointer border-2 border-dashed border-gray-100"
                    onClick={handleClick}
                >
                    <input
                        type="file"
                        accept=".pdf, .doc, .docx"
                        onChange={handleChange}
                        className="uploadResume"
                        name="uploadResume"
                        hidden
                    />
                    {formData.file ? (
                        <>
                            {/* icon and text displayed when a file is selected */}
                            <MdInsertDriveFile size={60} />
                            <p className="text-sm font-medium text-gray-700">
                                File selected: {formData.fileName}
                            </p>
                        </>
                    ) : (
                        <>
                            {/* icon and text displayed when no file is selected */}
                            <MdOutlineFileUpload size={60} />
                            <p className="text-sm font-medium text-gray-700">
                                Browse files to upload
                            </p>
                        </>
                    )}
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200 cursor-pointer disabled:cursor-not-allowed"
                    disabled={!formData.file}
                >
                    Upload
                </button>
            </form>
        </div>
    );
};

export default registrationForm;
