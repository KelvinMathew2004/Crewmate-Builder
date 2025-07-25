import './Card.css'
import { Link } from 'react-router-dom'

const Card = (props) =>  {

  return (
      <div className="Card">
        <Link to={'edit/'+ props.id}>
           <h2 className="name">{props.name}</h2>
           <h3 className="speed">{props.speed}</h3>
           <p className="color">{props.color}</p>
           <Link to={'edit/'+ props.id}><button>Edit Crewmate</button></Link>
        </Link>
      </div>
  );
};

export default Card