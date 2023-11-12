import React from 'react';
import Image from 'next/image';
import LakatLogo from '../assets/img/Lakatdummy.png';
import TwitterXLogo from '../assets/img/twitter-x-black.png';
import GithubLogo from '../assets/img/github-mark.png';
import TelegramLogo from '../assets/img/telegram-xxl.png';

// import logo from './path-to-your-logo.svg'; // Adjust the path to your logo.svg

function HomePage() {
  return (
    <div className="container text-center main-content">
      <div className="row justify-content-center" style={{ height: '10vh' }}>
        <div className="col">
          {/* Content for the first row (header) */}
          {/* Header Content */}
        </div>
      </div>

      <div className="row justify-content-center landing-content" style={{ height: '80vh' }}>
        <div className="col">
          {/* Content for the second row */}
          <div>
            <Image
              src={LakatLogo}
              alt="Lakat Icon"
              width={320}
              height={100}
              className="ms-3 mt-3 mb-3"
            />
            <h2>
              An open and permissionless architecture for continuous integration
              academic publishing
            </h2>
            <p
              className="mt-3"
              style={{ width: '60%', textAlign: 'justify', margin: '0 auto' }}
            >
              Lakat is a <b>base layer</b> for a <b>publishing</b> system that
              promotes <b>collaboration</b>, <b>pluralism</b>, and{' '}
              <b>permissionless</b> participation. Inspired by the philosophy of
              Imre Lakatos, Lakat is a <b>peer-to-peer</b>,{' '}
              <b>conflict-resolution</b> and <b>process-oriented</b> system that
              supports <b>continuous integration</b> across multiple{' '}
              <b>branches</b>. Lakat's architecture allows for the necessary
              flexibility to grow and to allow for the integration of existing{' '}
              <b>reputation systems</b> and <b>incentive structures</b> or
              facilitate the development of new ones.
            </p>
          </div>
          <div className="row mt-5" >
            <div className="button-container" style={{ width: '60%', textAlign: 'center', margin: '0 auto' }}>
              <a className="nav-link" href="/about">
                      <span>📚</span> Learn More
              </a>
              <span className="separator">|</span>
              <a className="nav-link" href="/get-started">
                      <span>🚀</span> Get Started
              </a>
              <span className="separator">|</span>
              <a className="nav-link" href="/community">
                      <span>👥</span> Join the Community
              </a>
              <span className="separator">|</span>
              <a className="nav-link" 
                  href="https://arxiv.org/pdf/2306.09298.pdf"
                  target="_blank"
                  rel="noopener noreferrer">
                      <span>📄</span> Whitepaper
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center" style={{ height: '10vh' }}>
        <div className="col">
          <a href="https://github.com/Lakat-OS" target="_blank" rel="noopener noreferrer">
            <Image
              src={GithubLogo}
              alt="Github Icon"
              width={23}
              height={23}
              className="ms-3 mt-3"
            />
          </a>
          <a href="https://twitter.com/__Lakat__" target="_blank" rel="noopener noreferrer">
            <Image
              src={TwitterXLogo}
              alt="X Icon"
              width={23}
              height={23}
              className="ms-3 mt-3"
            />
          </a>
          <a href="https://t.me/+BGvsUzF1ds80YmFk" target="_blank" rel="noopener noreferrer">
            <Image
              src={TelegramLogo}
              alt="Telegram Icon"
              width={23}
              height={23}
              className="ms-3 mt-3"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
