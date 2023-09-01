import React, { useState } from  'react';

// We will use an onChange synthetic event to capture into state 
//    each character as it is typed

const MessageForm= ({loggedin}) => {
    const [input, setInput] = useState("");
    const [receivers, setReceivers] = useState([
        {"_id":123, "email":"test@test.com","firstname":"Rebecca"},
        {"_id":124, "email":"test2@test.com","firstname":"Roy"},
        {"_id":125, "email":"test3@test.com","firstname":"Artic"}
    ]); 
    const [receiver,setReceiver]= useState(0)

    const handleSubmit = (e) =>{
         // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
         // shorthand ES6 syntax for building an object - see notes above
        const message = {"sender": loggedin, input, receiver};
        console.log(message);
         
        setInput("");
        setReceiver(0);
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Message: </label> 
                    <input type="text" value={input} onChange={ (e) => setInput(e.target.value) } />
                    {input && input.length<3?
                    <p>First name too short</p>:
                        null
                    }
                </div>
                <div>
                    <select onChange={ (e) => setReceiver(e.target.value) }>
                        {receivers.map((person) => ( 
                            <option value={person._id}>
                                {person.firstname}
                            </option>
                        ))}
                    </select>
                </div>
                <input type="submit" value="send"/>
            </form>
            <p>{input},{receiver}</p>
        </div>
    )
};

export default MessageForm;