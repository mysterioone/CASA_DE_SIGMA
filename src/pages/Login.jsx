import React from "react";
import { Link } from "react-router-dom";
const Login = () =>{
    return (
        <div>
            <li>
                    <Link to="/home">user page</Link>
            </li>
            <h1>Casa de Sigma</h1>
            <p>Email</p>
            <input type="text" />
            <p>No. Telephone</p>
            <input type="text" />
        </div>

    );
}
export default Login;
