import React from "react";

export default function Form() {

    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "",
            isFriendly: false,
            employment: "",
            favTech: ""
        }
    );

    function handleChange(event) {

        setFormData(prevFormData => {
            const {name, value, type, checked} = event.target;
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value 
            }
        });        
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />

             <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />

            <input
                type="email"
                placeholder="Email Adress"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />  

            <textarea 
                value={formData.comments}
                placeholder="Type Your comment"
                onChange={handleChange}
                name="comments"
            />   

            <input
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            /> 
            <label htmlFor="isFriendly">Are You friendly?</label>
            <br />
            <hr />
            <fieldset>
                <legend>Current employment status</legend>

                <input
                    type="radio" 
                    id="unemployed"
                    name="employment" 
                    value="unemployed" 
                    checked={formData.employment === "unemployed"}                
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input 
                    type="radio"                
                    id="part-time" 
                    name="employment"
                    value="part-time" 
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-Time</label>
                <br />

                <input 
                    type="radio"
                    id="full-time"
                    name="employment" 
                    value="full-time"
                    checked={formData.employment === "full-time"} 
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-Time</label>
            </fieldset>  
            <br />
            <hr />  

            <label htmlFor="favTech">What is your favorite technology?</label>   
            <br />
            <select 
                id="favTech"
                value={formData.favTech}
                onChange={handleChange}
                name="favTech"
            >
                <option value="">--Choose--</option>
                <option value="java">Java</option>
                <option value="mysql">MySql</option>
                <option value="spring">Spring</option>
                <option value="html">Html</option>
                <option value="js">J-S</option>
                <option value="css">CSS</option>
                <option value="react">React</option>                
            </select>  
            <br />
            <br />
            <hr />   
            <button>Submit</button>           
        </form>
    );
}