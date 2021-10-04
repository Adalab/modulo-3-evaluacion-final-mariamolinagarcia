
import '../styles/app.scss';

import { useState, useEffect } from 'react';
import {  Route, Switch, useRouteMatch } from 'react-router-dom';

import getCharactersFromApi from './services/Api';
import Header from './Header';
import CharacterList from './CharacterList';
import Filter from './Filter';
import CharacterDetail from './CharacterDetail';
import ReturnButton from './Return';

function App() {
  
  const [data , setData] = useState([]);
  const [inputSearch , setInputSearch] = useState ('');

  

useEffect(() => {
    getCharactersFromApi()
      .then( (data) => {
        setData(data)
    });
  } , []);
  

const routerData= useRouteMatch('/character/:id');
console.log(routerData);
const characterId = routerData !== null ? routerData.params.id : '';
console.log(characterId);

const selectedCharacter = data.find((char)=>{
  return (parseInt(char.id )===parseInt(characterId));
})
console.log(selectedCharacter);
  
  
  
  

  

  const handleSearch = (value) =>{
    return setInputSearch(value);

  }
 
    
  const filteredData = data
    .filter((character)=>{
    
        return character.name.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase()) ;
      
    })
   



  return (
    <div className="page">
    
    <Header />
    <Switch>
    <main>
      <Route exact path='/'>
        <section>
          <Filter handleSearch={handleSearch} value={inputSearch} />
          <CharacterList data={filteredData}  inputSearch= {inputSearch} />
        </section>
       </Route>
       <Route path='/character/:id'>
          
          <CharacterDetail selectedCharacter={selectedCharacter} />
          
       </Route>

       <Route>
        <ReturnButton /> 
        <h2>El personaje que buscas no existe.</h2>
       </Route>
    
    </main>

    </Switch>

  </div>
  );
}

export default App;
