import { Link } from 'react-router-dom';
import './landing.scss'

function Landing (props) {
    return (
        <div>
        <div className={`landing ${props.backgroundColor}`}>
            <div className="landing_text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <Link onClick={props.onClick} className={` ${props.buttonStyle}`}>{props.buttonText}</Link>
            </div>
            <div className= {`landing_img ${props.imagePosition } `}>
            <img className='image_menu' src={props.img} alt="" loading='lazy' />
            <img className='image_menu' src={props.img2} alt='' loading='lazy' />
            </div>
        </div>
        </div>
        
    )
}

export default Landing