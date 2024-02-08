import React,{ useState } from 'react'
import './LoginSignup.css'
import '@fortawesome/fontawesome-free/css/all.css';


const LoginSignup = () => {
    const [action,setAction]=useState("Login")
    
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action=="Login"?<div></div>: <div className="input">
                <i class="fas fa-envelope"></i>
                    <input type="text" placeholder="Name"></input>
                </div>}
                <div className="input">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Email Id"></input>
                </div>
                <div className="input">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password" placeholder="password"></input>
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password  <span>Click Here</span></div>}
            <div className="submit-container">
                <div className={action=="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action=="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}


export default LoginSignup
