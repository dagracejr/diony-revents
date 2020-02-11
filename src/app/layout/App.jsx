import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailed from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import Navbar from '../../features/navbar/NavBar/NavBar';
import HomePage from '../../features/home/HomePage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Route
        path="/(.+)"
        render={() => (
          <>
            <Navbar />
            <Container className="main">
              <Switch>
                <Route path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailed} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/createEvent" component={EventForm} />
              </Switch>
            </Container>
          </>
        )}
      />
    </div>
  );
}

export default App;
