import '../styles/character-list.scss';

const CharacterList = (props) =>{

    const RenderCharacterList = 
        props.data.map((characterData)=>{
            return(
            <li key={characterData.id} className='characterList__item'>
                <img className='characterList__item--image' src={characterData.image} alt={characterData.name} />
                <div className='characterList__item--info'>
                    <h2>{characterData.name}</h2>
                    <p>{characterData.species}</p>

                </div>
            </li>)
        })
            
            
        
    

    return (
        <ul className="characterList">

            {RenderCharacterList}

        </ul>

    );
}

export default CharacterList;