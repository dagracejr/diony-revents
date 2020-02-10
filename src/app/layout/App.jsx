import React from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import Navbar from '../../features/navbar/NavBar/NavBar';

function App() {
  return (
    <div>
      <Navbar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </div>
  );
}

export default App;
