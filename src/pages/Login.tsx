import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        const content = await response.json();

        setSuccess(true);

        console.log(content);
    };

    if (success) {
        navigate("/home");
    }

    return (
        <div className="auth-form-page">
            <main className="form-signin">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input
                            type="username"
                            className="form-control"
                            placeholder="username"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-primary w-100 py-2" type="submit">
                        Sign in
                    </button>
                </form>
            </main>
        </div>
    );
};
