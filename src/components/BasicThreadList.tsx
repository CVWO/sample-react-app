import "../App.css";
import { Login } from "./Login";

import React from "react";
import { Link } from "react-router-dom";

const BasicThreadList: React.FC = () => {
    return (
        <div style={{ width: "25vw", margin: "auto", textAlign: "center" }}>
            <h4>{"Welcome to ForumHub!"}</h4>
            <Login />
            <ul>
                <li>
                    <Link to="/thread/1">{"Inspirational Quotes"}</Link>
                    {" by Aiken"}
                </li>
            </ul>
        </div>
    );
};

export default BasicThreadList;
