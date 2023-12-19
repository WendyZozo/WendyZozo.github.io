import './Header.css';

function Header({ setPage }) {

    function goHome(event) {
        event.preventDefault();
        setPage("Home");
    }

    return (
        <header className="header">
            <a href="/" className="header__logo-link" onClick={(e) => goHome(e)}>
                <img src="/images/logo.jpg" alt="Wendy Logo" className="header__logo" />
            </a>
            <h1 className="header__title">Discover Wendy</h1>
        </header>
    );
}

export default Header;
