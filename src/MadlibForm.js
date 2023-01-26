import React, {useState} from "react";

const MadlibForm =({add})=> {
    const initialState = {
        noun: "",
        noun2: "",
        adjective: "",
        color: ""
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const{noun, noun2, adjective, color} = formData;
        add(formData);
        setFormData(initialState);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="noun">Noun</label>
                <input 
                name = "noun"
                id="noun"
                type="text" 
                placeholder="noun" 
                value={formData.noun} 
                onChange={handleChange} 
            />
            <label htmlFor="noun2">Noun2</label>
                <input 
                name = "noun2"
                id="noun2"
                type="text" 
                placeholder="noun" 
                value={formData.noun2} 
                onChange={handleChange} 
            />
            <label htmlFor="adjective">Adjective</label>
                <input 
                name = "adjective"
                id="adjective"
                type="text" 
                placeholder="adjective" 
                value={formData.adjective} 
                onChange={handleChange} 
            />
            <label htmlFor="color">Color</label>
                <input 
                name = "color"
                id="color"
                type="text" 
                placeholder="color" 
                value={formData.color} 
                onChange={handleChange}
            />
            {/* Button will not show up until all forms are filled. */}
            <div className="buttons">
                {(formData.noun != "" && formData.noun2 != "" && formData.color !="" && formData.adjective != "") && <button>Get Story!</button>}
            </div> 
        </form>
    )
}

export default MadlibForm;