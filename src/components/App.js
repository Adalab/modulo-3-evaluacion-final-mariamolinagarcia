
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
  const [searchSpecies , setSearchSpecies] = useState('all');
  

  useEffect(() => {
      getCharactersFromApi()
        .then( (data) => {
          setData(data)
      });
    } , []);
    

  const routerData= useRouteMatch('/character/:id');

  const characterId = routerData !== null ? routerData.params.id : '';


  const selectedCharacter = data.find((char)=>{
    return (parseInt(char.id )===parseInt(characterId));
  })

  
  data.sort((a,b) =>{
    let textA = a.name;
    let textB = b.name;
    return ((textA<textB) ? -1 : (textA>textB)? 1 :0); 
  });
    
  
  const handleSearchSpecies =(value)=>{
    return setSearchSpecies(value);
  }
  

  const handleSearch = (value) =>{
    return setInputSearch(value);

  }
 
    
  const filteredData = data
    .filter((character)=>{
    
        return character.name.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase()) ;
      
    })
    .filter((character)=>{
      if(searchSpecies=== 'all'){
        return data;
      }else{
        return character.species === searchSpecies;
      }
    })
   



  return (
    <div className="page">
    
    <Header />
    <main>
      <Switch>
    
      <Route exact path='/'>
        <section>
          <Filter handleSearch={handleSearch} value={inputSearch} handleSearchSpecies={handleSearchSpecies} searchSpecies={searchSpecies}/>
          <CharacterList data={filteredData}  inputSearch= {inputSearch} />
        </section>
       </Route>
       <Route path='/character/:id'>
          
          <CharacterDetail selectedCharacter={selectedCharacter} />
          
       </Route>

       <Route>
        <ReturnButton /> 
        <h2>Página no encontrada.</h2>
       </Route>
   
    </Switch>
    </main>

  </div>
  );
}

export default App;
