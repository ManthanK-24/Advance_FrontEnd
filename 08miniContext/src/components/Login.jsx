import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
       // By default when we submit values goes after post request, so to avoid it we use preventDefault
        e.preventDefault() 
        setUser({username, password})
    }
  return (
    <div>
         <h2>Login</h2>
         <input 
         value={username}
         type='text'
         onChange={(e)=>setUsername(e.target.value)} 
         placeholder='username'/>
         {" "}
         <input 
         value={password}
         type='text'
         onChange={(e)=>setPassword(e.target.value)} 
         placeholder='password'/>
         <button onClick={handleSubmit}>Submit</button> 
    </div>
  )
}

export default Login
