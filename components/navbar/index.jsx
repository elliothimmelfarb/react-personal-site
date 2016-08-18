import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import styles from './navbar.scss';

const MyNavbar = () => (
  <Navbar inverse fixedTop fluid className={styles.nav}>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">
          <span className={styles.logo} />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">HOME</NavItem>
        <NavItem eventKey={1} href="#">ABOUT ME</NavItem>
        <NavItem eventKey={1} href="#">PORTFOLIO</NavItem>
        <NavItem eventKey={1} href="#">BLOG</NavItem>
        <NavItem eventKey={2} href="#">RESUME</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavbar;
