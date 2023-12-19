import "./Footer.css";

function Footer({ setPage }) {
    function go(event, page) {
        event.preventDefault();
        setPage(page);
    }

    const footerItems = ["Privacy Policy", "Contact Me"];
    
    return (
        <footer className='footer'>
            <ul className='footer__list'>
                {footerItems.map(item => (
                    <li key={item} className='footer__item'>
                        <a href="" onClick={(e) => go(e, item)} className="footer__link">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;