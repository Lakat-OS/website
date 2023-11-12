import { AppProps } from 'next/app';
import React from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import '../styles/global.scss'; // Assuming you have a global CSS file
// import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition } from 'react-transition-group';
import Image from 'next/image';
import LakatLogo from '../assets/img/Lakatdummy.png';

function MyApp({ Component, pageProps }: AppProps) {
  const [showNav, setShowNav] = useState(false);
  const [isSublistOpen, setIsSublistOpen] = useState(false);
  const router = useRouter();

  function handleShowNavBar() {
    setShowNav(!showNav);
  }

  const toggleSublist = () => {
    setIsSublistOpen(!isSublistOpen);
  };

  // if showNav changes setIsSublistOpen to false
  React.useEffect(() => {
    setIsSublistOpen(false);
  }, [showNav]);

  const navigateAndCloseNav = (path: string) => {
    router.push(path);
    window.location.href = path;
    setShowNav(false);
  };
  



  return (
    <div className="container-fluid h-100 p-0">
      <div className="position-fixed top-0 start-0 mt-3 ms-3">
        {!showNav && (
          <button className="btn btn-primary" onClick={handleShowNavBar}>
            ☰
          </button>
        )}
      </div>

      <CSSTransition in={showNav} timeout={300} classNames="nav" unmountOnExit>
        <div className="position-fixed start-0 top-0 vh-100 bg-light opacity-80 blur nav-bar">
          <Image
            src={LakatLogo}
            alt="Lakat Icon"
            width={60}
            height={20}
            className="ms-3 mt-3"
          />
          <button
            className="btn btn-close btn-sm position-absolute top-0 end-0 m-2"
            onClick={() => setShowNav(false)}
          ></button>
          <ul className="list-group list-group-flush mt-5">
            <li className="list-group-item" onClick={() => navigateAndCloseNav('/')}>
              Home
            </li>
            <li className="list-group-item">
              About
              <button onClick={toggleSublist} className="sublist-toggle-btn">
                {isSublistOpen ? "▲":"▼"}
              </button>
              {isSublistOpen && (
                <ul className="sublist">
                  <li className="sublist-item" onClick={() => navigateAndCloseNav('/about/buckets')}>Data Buckets</li>
                  <li className="sublist-item" onClick={() => navigateAndCloseNav('/about/branches')}>Branches</li>
                  <li className="sublist-item" onClick={() => navigateAndCloseNav('/about/submits')}>Submits</li>
                  <li className="sublist-item" onClick={() => navigateAndCloseNav('/about/data-trie')}>Data Trie</li>
                  <li className="sublist-item" onClick={() => navigateAndCloseNav('/about/user')}>Contributors</li>
                  <li className="sublist-item" onClick={() => navigateAndCloseNav('/about/lignification')}>Lignification</li>
                  <li className="sublist-item" onClick={() => navigateAndCloseNav('/about/proof-of-review')}>Proof of Review</li>
                  <li className="sublist-item" onClick={() => navigateAndCloseNav('/about/imre-lakatos')}>Imre Lakatos</li>
                  <li className="sublist-item" onClick={() => navigateAndCloseNav('/about/integration')}>Integration</li>
                </ul>
              )}
            </li>
            <li className="list-group-item" onClick={() => navigateAndCloseNav('/get-started')}>
              Get Started
            </li>
            <li className="list-group-item" onClick={() => navigateAndCloseNav('/community')}>
              Community
            </li>
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
