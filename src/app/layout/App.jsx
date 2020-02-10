import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailed from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import Navbar from '../../features/navbar/NavBar/NavBar';
import HomePage from '../../features/home/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container className="main">
          <Route exatch path="/" component={HomePage} />
          <Route path="/events" component={EventDashboard} />
          <Route path="/events/:id" component={EventDetailedPage} />
          <Route path="/people" component={PeopleDashboard} />
          <Route path="/profile/:id" component={UserDetailed} />
          <Route path="/settings" component={SettingsDashboard} />
          <Route path="/createEvent" component={EventForm} />
        </Container>
      </div>
    );
  }
}

export default App;
