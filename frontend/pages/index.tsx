import React from 'react';
// import logo from './path-to-your-logo.svg'; // Adjust the path to your logo.svg

function HomePage() {
  const handleHexagonClick = (label: string) => {
    alert(`Clicked on ${label}`);
  };

  const hexagonSVG = (label: string, callback: any) => (
    <svg width="var(--edge-length)" height="calc(1.732 * var(--edge-length))" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <polygon points="200,0 400,100 400,300 200,400 0,300 0,100" stroke="#800020" fill="none" stroke-width="10"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">{label}</text>
    </svg>
  );

  return (
    <div className="container">
      {/* <div className="hexagon" onClick={() => handleHexagonClick('About')}>
        <svg width="200" height="230" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <polygon points="200,0 400,100 400,300 200,400 0,300 0,100" stroke="#800020" fill="none" stroke-width="10"/>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">About</text>
        </svg>
      </div> */}
      <div className="hexagon">{hexagonSVG('About', () => handleHexagonClick('About'))}</div>
      {/* ... Repeat for other hexagons ... */}
      <div className="hexagon">
        {/* <img src={logo} alt="Logo" width="200" height="230" onClick={() => handleHexagonClick('Logo')} /> */}
        Hallo
      </div>
    </div>
  );
}

export default HomePage;