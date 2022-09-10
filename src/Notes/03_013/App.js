/*
- node modules -> project dependencies and node packages, any packages which would needed to be installed in our project will be available here
- public -> the files which would be made public to the browser 
  --> inside public
  -- robots.txt 0 communicating with search engine crawlers
  -- manifest.json -> contains some information about the project - names, icons, theme colors. used when a user installs a pwa onto their desktop
  -- index.html -> single file which is served to the browser, if spa then only this file will be served
- source -> our compiled react source code will go, when project is compiled, all the files here are compiled into a js bundle
  --> inside src
  - app.js -> a component - components are just functions
  - index.css -> global style sheet
  - app.test.js - for performing writing tests for project
  - setuptest - files needed for test files to work
  - can delete both of them if not testing
  - vitals - measure the performance of the project by analyzing some metrics
  - can delete this also
- package files for tracking dependencies(packages that we install in our project)
*/

// in inspect elements, at the end, we have three scripts that are linked, which converts jsx into js, and also updates the changes that are made to the project

import logo from '../../logo.svg';
import './App.css';

/* adding images two methods 
1. adding images inside src folder. can create an assets folder and put inside it or just put in src folder
2. put inside the public folder. everything inside the public folder will be accessible to the browser. no need to import the asset now as everything is public. if moved logo.svg in public then can type
<img src='/logo.svg'/> as it is not a dynamic value
// use second method if the images are used at a lot of places or the images may be problematic or using that image outside the scope of react
// use first method if the images are to be used in specific components or used once
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
