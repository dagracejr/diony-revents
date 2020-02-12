import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import {
  createEvent as createEventConnect,
  deleteEvent as deleteEventConnect,
  updateEvent as updateEventConnect,
} from '../eventActions';

const mapState = (state) => ({
  events: state.events,
});

const actions = {
  createEvent: createEventConnect,
  deleteEvent: deleteEventConnect,
  updateEvent: updateEventConnect,
};

class EventDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedEvent: null,
    };
  }

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true,
    });
  }

  handleCancel = () => {
    this.setState({
      isOpen: false,
    });
  }

  handleCreateEvent = (newEvent) => {
    const {
      createEvent,
    } = this.props;

    // eslint-disable-next-line no-param-reassign
    newEvent.id = cuid();
    // eslint-disable-next-line no-param-reassign
    newEvent.hostPhotoURL = '/assets/user.png';
    createEvent(newEvent);

    this.setState({
      isOpen: false,
    });
  }

  handleUpdateEvent = (updatedEvent) => {
    const {
      updateEvent,
    } = this.props;

    updateEvent(updatedEvent);

    this.setState({
      isOpen: false,
      selectedEvent: null,
    });
  }

  handleDeleteEvent = (eventId) => () => {
    const {
      deleteEvent,
    } = this.props;

    deleteEvent(eventId);
  }

  handleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true,
    });
  }

  render() {
    const {
      selectedEvent, isOpen,
    } = this.state;

    const {
      events,
    } = this.props;

    return (
      <Grid>
        <Grid.Column width={10}>
          <h1>Event Lists</h1>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            onEventOpen={this.handleOpenEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Event"
          />
          {isOpen && (
            <EventForm
              updateEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              handleCancel={this.handleCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

EventDashboard.propTypes = {
  events: PropTypes.shape().isRequired,
  createEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
};

export default connect(mapState, actions)(EventDashboard);
