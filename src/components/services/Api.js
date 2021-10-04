
const getCharactersFromApi =()=>{
    return fetch ('https://rickandmortyapi.com/api/character')
    .then (response =>response.json())
    .then (data => {
        return data.results.map(character =>{
            return {
                id: character.id,
                name: character.name,
                status: character.status,
                species: character.species,
                gender: character.gender,
                image: character.image,
                episodes: character.episode.length,
                origin: character.origin.name
            };
        }) 
    })

}

export default getCharactersFromApi;