import Actions from './Actions'
function Hometestimony(props) {
    return (
        <div className="temoignage-client" style={props.color}>
            <img src={props.avatar} alt=""  className='avatar'/>
           
                <h2>{props.name}</h2>
                <Actions />
                <p>{props.paragraph} </p>
         
        </div>
    )

}

export default Hometestimony;