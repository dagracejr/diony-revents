import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  Dropdown,
  Image,
} from 'semantic-ui-react';

function SignedInMenu({ signOut }) {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="top left" text="Username">
        <Dropdown.Menu>
          <Dropdown.Item text="Create Event" icon="plus" />
          <Dropdown.Item text="My Events" icon="calendar" />
          <Dropdown.Item text="My Network" icon="users" />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item text="Settings" icon="settings" />
          <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}

SignedInMenu.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default SignedInMenu;
