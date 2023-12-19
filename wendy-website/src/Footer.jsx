import React, { useEffect } from 'react';
import "./Footer.css";

function Footer({ setPage }) {
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

    function go(event, page) {
        event.preventDefault();
        window.history.pushState(null, '', page);
        setPage(page);
    }

    const footerItems = ["Privacy", "Contact"];

    return (
        <footer className='footer'>
            <ul className='footer__list'>
                {footerItems.map(item => (
                    <li key={item} className='footer__item'>
                        <a href="" onClick={(e) => go(e, `/${item}`)} className="footer__link">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
}

export default Footer;
