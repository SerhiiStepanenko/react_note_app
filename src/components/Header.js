import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-brand">
                Note App
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/"
                        exact>
                        Главная
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/about">
                        Информация
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/create">
                        Создать заметку
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/note">
                        Просмотреть заметку
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Header;