import '../styles/header.scss';
import logo from '../images/logo.png';

const Header = () =>{


    return (
        <header className="Header">
            <img className ="Header__logo" src={logo} alt="logo" title="Rick and Morty" />
        </header>


    );
}

export default Header;