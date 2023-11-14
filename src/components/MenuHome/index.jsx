import "./menuHome.scss"
import LogoRestaurateur from "../../assets/NYKOS_VECTEUR_PNG 1.png"
import plusloin1 from "../../assets/Mask group (1).png"
import plusloin2 from "../../assets/Mask group.png"
import plusloin3 from "../../assets/shawnanggg-nmpW_WwwVSc-unsplash 1.png"
import plusloin4 from "../../assets/resturant.jpg"
import { Link } from "react-router-dom"

export default function MenuHome () {
    return (
        <div className="menuHome">
        <div className="menuHome_main">
            <div className="menuHome_header">
                <img src={LogoRestaurateur} alt="logo restaurateur" />
                <h2>Bienvenue</h2>
            </div>
            <div className="menuHome_encart">
                <Link className="menuHome_encart-link" >+ Créer un menu</Link>
                <Link className="menuHome_encart-link">+ Diffuser un menu</Link>
                <Link className="menuHome_encart-link">+ Imprimer un menu</Link>
            </div>
            <div className="plusLoin">
                <h3>Pour aller plus loin</h3>
                <div className="plusLoin_encart">
                    <Link className="plusLoin_link" >
                    <img src={plusloin1} alt="restaurant" />
                    <p>Faites réaliser vos supports par un graphiste pro</p>
                    </Link>
                    <Link className="plusLoin_link" >
                    <img src={plusloin2} alt="restaurant" />
                    <p>Découvrez nos conseils pour un menu réussi </p>
                    </Link>
                    <Link className="plusLoin_link">
                    <img src={plusloin3} alt="restaurant" />
                    <p>Comment poster son menu sur Instagram ?</p>
                    </Link>
                    <Link className="plusLoin_link">
                    <img src={plusloin4} alt="restaurant" />
                    <p>Comment poster son menu sur Instagram ?</p>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}