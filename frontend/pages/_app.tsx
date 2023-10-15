import { AppProps } from 'next/app';
import React from 'react';
import { useState } from 'react';
import '../styles/global.scss'; // Assuming you have a global CSS file
// import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition } from 'react-transition-group';
import Image from 'next/image';
import LakatLogo from '../assets/img/Lakatdummy.png';

function MyApp({ Component, pageProps }: AppProps) {
  const [showNav, setShowNav] = useState(false);

  function handleShowNavBar() {
    setShowNav(!showNav);
  }

  return (
    <div className="container-fluid h-100 p-0 overflow-hidden">
      <div className="position-fixed top-0 start-0 mt-3 ms-3">
        {!showNav && 
        <button className="btn btn-primary" onClick={handleShowNavBar} >
        ☰
        </button>}
      </div>

      <CSSTransition
        in={showNav}
        timeout={300}
        classNames="nav"
        unmountOnExit
      >
        <div className="position-fixed start-0 top-0 vh-100 bg-light opacity-80 blur nav-bar">
          <Image src={LakatLogo} alt="Lakat Icon" width={60} height={20} className="ms-3 mt-3" />
          <button className="btn btn-close btn-sm position-absolute top-0 end-0 m-2" onClick={() => setShowNav(false)}></button>
          <ul className="list-group list-group-flush mt-5">
            <li className="list-group-item" onClick={() => setShowNav(false)}>Why</li>
            <li className="list-group-item" onClick={() => setShowNav(false)}>What</li>
            <li className="list-group-item" onClick={() => setShowNav(false)}>Who</li>
            <li className="list-group-item" onClick={() => setShowNav(false)}>When</li>
          </ul>
        </div>
      </CSSTransition>


      <div className="main-content">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
