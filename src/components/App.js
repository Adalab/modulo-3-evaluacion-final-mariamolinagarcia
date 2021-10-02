
import '../styles/app.scss';

import { useState, useEffect } from 'react';
import {  Route, Switch, useRouteMatch, Link } from 'react-router-dom';

import getCharactersFromApi from './services/Api';
import Header from './Header';
import CharacterList from './CharacterList';
import Filter from './Filter';
import CharacterDetail from './CharacterDetail';

function App() {
  
  const [data , setData] = useState([]);
  const [inputSearch , setInputSearch] = useState ('');
  

useEffect(() => {
    getCharactersFromApi()
      .then( (data) => {
        setData(data)
    });
  } , []);
  

  


  const handleSearch = (value) =>{
    return setInputSearch(value);

  }
 
    
  const filteredData = data
    .filter((character)=>{
    
        return character.name.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase());
      
    })
   



  return (
    <div className="page">
    
    <Header />
    <Switch>
    <main>
      <Route exact path='/'>
      <section>
        <Filter handleSearch={handleSearch} value={inputSearch} />
        <CharacterList data={filteredData}   />
       </section>
       </Route>
       <Route path='/character/:id'>
          <section>
          <CharacterDetail  />
          </section>

       </Route>
    </main>

    </Switch>

  </div>
  );
}

export default App;
