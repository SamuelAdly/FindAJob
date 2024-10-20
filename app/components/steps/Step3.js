import React from 'react';

const Step3 = ({ formData, setFormData }) => {

    //Styling is default, styling needs to be updated later

    return (
        <div>
            <h2>Summary</h2>
            {/*Loop over the data from the object to easily display both key and values */}
            {Object.entries(formData).map(([key, value]) => (
                <p key={key}>
                <strong>{`${key.charAt(0).toUpperCase() + key.slice(1)}:`}</strong> {value}</p>
            ))}
        </div>
    );
};

export default Step3;
