import React from 'react';
import ReactDOM from 'react-dom/client';
// importing packages from node modules folder
import './index.css';
import reportWebVitals from './reportWebVitals';
// if not using vitals then can delete the import and the call to the function


// import App from './Notes/03_013/App';
// import App from './Notes/04_017/App';
// import App from './Notes/04_020/App'
// import App from './Notes/04_021/App'
// import App from './Notes/04_022/App'
// import App from './Notes/05_025/01_App'
// import App from './Notes/05_026/01_App'
// import App from './Notes/05_027/01_App'
// import App from './Notes/05_028/01_App'
// import App from './Notes/05_029/01_App'
// import App from './Notes/05_030/01_App'
// import App from './Notes/05_031/01_App'
// import App from './Notes/05_032/01_App'
// import App from './Notes/06_037/01_App'
import App from './Notes/07_040/01_App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/* same as reactdom.render(
    component, 
    dom node
  )
*/ 
// above from react 17

// the app component is being injected in the index.html file in public folder in the div with id root

// react.strictmode also a component, performs error checks and highlights them at runtime

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
