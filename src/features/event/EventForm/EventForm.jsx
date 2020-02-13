/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import cuid from 'cuid';
import { connect } from 'react-redux';
import { Segment, Form, Button } from 'semantic-ui-react';
import { createEvent as createEventConnect, updateEvent as updateEventConnect } from '../eventActions';

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: '',
    description: '',
  };

  if (eventId && state.events.length > 0) {
    const arr = state.events;
    const filteredArr = arr.filter((fEvent) => fEvent.id === eventId)[0];
    event = filteredArr;
  }

  return {
    event,
  };
};

const actions = {
  createEvent: createEventConnect,
  updateEvent: updateEventConnect,
};

class EventForm extends Component {
  constructor(props) {
    super(props);
    const {
      event,
    } = this.props;

    this.state = {
      event: { ...event },
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const {
      event,
    } = this.state;

    const {
      updateEvent, createEvent, history,
    } = this.props;


    if (event.id) {
      updateEvent(event);
      history.goBack();
    } else {
      const newEvent = {
        ...event,
        id: cuid(),
        hostPhotoURL: '/assets/user.png',
      };

      createEvent(newEvent);
      this.setState({
        event: {
          title: '',
          date: '',
          city: '',
          venue: '',
          hostedBy: '',
          description: '',
        },
      });

      history.push('/events');
    }
  }

  onInputChange = (e) => {
    const {
      event,
    } = this.state;

    const newEvent = event;

    newEvent[e.target.name] = e.target.value;
    this.setState({
      event: newEvent,
    });
  }

  render() {
    const {
      history,
    } = this.props;
    const {
      event,
    } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input name="title" placeholder="Event Title" onChange={this.onInputChange} value={event.title} />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input name="date" type="date" placeholder="Event Date" onChange={this.onInputChange} value={event.date} />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name="city" placeholder="City event is taking place" onChange={this.onInputChange} value={event.city} />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name="venue" placeholder="Enter the Venue of the event" onChange={this.onInputChange} value={event.venue} />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name="hostedBy" placeholder="Enter the name of person hosting" onChange={this.onInputChange} value={event.hostedBy} />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input name="description" placeholder="Enter Description" onChange={this.onInputChange} value={event.description} />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={history.goBack} type="button">Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

EventForm.propTypes = {
  event: propTypes.shape().isRequired,
  updateEvent: propTypes.func.isRequired,
  createEvent: propTypes.func.isRequired,
  history: propTypes.shape().isRequired,
};

export default connect(mapState, actions)(EventForm);
