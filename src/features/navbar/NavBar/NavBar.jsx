import React, { PureComponent } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// All Components Below
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class Navbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    };
  }

  handleSignIn = () => {
    this.setState({
      authenticated: true,
    });
  }

  handleSignOut = () => {
    const {
      history,
    } = this.props;

    this.setState({
      authenticated: false,
    });
    history.push('/');
  }

  render() {
    const {
      authenticated,
    } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header as={Link} to="/">
            <img src="assets/logo.png" alt="logo" />
            Diony Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/test" name="test" />
          {authenticated && <Menu.Item as={NavLink} to="/people" name="People" />}
          {authenticated && (
          <Menu.Item>
            <Button
              as={Link}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          )}
          {authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

Navbar.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default withRouter(Navbar);
