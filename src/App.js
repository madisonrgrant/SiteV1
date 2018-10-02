import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'roboto-npm-webfont';
import './App.css';

import Header from './components/header/header';
import Programming from './components/programming/programming';
import Design from './components/about/about';
import Github from './components/code-github/code-github';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="section header-section">
            <div className="section-container header-component">
              <Header/>
            </div>
          </div>
          <div className="section colored">
            <div className="section-container">
              <Programming/>
            </div>
          </div>
          <div className="section">
            <div className="section-container">
              <Design/>
            </div>
          </div>

          <div className="section colored">
            <div className="section-container footer-component">
              <Footer/>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
