
import { Link } from "react-router-dom";
import logoMenu from '../../assets/logo-menu-maker.png'
import './header.scss'

function Header () {
    return (
        <div className="header">
            <img className="header_logo" src={logoMenu} alt="Logo menu maker" />
            <nav className="header_nav">
                <Link className="header_link" to="/">Accueil</Link>
                <Link className="header_link" > Tarifs</Link>
                <Link className="header_link" > Se connecter</Link>
            </nav>
        </div>
    )
}

export default Header 