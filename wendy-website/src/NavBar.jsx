import { useState } from 'react';

import "./NavBar.css";

function NavBar({ setPage }) {

    function changePage(page) {
        window.history.pushState(null, '', page);
        setPage(page);
    }

    const menu = ["Home", "Experiences", "Projects", "Contact"];
    const [showMenu, setShowMenu] = useState(false)
    const showMenuClass = showMenu ? '' : 'nav__list--hidden';

    const list = menu.map(item => (
        <li key={item} className="nav__item">
            <a href="" onClick={(e) => {
                e.preventDefault();
                changePage(`/${item}`);
            }} className="nav__link">
                {item}
            </a>
        </li>
    ));

    return (
        <nav className="nav">
            <button
                className="nav__toggle"
                onClick={() => setShowMenu(!showMenu)}
            ></button>
            <ul className={`nav__list ${showMenuClass}`}>
                {list}
            </ul>
        </nav>
    )
}

export default NavBar;