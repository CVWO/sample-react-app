import React from "react";
export const Login = () => {
    return (
        <div className="auth-form-container">
            <form className="login-form">
                <label htmlFor="email">email</label>
                <input type="email" placeholder="Email" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input type="password" placeholder="********" id="password" name="password" />
                <button className="button">Log In</button>
            </form>
        </div>
    );
};
