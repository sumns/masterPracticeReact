import React, {useState} from 'react';
import './App.css';

function App() {
  const [userRegister, setUserRegister] = useState(
    {
      username : "",
      email : "" ,
      phone : "" ,
      password : ""
    }
  );

    const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // console.log(name, value)
    
    setUserRegister({...userRegister, [name] : value})

  }


  const handleSubmit = (e) => {  
    e.preventDefault();

    const newRecord = {...userRegister, id:new Date().getTime().toString()}
    setRecords([...records, newRecord])
    console.log(records)
    setUserRegister({username:"", email:"", phone:"", password:""})
  }
  return (
    <div className="App">
      {/* <h1>Multiple Inputes</h1> */}
      <form onSubmit={handleSubmit}>
        <div>
          <label >Fullname : </label>
          <input type="text" 
          value={userRegister.username}
          onChange = {handleInput}
          name='username' id="username" />
        </div>
        <div>
          <label >email : </label>
          <input type="text" 
          value={userRegister.email}
          onChange = {handleInput}
          name='email' id="email" />
        </div>
        <div>
          <label >Phone : </label>
          <input type="text" 
          value={userRegister.phone}
          onChange = {handleInput}
          name='phone' id="phone" />
        </div>
        <div>
          <label >password : </label>
          <input type="password" 
          value={userRegister.password}
          onChange = {handleInput}
          name='password' id="password" />
        </div>

        <button type='submit'>Registration</button>
      </form>
      <div>
        {
          records.map((currentEle) => {
            return (
              <div>
                <p>{currentEle.username}</p>
                <p>{currentEle.email}</p>
                <p>{currentEle.phone}</p>
                <p>{currentEle.password}</p>
              </div>

            )
          })
        }
      </div>
    </div>
    
  );
}

export default App;
