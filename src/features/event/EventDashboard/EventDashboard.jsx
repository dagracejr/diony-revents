import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EventList from '../EventList/EventList';
import {
  deleteEvent as deleteEventConnect,
} from '../eventActions';

const mapState = (state) => ({
  events: state.events,
});

const actions = {
  deleteEvent: deleteEventConnect,
};

class EventDashboard extends Component {
  handleDeleteEvent = (eventId) => () => {
    const {
      deleteEvent,
    } = this.props;

    deleteEvent(eventId);
  }

  render() {
    const {
      events,
    } = this.props;

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            deleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
        </Grid.Column>
      </Grid>
    );
  }
}

EventDashboard.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default connect(mapState, actions)(EventDashboard);
