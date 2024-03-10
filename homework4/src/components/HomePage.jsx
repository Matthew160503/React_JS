import { Link } from "react-router-dom";
import './style.css';

function HomePage() {
    return (
        <>
        <header className="header">
            <h1 className="header__title">Главная страница</h1>
        </header>
        <div className="container">
        <Link className='link' to='/about'>Перейти на страницу "О нас"</Link>
        </div>
        </>
    );
}

export default HomePage;