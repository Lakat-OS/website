import React from 'react';
import Image from 'next/image';
import LakatLogo from '../assets/img/Lakatdummy.png';
import TwitterXLogo from '../assets/img/twitter-x-black.png';
import GithubLogo from '../assets/img/github-mark.png';
// import logo from './path-to-your-logo.svg'; // Adjust the path to your logo.svg

function HomePage() {
 
  return (
    <div className="container text-center main-content">
      <div className="row justify-content-center" style={{ height: '20vh' }}>
        <div className="col">
          {/* Content for the first row (header) */}
          {/* Header Content */}
        </div>
      </div>

      <div className="row justify-content-center" style={{ height: '60vh' }}>
        <div className="col">
          {/* Content for the second row */}
          <div>
          <Image src={LakatLogo} alt="Lakat Icon" width={320} height={100} className="ms-3 mt-3 mb-3" />
          <h2>An open and permissionless architecture for continuous integration academic publishing</h2>
          
        </div>
        <div className="row mt-5">

          <div className="col-3">
            <button className="btn btn-primary btn-constant-width mx-2 my-2" style={{width:"100%"}}>Get Started</button>
          </div>
          <div className="col-3">
            <button className="btn btn-info btn-constant-width mx-2 my-2" style={{width:"100%"}}>Learn More</button>
          </div>
          <div className="col-3">
            <button className="btn btn-secondary btn-constant-width mx-2 my-2" style={{width:"100%"}}>Join the Community</button>
          </div>
          <div className="col-3">
            <button className="btn btn-danger btn-constant-width mx-2 my-2" style={{width:"100%"}}>Whitepaper</button>
          </div>
        </div>
      
      
        </div>
      </div>

      <div className="row justify-content-center" style={{ height: '20vh' }}>
        <div className="col">
          <a href="https://github.com/Lakat-OS"><Image src={GithubLogo} alt="Github Icon" width={23} height={23} className="ms-3 mt-3" /></a>
          <a href="https://twitter.com/__Lakat__"><Image src={TwitterXLogo} alt="Lakat Icon" width={23} height={23} className="ms-3 mt-3" /></a>
          <a href="your_telegram_link"></a>
        </div>
      </div>
    </div>
  
  );
}

export default HomePage;