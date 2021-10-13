import { useState } from 'react';
import './login.css'
export const Login = ({setAuth}) => {
    const [username, setUsername]= useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        const user ={username, email, password};
        const newUser =localStorage.setItem('user', JSON.stringify(user))
        console.log(newUser);
       
        // window.location.replace('/dashboard')
     
    }

    return (
      <div>
        <h1>Welcome to Book inventory managment store</h1>
        <p>Please Login to continue</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="formName">
            <label className="formLabel">User Name</label>
            <input
              className="formInput"
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="formEmail">
            <label className="formLabel">Email</label>
            <input
              className="formInput"
              type="email"
              placeholder="Example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formPassowrd">
            <label className="formLabel">Password</label>
            <input
              className="formInput"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="formBtn">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
        {/* <input
            type="text"
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
          /> */}
      </div>
    );
}
