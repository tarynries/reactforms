import React, { useState } from "react";


function NewBoxForm({ createBox }) {
    const INITIAL_STATE = { width: "", height: "", backgroundColor: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = evt => {
        evt.preventDefault();
        createBox({ formData });
        setFormData(INITIAL_STATE);

    }

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="Width">Width:</label>
            <input
                type="number"
                id="Width"
                name="Width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="Height">Height:</label>
            <input
                type="number"
                id="Height"
                name="Height"
                value={formData.height}
                onChange={handleChange}
            />

            <label htmlFor="backgroundColor">Background Color:</label>
            <input
                id="backgroundColor"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            />

            <button>Add Box!</button>
        </form>
    )
}

export default NewBoxForm;