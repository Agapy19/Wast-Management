import './Equipe.css'
function Equipe(props) {
    return (
        <div className="equipe">
            <img src={props.profile} alt="" />
            <h2>{props.nom} </h2>
           <span>{props.description} </span>
        </div>
    )
}

export default Equipe;