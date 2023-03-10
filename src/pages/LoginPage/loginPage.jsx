import React, { useState, useContext } from "react";
import "./styles.css";
import { AuthContext } from "../../contexts/auth";

export const LoginPage = () =>{

    const {authenticated, login} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlesubmit = (e) =>{
        e.preventDefault();
        console.log("submit", { email, password });
        login(email, password); //integração com o contexto e também API
    };

    return(
        <div id="login">
            <h1 className="title">Login do Sistema</h1>
            <p>{String(authenticated)}</p>
            <form className="form" onSubmit={handlesubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
}