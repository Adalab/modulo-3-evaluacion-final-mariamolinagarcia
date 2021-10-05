
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
  const [order, setOrder] = useState ('default');
  const [data2 , setData2]=useState([]);
  
  useEffect(() => {
      getCharactersFromApi()
        .then( (data) => {
          setData(data);
          setData2 (data.slice());
      });
    } , []);
    
        
  const routerData= useRouteMatch('/character/:id');

  const characterId = routerData !== null ? routerData.params.id : '';


  const selectedCharacter = data.find((char)=>{
    return (parseInt(char.id )===parseInt(characterId));
  });

  
  const handleSearchSpecies =(value)=>{
    return setSearchSpecies(value);
  }
  

  const handleSearch = (value) =>{
    return setInputSearch(value);

  }
  
  const handleOrder =(value)=>{
    return setOrder(value);
  }
 
  

  const filteredData = data
    .sort((a,b) =>{
          
          
          if(order === 'byname'){
            let textA = a.name;
            let textB = b.name;
            return (textA<textB) ? -1 : (textA>textB)? 1 :0; 
        
        }else if(order === 'default'){
          
          return  data2;
        }
      })

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
    console.log(data);
    console.log(data2);
    
    
  
  
   



  return (
    <div className="page">
    
    <Header />
    <main>
      <Switch>
    
      <Route exact path='/'>
        <section>
          <Filter handleSearch={handleSearch} value={inputSearch} handleSearchSpecies={handleSearchSpecies} searchSpecies={searchSpecies} handleOrder={handleOrder} 
          order={order}/>
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
