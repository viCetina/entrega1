import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <React.Fragment>
      <nav >
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" href="#">LOGO</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link3</a>
          </li>
        </ul>
      </nav>
      </React.Fragment>
    );
  }
}

export default Nav;