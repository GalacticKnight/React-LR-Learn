import React, { useState } from  'react';

// We will use an onChange synthetic event to capture into state 
//    each character as it is typed

const Register = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  

    const inputDataDivStyle = {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        border: "1px solid darkgrey",
        padding: "0px 10px",
        margin: "5px",
    }

    const formDataDivStyle = {
        textAlign: "left", 
        width: "450px", 
        margin: "auto",
    }

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstname, lastname,email, password, confirmpassword };
        console.log("Welcome", newUser);
    	setFirstname("");
        setLastname("");
    	setEmail("");
    	setPassword("");
        setConfirmPassword("");
    };
    
    return(
        <form style={{ marginTop: "20px" }} onSubmit={ createUser }>
            <div style={inputDataDivStyle}>

                <label>First Name: </label> 
                <input type="text" value={firstname} onChange={ (e) => setFirstname(e.target.value) } />
                {firstname && firstname.length<3?
                <p>First name too short</p>:
                    null
                }
                

            </div>
            <div style={inputDataDivStyle}>
                <label>Last Name: </label> 
                <input type="text" value={lastname} onChange={ (e) => setLastname(e.target.value) } />
                {lastname && lastname.length<2?
                <p>Last name too short</p>:
                    null
                }
            </div>
            <div style={inputDataDivStyle}>
                <label>Email Address: </label> 
                <input 
                type="text" value={email} 
                onChange={ (e) => setEmail(e.target.value) } 
                />
                {email && email.length<2?
                <p>Email too short</p>:
                    null
                }
            </div>
            <div style={inputDataDivStyle}>
                <label>Password: </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
                {password && password.length<2?
                <p>Password too short</p>:
                    null
                }
            </div>
            <div style={inputDataDivStyle}>
                <label>Confirm Password: </label>
                <input 
                type="text" value={confirmpassword} 
                onChange={ (e) => setConfirmPassword(e.target.value) } />
                {confirmpassword!=password || confirmpassword.length<2?
                <p>password doesn't match</p>:
                    null
                }
            </div>
            <div>
                <h1>Your form Data</h1>
            </div>


            


            <div style={ formDataDivStyle }>
                <h1>First name: {firstname}</h1>
                <h1>Last name: {lastname}</h1>
                <h1>Email: {email}</h1>
                <h1>Password: {password}</h1>
                <h1>Confirm Password: {confirmpassword}</h1>
            </div>
        </form>
    );
};

export default Register;


{/*

*/}

{/**const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  

    const inputDataDivStyle = {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        border: "1px solid darkgrey",
        padding: "0px 10px",
        margin: "5px",
    }

    const formDataDivStyle = {
        textAlign: "left", 
        width: "450px", 
        margin: "auto",
    }

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstname, lastname,email, password, confirmpassword };
        console.log("Welcome", newUser);
    	setFirstname("");
        setLastname("");
    	setEmail("");
    	setPassword("");
        setConfirmPassword("");
    };
    
    return(
        <form style={{ marginTop: "20px" }} onSubmit={ createUser }>
            <div style={inputDataDivStyle}>
                <label>First Name: </label> 
                <input 
                type="text" 
                value={firstname} 
                onChange={ (e) => setFirstname(e.target.value) } 
                />
            </div>
            <div style={inputDataDivStyle}>
                <label>Last Name: </label> 
                <input 
                type="text" 
                value={lastname} 
                onChange={ (e) => setLastname(e.target.value) } 
                />
            </div>
            <div style={inputDataDivStyle}>
                <label>Email Address: </label> 
                <input 
                type="text" value={email} 
                onChange={ (e) => setEmail(e.target.value) } 
                />
            </div>
            <div style={inputDataDivStyle}>
                <label>Password: </label>
                <input 
                type="text" value={password} 
                onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div style={inputDataDivStyle}>
                <label>Confirm Password: </label>
                


                <input 
                type="text" value={confirmpassword} 
                onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <div>
                <h1>Your form Data</h1>
            </div>


            


            <div style={ formDataDivStyle }>
                <h1>First name: {firstname}</h1>
                <h1>Last name: {lastname}</h1>
                <h1>Email: {email}</h1>
                <h1>Password: {password}</h1>
                <h1>Confirm Password: {confirmpassword}</h1>
            </div>
        </form>
    );
}; */}