

import '../styles/characterDetail.scss';
import ReturnButton from './Return';





const CharacterDetail = (props) =>{
    if(props.selectedCharacter === undefined){
        return (
        <div>
            <ReturnButton />
        <h2>El personaje que buscas no existe.</h2>
        </div>)
    }else{

    
    const dOa = () =>{
        if (props.selectedCharacter.status === 'Dead'){
            return (<img src="https://img.icons8.com/cotton/64/000000/thriller.png"/>)
        }
    }
    

    return (
        
        <section className="characterDetail">
            

            <div className="characterDetail__image">
            
                <img src={props.selectedCharacter.image} alt={props.selectedCharacter.name} />
             </div>
            <div className="characterDetail__info">
                <ReturnButton />
                <div className="characterDetail__icon">{dOa()}</div>
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
}

export default CharacterDetail;