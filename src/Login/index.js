import { useState } from "react";
import React, { useRef } from 'react';
import { useNavigate} from 'react-router-dom';
import "../Login/index.scss"
import Logo from "../images/Union.png"
import LogoText from "../images/lendsqr.svg"
import Banner from "../images/banner.svg"

const LoginPage = () => {

    const navigate = useNavigate();

        
        const navigateToDashboard = () => {
            // 👇️ navigate to /contacts
            navigate('Dashboard');
          };
      
  

 


    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const handlePasswordChange =(e)=>{
        setPasswordInput(e.target.value);
    }
    const togglePassword =(e)=>{
        e.preventDefault();
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }



    return (
        <>
            <div className="login-page-parent">

                <div className="login-page-img">
                    <div className="logo">
                        <img src={Logo} />
                        <img src={LogoText} />
                    </div>

                    <div className="banner">
                        <img src={Banner} />
                    </div>

                </div>


                <div className="login-page-form">
                    <form>
                        <h1>Welcome!</h1>
                        <h5>Enter details to login</h5>

                        <input type="email" placeholder="Email" value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}/>

                        <div for="password" className="password-input">
                        <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} placeholder="Password" />
                        <button className="btn" onClick={togglePassword}>
                     { passwordType==="password"? <span>Show</span> : <span>Hide</span> }
                     </button>
                     </div>
                        <span>Forgot password?</span>
                        <input type="submit" value="Log In" onClick={navigateToDashboard}/>
                    </form>

                </div>

            </div>        
        </>
    )
}

export default LoginPage