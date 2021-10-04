import '../styles/filter.scss';
const Filter = (props) =>{

    const handleForm=(ev)=> ev.preventDefault();

    const handleInput =(ev)=>{
        const value = ev.currentTarget.value;
        return props.handleSearch(value);
        
    }
    const handleSelectSpecies = (ev)=>{
        const value= ev.currentTarget.value;
        return props.handleSearchSpecies(value);


    }

    return (
        <>
        <form className="form" onSubmit={handleForm}>
            <label name='form__label'>
                <input className='form__input' type='text' value={props.inputSearch} placeholder='Busca tu personaje favorito...' onChange={handleInput}/>
            </label>
            <label>
                
            <select className='form__select' name='species' id='species' value={props.searchSpecies} onChange={handleSelectSpecies}>
                
            <option value='all'>Todos</option>
            <option value='Alien'>Alien</option>
                <option value='Human'>Human</option>
            </select>
            </label>
        </form>
        
</>
    );
}

export default Filter;