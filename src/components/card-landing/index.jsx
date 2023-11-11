import "./card-landing.scss"


function CardLanding (props) {
return (
    
    <div className="card">
        <div className="point"></div>
        <div className="number">{props.number}</div>
        <p>{props.text}</p>
    </div>
    
)
}

export default CardLanding