import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import MessageForm from './components/MessageForm';
import React, {useState} from "react";

function App() {
  const [loggedin,setLoggedin] = useState({"_id":123, "email":"test@test.com","firstname":"Rebecca"})
  return (
    <div className="App">
      <Register/>

      <Login/>

      <MessageForm loggedin = {loggedin._id}/>
    </div>
  );
}

export default App;
