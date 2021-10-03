
import '../styles/characterCard.scss';
import {Link} from 'react-router-dom';


const CharacterCard = (props) =>{


    return (
      <Link to={`./character/${props.characterData.id}`}>  
        <img className='characterList__item--image' src={props.characterData.image} alt={props.characterData.name} />
        <div className='characterList__item--info'>
        <h2>{props.characterData.name}</h2>
        <p>{props.characterData.species}</p>

                </div>
        </Link>
    );
}

export default CharacterCard;