import style from './Header.module.scss'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><button>Главная</button></li>
                    <li><button>Напоминания</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header