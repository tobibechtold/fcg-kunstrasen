import React from 'react';
import {Navbar, Header, Brand} from 'react-bootstrap';

export default class AppHeader extends React.Component {
  render() {
    return <div className="navigation">
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#"><img src="logo.png" className="logoNavigation"></img></a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
    </div>
  }
}
