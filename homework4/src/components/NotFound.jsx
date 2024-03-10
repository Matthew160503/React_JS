import { Link } from 'react-router-dom';
import './style.css';

function NotFound() {
    return (
        <>
        <header className="header">
        <h1 className='header__title'>Страница не найдена!</h1></header>
        <div className='container'>
            <Link className='link' to='/'>Перейти на главную страницу</Link>
        </div>
        </>
    );
}

export default NotFound;