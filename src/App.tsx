import React from 'react';
import logo from './logo.svg';
import './App.css';
import Strip from './strip/Strip';
import { Configuration } from 'boussole';
// import { BoussoleElement, BoussoleSection } from 'boussole/react';

class App extends React.Component {

  
  render() {
    const strips = ['Strip 1 (last focused)', 'Strip 2 (default element)', 'Strip 3 (disabled)', 'Strip 4'];
    const confs: Configuration[] = [{enterTo: 'last-focused'}, {enterTo: 'default-element', defaultElement: '.theDefaultOne'}, {disabled: true}, {}];

    return (
      <div className="App">
        {
          strips.map((strip, index) => {
            return (
              <Strip title={strip} conf={confs[index]} snId={`strip-${index}`}></Strip>
            )
          })
        }
      </div>
    );
  }
  
}
  

export default App;
