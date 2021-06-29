import { NavLink } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <ul className="navbar-nav">
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
            <div className="main">
                
                <p>
                    <strong>NoteApp</strong> - сервис для обмена заметками. Создайте заметку, отправте ссылку на заметку и Ваш друг сможет её просмотреть. После просмотра заметка будет удалена (или по истичению 15 минут с момента создания).
                </p>
                <p>
                    Как сделать заметку?
                </p>
                <ul>
                    <li>Нажмите "Создать заметку"</li>
                    <li>Введите текст в текстовом окне</li>
                    <li>Нажмите "Создать"</li>
                    <li>Скопируйте сгенерированный адрес и отправте другу</li>
                </ul>
                <p>
                    Как прочитать заметку?
                </p>
                <ul>
                    <li>Перейдите по присланному URL или</li>
                    <li>С присланной ссылки скопируйте последние 24 символа</li>
                    <li>Нажмите "Просмотреть заметку"</li>
                    <li>Вставте в текстовое окно</li>
                    <li>Нажмите "Искать заметку"</li>
                </ul>
            </div>
        </div>
    );
}

export default Main;