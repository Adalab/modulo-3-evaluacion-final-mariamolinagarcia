

import '../styles/characterDetail.scss';

const CharacterDetail = (props) =>{


    return (
        
        <section className="characterDetail">
            
            <div className="characterDetail__image">
            
                <img src={props.selectedCharacter.image} alt={props.selectedCharacter.name} />
             </div>
            <div className="characterDetail__info">
                <h2>{props.selectedCharacter.name}</h2>
                <ul className="characterDetail__info--list">
                    <li><h3>Status:</h3><p>{props.selectedCharacter.status}</p></li>
                    <li><h3>Species: </h3><p>{props.selectedCharacter.species}</p></li>
                    <li><h3>Origin: </h3><p>{props.selectedCharacter.origin}</p></li>
                    <li><h3>Episodes: </h3><p>{props.selectedCharacter.episodes}</p></li>
                </ul>
            </div>


        </section>
       
    );
}

export default CharacterDetail;