import React, { PureComponent } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends PureComponent {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header as={NavLink} exact to="/">
            <img src="assets/logo.png" alt="logo" />
            Diony Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/people" name="People" />
          <Menu.Item>
            <Button as={Link} to="/createEvent" floated="right" positive inverted content="Create Event" />
          </Menu.Item>
          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button
              basic
              inverted
              content="Sign Out"
              style={{ marginLeft: '0.5em' }}
            />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Navbar;
