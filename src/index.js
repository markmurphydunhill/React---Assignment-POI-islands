import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./App";

import Header from "./components/header/";
import LoginForm from "./components/login/loginForm";

//import PrivateRoute from "./components/authentication/privateRoute";

const Router = () =>
    <BrowserRouter>
        <div className="jumbotron">
            <Header />
            <div className="container-fluid">
                <Switch>

                    <Route exact path="/" component={App} />
                    <Route path = "/login" component ={LoginForm}/>
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </div>
    </BrowserRouter>

ReactDOM.render(<Router />, document.getElementById("root"));

/*//<PrivateRoute path="/posts/:post_id" component={CommentPage} />
                    //<Route path="/login" component={LoginForm} /> */