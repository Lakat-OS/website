import '../styles/global.css'; // Assuming you have global styles in a styles directory

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header>
        {/* You can put a navigation bar here */}
      </header>
      
      {/* This renders the current page */}
      <Component {...pageProps} />
      
      <footer>
        {/* You can put a footer here */}
      </footer>
    </div>
  );
}

export default MyApp;
// import React from 'react';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function MyApp({  }) {
//   return (
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }

// export default MyApp;
