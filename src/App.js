import React, { Component } from 'react';
import './App.css';

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Home from "./pages/Home/Home";
import Downloads from "./pages/Downloads/Downloads";
import Documentation from "./pages/Documentation/Documentation";
import Changelog from "./pages/Changelog/Changelog";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFileArchive, faDownload, faCode, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faFileArchive, faDownload, faCode, faChevronCircleUp);

class App extends Component {
  render() {
    return (
      <div className="App grid-container">
        <Router>
          <Header className="header" />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/downloads" component={Downloads} />
            <Route exact path="/documentation" component={Documentation} />
            <Route exact path="/changelog" component={Changelog} />
          </div>
          <Footer className="footer" />
        </Router>
      </div >
    );
  }
}

export default App;
