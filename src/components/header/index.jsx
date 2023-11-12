
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import logoMenu from '../../assets/logo-menu-maker.png'
import './header.scss'


function Header () {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="header">
            <img className="header_logo" src={logoMenu} alt="Logo menu maker" />
            <nav className="header_nav">
                <Link className="header_link" to="/">Accueil</Link>
                <Link className="header_link" > Tarifs</Link>
                <button className="header_link" onClick={() => loginWithRedirect()}>Se connecter</button>
            </nav>
        </div>
    )
}

export default Header 