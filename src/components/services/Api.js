
const getCharactersFromApi =()=>{
    return fetch ('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
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
                episodes: character.episode
            };
        }) 
    })

}

export default getCharactersFromApi;