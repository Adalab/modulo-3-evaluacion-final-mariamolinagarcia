import '../styles/filter.scss';
const Filter = () =>{

    return (
        <form className="form">
            <label name='form__label'>
                <input className='form__input' type='text' value='' placeholder='Busca tu personaje favorito...' />
            </label>
        </form>

    );
}

export default Filter;