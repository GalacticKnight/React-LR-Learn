import React, { useState } from  'react';

// We will use an onChange synthetic event to capture into state 
//    each character as it is typed

const Login= (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  

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

    const validateUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = {email, password };
        console.log("Welcome", newUser);
    	setEmail("");
    	setPassword("");
    };
    
    return(
        <form style={{ marginTop: "20px" }} onSubmit={ validateUser }>
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
            
            <div>
                <h1>Your form Data</h1>
            </div>

            <div style={ formDataDivStyle }>
                <h1>Email: {email}</h1>
                <h1>Password: {password}</h1>
            </div>
        </form>
    );
};

export default Login;