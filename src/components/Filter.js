import '../styles/filter.scss';
const Filter = (props) =>{

    const handleInput =(ev)=>{
        ev.preventDefault();
        const value = ev.currentTarget.value;
        return props.handleSearch(value);
        
    }

    return (
        <>
        <form className="form">
            <label name='form__label'>
                <input className='form__input' type='text' value={props.inputSearch} placeholder='Busca tu personaje favorito...' onChange={handleInput}/>
            </label>
        </form>
        
</>
    );
}

export default Filter;