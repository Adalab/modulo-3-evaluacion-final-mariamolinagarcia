import '../styles/character-list.scss';
import CharacterCard from './CharacterCard';


const CharacterList = (props) =>{

    const RenderCharacterList = 
        props.data.length !==0 ?
        props.data.map((characterData)=>{

            return(
            <li key={characterData.id} className='characterList__item'>
            
                <CharacterCard characterData={characterData} />
            </li>)  
        }) : <p className={`characterList__message ${props.message}`}>No hay ningún personaje que coincida con la palabra "{props.inputSearch}"</p>;
            
            
       
        
       
    

    return (
        <ul className="characterList">

            {RenderCharacterList}

        </ul>

    );
}

export default CharacterList;