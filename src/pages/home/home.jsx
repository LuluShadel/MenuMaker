

import Landing from "../../components/landing"
import CardLanding from "../../components/card-landing"
import photoMenu from '../../assets/landing_img.png'
import photoRestaurant1 from "../../assets/michelle-williams-yT69l1ubYhE-unsplash 1.png"
import photoRestaurant2 from "../../assets/nienke-broeksema-_hiPJ6Z0vao-unsplash 1.png"

import "./home.css"

function Home () {




  return (
    <div className="App">
      <Landing
      title="Réalisez et diffusez votre menu personnalisé"
      text="Grâce à Menu Maker, donnez à votre établissement sa propre identité. créez votre menu en ligne et partagez-le sur toutes les platerformes ! "
      buttonText='Se connecter'
      buttonStyle='button'

      img={photoMenu} />
      < Landing 
      title="Personnalisez votre menu"
      text="Ajoutez vos plats, vos boissons et organisez votre menu comme vous le souhaitez. Pour l'impression ou la diffusion en ligne, récupérer votre menu au format que vous souhaitez et diffusez-le auprès de votre clientèle !"
      buttonText="Je me lance"
      buttonStyle="button_empty"
      img2={photoRestaurant1}
      img={photoRestaurant2}
      backgroundColor="landing_second"
      imagePosition="img_second"
      />
      
      <div className="landing-third">
        <div className= "landing_text">
        <h1>Comment créer votre menu ?</h1>
        <p>Réalisez votre menu en seulement trois étapes</p>
        </div>
        <div className="cardLanding">
      <CardLanding 
      number={<i className='fa-solid fa-1'></i>}
      text="Listez l'ensemble de vos boissons, entrées, plats, desserts, accompagnements... à afficher sur votre menu."
      />
      <CardLanding 
      number={<i className='fa-solid fa-2'></i>}
      text="Choisissez le style ui correspond à votre restaurant (logo, couleurs, typos)."
      />
      <CardLanding 
      number={<i className='fa-solid fa-3'></i>}
      text="Enregistrez votre menu en PDF et diffusez-le sur vos plateformes de vente en ligne."
      />
      </div>
      </div>
      </div>
  );
}

export default Home;