import './cardLanguages.css'

const Card=function(props){
    return(
        <div className="card">
            <h4>{props.titele}</h4>
            <img src={props.pathImg} alt="" />
        </div>
    )
}
export default Card