/*
 *  All Usable Libraries in this File
 */
import React from 'react';

const BrowserMessage = () => {

  return (
    <React.Fragment>
      <div className='content'>
        <div className='content--breadcrumb'>
          <h1 className='content--title'>Sorry!!! Your browser is not supporting audio api.</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BrowserMessage;
