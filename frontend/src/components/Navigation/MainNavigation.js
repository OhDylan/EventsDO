import React from "react";
import {NavLink} from "react-router-dom";
import AuthContext from "../../context/auth-context";
//using webpack, inject css code into js code
import "./MainNavigation.css";

const mainNavigation = props => (
    <AuthContext.Consumer>
        {(context) => ( 
            <header className="main-navigation">
            <div className="main-navigation_logo">
                <h1>
                    EventsDO
                </h1>
            </div>
            <nav className="main-navigation_items">
                <ul>
                    {!context.token && 
                    <li><NavLink to="/auth">Authentication</NavLink></li>
                    }
                    <li><NavLink to="/events">Events</NavLink></li>
                    {context.token && 
                    <React.Fragment>
                    <li><NavLink to="/bookings">Bookings</NavLink></li>
                    <li><button onClick={context.logout}>Logout</button></li>
                    </React.Fragment>
                    }
                </ul>
            </nav>
            </header>
             )
            }
    </AuthContext.Consumer>
   
);

export default mainNavigation;