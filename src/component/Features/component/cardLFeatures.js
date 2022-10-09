import './cardLFeatures.css'

const Card=function(props){
    return(
        <div className="card flex">
            <i className={props.icon}></i>
            <p>{props.description}</p>
        </div>
    )
}
export default Card