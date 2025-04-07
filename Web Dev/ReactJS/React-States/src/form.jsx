import {useState} from "react";


export default function form () {

    // let [fullName, setFullName] = useState("");

    let [formData, setFormData] = useState({
        fullName : "",
        username : "",
        password : "",
    });

    // let change = (event) => {
    //     console.log(event.target.value);
    //     setFullName(event.target.value);
    // }

    let handleChange = (event) => {
        // let fieldName = event.target.name;
        // let fieldValue = event.target.value;

        setFormData( (currData) => {
            return { ...currData, [event.target.name] : event.target.value}
        });
    }

    let handleForm = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName : "",
            username : "",
            password : "",
        });
    }

    return (
        <form onSubmit={handleForm}>

            <label htmlFor="full name">Enter Full Name:</label>
            <input type="text" placeholder="Enter Full Name" value={formData.fullName} onChange={handleChange} name="fullName"/>

            <br /><br />

            <label htmlFor="username">Enter useranem: </label>
            <input type="text" placeholder="Enter username" value={formData.username} onChange={handleChange} name="username"/>
            <br /><br />

            <label htmlFor="password">Enter Passsword: </label>
            <input type="password" placeholder="Enter Passwsord" value={formData.password} onChange={handleChange} name="password" />

            <br />
            <button>Submit</button>
        </form>
    );

}