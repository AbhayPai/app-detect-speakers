/*
 *  Require Sass file for the compilation
 */
require('SassPath/pages/index.scss');

/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import Bowser from "bowser";
import ReactDOM from 'react-dom';

/*
 *  All Usable React Reusable Components in this File
 */
import Navbar from 'ComponentsPath/Navbar';
import BrowserMessage from 'ComponentsPath/BrowserMessage';
import AppDetectSpeakers from 'ComponentsPath/AppDetectSpeakers';

class Index {
  /*
    *  @init
    *  all trigger of main function should be done inside this
    */
  init () {
    this.render();
  }

  /*
    *  @render
    *  all render logic should be done inside this
    */
  render () {
    if (document.getElementById('app')) {
      const unSupportedBrowserList = ['Safari', 'Internet Explorer', 'Opera'];

      if(unSupportedBrowserList.indexOf(Bowser.name) === -1) {
        ReactDOM.render(
          <React.Fragment>
            <Navbar />
            <AppDetectSpeakers />
          </React.Fragment>,
          document.getElementById('app')
        );
      } else {
        ReactDOM.render(
          <React.Fragment>
            <Navbar />
            <BrowserMessage />
          </React.Fragment>,
          document.getElementById('app')
        );
      }
    }
  }
}

new Index().init();
