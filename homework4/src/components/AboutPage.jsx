import {Link } from 'react-router-dom';
import './style.css'

function AboutPage() {
    return (
        <>
        <header className='header'>
            <h1 className='header__title'>О нас</h1>
        </header>
        <div className='container'>
            <Link className='link' to='/'>Вернуться на главную страницу</Link>
        </div>
        </>
    );
}

export default AboutPage;