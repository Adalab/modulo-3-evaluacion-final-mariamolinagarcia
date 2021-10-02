import '../styles/character-list.scss';
import CharacterCard from './CharacterCard';

const CharacterList = (props) =>{

    const RenderCharacterList = 
        props.data.map((characterData)=>{
            return(
            <li key={characterData.id} className='characterList__item'>

                <CharacterCard characterData={characterData}  />
            </li>)
        })
            
            
        
    

    return (
        <ul className="characterList">

            {RenderCharacterList}

        </ul>

    );
}

export default CharacterList;