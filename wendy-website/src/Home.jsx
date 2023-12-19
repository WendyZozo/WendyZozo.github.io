import { useEffect, useState } from 'react';
import Carousel from './Carousel';

import './Home.css';

function Home({ setPage }) {
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

    return (
        <>
            <div className="intro">
                <div className='intro__img-container'>
                    <img src="/images/wendy_photo.JPG" alt="Jiamin (Wendy) Chen photo" className="intro__image" />
                </div>
                <div className="intro__content">
                    <h2 className="intro__heading">Jiamin (Wendy) Chen</h2>
                    <p className="intro__text">Student @Northeastern University</p>
                    <p className="intro__text">ex Technical Product Manager @Xiaomi Inc.</p>
                    <button className="intro__button-green" type="button" aria-label="See Wendy's resume" onClick={(e) => go(e, '/Experiences')}>
                        SEE RESUME
                    </button>
                    <button className="intro__button-pink" type="button" aria-label="Contact Wendy" onClick={(e) => go(e, '/Contact')}>
                        CONTACT ME
                    </button>
                </div>
            </div>

            <div className="panels">
                <div className="panel-flip">
                    <h2 className="panel__heading">Work</h2>
                    <div className='panel__img-container--left'>
                        <img src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Work stationery" className="panel__image-left" />
                    </div>
                    <div className="panel__content">
                        <p className="panel__text">fNIRS Data Machine Learning and Brain-Computer Interfaces Research Assistant at Northeastern University</p>
                        <p className="panel__text">Technical Product Manager at Xiaomi Inc. Internet Innovation Business Department </p>
                        <p className="panel__text">Technical Product Manager at Publicis Groupe, Sapient</p>
                        <button className="panel__button-green" type="button" aria-label="Learn more about Wendy's work experience"
                            onClick={(e) => go(e, '/Experiences')}>LEARN MORE</button>
                    </div>

                </div>

                <div className="panel">
                    <h2 className="panel__heading">Education</h2>
                    <div className='panel__img-container--right'>
                        <img src="https://images.unsplash.com/photo-1636231945376-3d40fdcbc462?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="A graduation cap" className="panel__image-right" />
                    </div>
                    <div className="panel__content">
                        <p className="panel__text">Northeastern University, Master of Science in Information Systems</p>
                        <p className="panel__text">University of Queensland, Master of Commerce in Applied Finance & Professional Accounting (Double majors)</p>
                        <p className="panel__text">Beijing Normal University, Bachelor of Management in Business Administration</p>
                        <button className="panel__button-pink" type="button" aria-label="Learn more about Wendy's education background"
                            onClick={(e) => go(e, '/Experiences')}>LEARN MORE</button>
                    </div>
                </div>
            </div>
            <Carousel />
        </>
    );
}

export default Home;
