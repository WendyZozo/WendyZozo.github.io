import { useEffect, useState } from 'react';

import Header from "./Header";
import NavBar from './NavBar';
import Home from './Home';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
import Privacy from './Privacy';
import Footer from "./Footer";

import './App.css';

function App() {
  // const [page, setPage] = useState('Home');
  const [page, setPage] = useState('/');

  useEffect(
    () => {
      setPage(document.location.pathname);

      function onPopState() {
        setPage(document.location.pathname);
      }

      window.addEventListener('popstate', onPopState);
      return () => {
        window.removeEventListener('popstate', onPopState);
      }
    },
  )
  const [username, setUsername] = useState('');

  function onSubmit(username) {
    setUsername(username);
  }

  return (
    <>
      <Header setPage={setPage} />
      <main className="main">
        <NavBar setPage={setPage} />
        {username && <p className="greeting__text"> Hello {username}!</p>}
        {(page === '/' || page === '/Home') && <Home setPage={setPage} />}
        {(page === '/Experiences') && <Experiences setPage={setPage} />}
        {(page === '/Projects') && <Projects setPage={setPage} />}
        {(page === '/Contact') && <Contact onSubmit={onSubmit} />}
        {(page === '/Privacy') && <Privacy />}
      </main>
      <Footer setPage={setPage} />
    </>
  );
}

export default App;
