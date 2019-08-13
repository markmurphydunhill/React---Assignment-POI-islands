import React, { Component } from "react";
import { Link } from "react-router-dom";



class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark fixed-top  bg-dark ">
                <Link className="navbar-brand" to="/">
                    Islands of Ireland
                </Link>
                <ul className="navbar-nav d-flex flex-row">
                    <li className="p-2">
                        <Link className="text-white" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="p-2">
                        <Link className="text-white" to="/Login">
                            Login
                        </Link>
                    </li>
                    <li className="p-2">
                        <Link className="text-white" to="#">
                            Nav A
                        </Link>
                    </li>

                </ul>
            </nav>
        );
    }
}

export default Header;