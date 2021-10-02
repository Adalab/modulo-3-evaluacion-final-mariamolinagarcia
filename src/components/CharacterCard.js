
import '../styles/characterCard.scss';
import {Link} from 'react-router-dom';

const CharacterCard = (props) =>{


    return (
        <>
        <img className='characterList__item--image' src={props.characterData.image} alt={props.characterData.name} />
        <div className='characterList__item--info'>
        <h2>{props.characterData.name}</h2>
        <p>{props.characterData.species}</p>

                </div>
        </>
    );
}

export default CharacterCard;