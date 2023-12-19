import React, { useEffect } from 'react';
import './Header.css';

function Header({ setPage }) {
    useEffect(() => {
        setPage(document.location.pathname);

        function onPopState() {
            setPage(document.location.pathname);
        }

        window.addEventListener('popstate', onPopState);
        return () => {
            window.removeEventListener('popstate', onPopState);
        };
    }, [setPage]);

    function goHome(event) {
        event.preventDefault();
        const homePath = '/Home';
        window.history.pushState(null, '', homePath);
        setPage(homePath);
    }

    return (
        <header className="header">
            <a href="/Home" className="header__logo-link" onClick={(e) => goHome(e)}>
                <img src="/images/logo.jpg" alt="Wendy Logo" className="header__logo" />
            </a>
            <h1 className="header__title">Discover Wendy</h1>
        </header>
    );
}

export default Header;
