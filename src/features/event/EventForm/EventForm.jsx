/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Segment, Form, Button } from 'semantic-ui-react';

const emptyEvent = {
  title: '',
  date: '',
  city: '',
  venue: '',
  hostedBy: '',
  description: '',
};

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: emptyEvent,
    };
  }

  componentDidMount() {
    const {
      selectedEvent,
    } = this.props;

    if (selectedEvent !== null) {
      alert(1);
      this.setState({
        event: selectedEvent,
      });
    } else {
      console.log(emptyEvent);
      alert(2);
      this.setState({
        event: emptyEvent,
      });
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    const {
      selectedEvent,
    } = this.props;

    if (nextProps.selectedEvent !== selectedEvent) {
      this.setState({
        event: nextProps.selectedEvent || emptyEvent,
      });
    } else {
      this.setState({
        event: emptyEvent,
      });
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const {
      event,
    } = this.state;

    const {
      updateEvent, createEvent,
    } = this.props;


    if (event.id) {
      updateEvent(event);
    } else {
      createEvent(event);
      this.setState({
        event: emptyEvent,
      });
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
      handleCancel,
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
          <Button onClick={handleCancel} type="button">Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

EventForm.propTypes = {
  selectedEvent: propTypes.shape.isRequired,
  handleCancel: propTypes.func.isRequired,
  updateEvent: propTypes.func.isRequired,
  createEvent: propTypes.func.isRequired,
};

export default EventForm;
