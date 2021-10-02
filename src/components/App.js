
import '../styles/app.scss';

import { useState, useEffect } from 'react';
import {  Route, Switch } from 'react-router-dom';
import getCharactersFromApi from './services/Api';
import Header from './Header';

import CharacterList from './CharacterList';
import Filter from './Filter';

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
  console.log(inputSearch);
  
  const filteredData = data
    .filter((character)=>{
    
        return character.name.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase());
      
    })
  



  return (
    <div className="page">
    
    <Header />

    <main>
      <section>
        <Filter handleSearch={handleSearch} value={inputSearch} />
        <CharacterList data={filteredData} />
       </section>
    </main>

    

  </div>
  );
}

export default App;
