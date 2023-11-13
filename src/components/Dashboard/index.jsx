import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import logo from "../../assets/logo-menu-maker.png"
import { Link } from "react-router-dom"
import "./dashboard.scss"

export default function Dashboard () {

    const { logout } = useAuth0();

    return ( 
        <div className="dashboard">
    <img src={logo} alt="logo menumaker" />
    <div className="dashboard-nav">
        
            <Link className="dashboard-nav_link" to="/MenuHome">Dashboard</Link>
            <Link className="dashboard-nav_link">Mes menus</Link>
            <Link className="dashboard-nav_link">Mon restaurant</Link>
            <Link className="dashboard-nav_link">Mon compte</Link>
            <button className="dashboard-nav_link" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
             Se deconnecter
    </button>
    </div>
</div>
    )
}