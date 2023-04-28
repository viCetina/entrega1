import React, { Component } from 'react';
import Nav from './components/nav';
import Hero from './components/hero';
import Cart from './components/cart';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className='container'>
          <div className="row">
            <div className='col-11'><Nav /></div>
            <div className='col-1'><Cart /></div>
          </div>
        </header>
        <main className='container'>
          <Hero />
        </main>
      </React.Fragment>
    );
  }
}

export default App;