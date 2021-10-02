

import '../styles/characterDetail.scss';

const CharacterDetail = (props) =>{


    return (
        <section>
            <div>
                <img src={props.user.image} alt={props.user.name} />
             </div>
            <div>
                <h2>{props.user.name}</h2>
                <ul>
                    <li><h3>Status:</h3>{props.user.status}</li>
                    <li><h3>Species</h3>{props.user.species}</li>
                    <li><h3>Origin:</h3>{props.user.origin}</li>
                    <li><h3>Episodes:</h3>{props.user.episodes}</li>
                </ul>
            </div>

        </section>

    );
}

export default CharacterDetail;