/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import cuid from 'cuid';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import {
  Segment, Form, Button, Grid, Header,
} from 'semantic-ui-react';
import {
  composeValidators, combineValidators, isRequired, hasLengthGreaterThan,
} from 'revalidate';
import moment from 'moment';
import { createEvent as createEventConnect, updateEvent as updateEventConnect } from '../eventActions';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    const arr = state.events;
    const filteredArr = arr.filter((fEvent) => fEvent.id === eventId)[0];
    event = filteredArr;
  }

  return {
    initialValues: event,
  };
};

const actions = {
  createEvent: createEventConnect,
  updateEvent: updateEventConnect,
};

const category = [
  { key: 'drinks', text: 'Drinks', value: 'drinks' },
  { key: 'culture', text: 'Culture', value: 'culture' },
  { key: 'film', text: 'Film', value: 'film' },
  { key: 'food', text: 'Food', value: 'food' },
  { key: 'music', text: 'Music', value: 'music' },
  { key: 'travel', text: 'Travel', value: 'travel' },
];

const validate = combineValidators({
  title: isRequired({ message: 'The event title is required' }),
  category: isRequired({ message: 'Please provide a category' }),
  description: composeValidators(
    isRequired({ message: 'Please enter a description' }),
    hasLengthGreaterThan(4)({ message: 'Description needs to be at least 5 characters' }),
  )(),
  city: isRequired({ message: 'City is required' }),
  venue: isRequired({ message: 'Venue is required' }),
});

class EventForm extends Component {
  // constructor(props) {
  //   super(props);
  //   const {
  //     event,
  //   } = this.props;

  //   this.state = {
  //     event: { ...event },
  //   };
  // }

  onFormSubmit = (values) => {
    const {
      initialValues,
      createEvent,
      updateEvent,
      history,
    } = this.props;

    const event = values;
    const dateOne = moment(event.date).format('MM-DD-YYYY HH:mm');
    event.date = dateOne;

    if (initialValues.id) {
      updateEvent(event);
      history.goBack();
    } else {
      const newEvent = {
        ...event,
        id: cuid(),
        hostPhotoURL: '/assets/user.png',
        hostedBy: 'Bob',
      };
      createEvent(newEvent);
      history.push('/events');
    }
  }

  render() {
    const {
      history,
      handleSubmit,
      invalid,
      submitting,
      pristine,
    } = this.props;

    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Form onSubmit={handleSubmit(this.onFormSubmit)}>
              <Header sub color="teal" content="Event Details" />
              <Field name="title" type="text" component={TextInput} placeholder="Give your event a name" />
              <Field name="category" type="text" options={category} component={SelectInput} placeholder="What is your event about" />
              <Field name="description" type="text" component={TextArea} rows={3} placeholder="Tell us about your event" />
              <Header sub color="teal" content="Event Location Details" />
              <Field name="city" type="text" component={TextInput} placeholder="Event City" />
              <Field name="venue" type="text" component={TextInput} placeholder="Event Venue" />
              <Field
                name="date"
                type="text"
                component={DateInput}
                timeIntervals={15}
                dateFormat="yyyy/MM/dd HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="Event Date and Time"
              />
              <Button disabled={invalid || submitting || pristine} positive type="submit">
                Submit
              </Button>
              <Button onClick={history.goBack} type="button">Cancel</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

EventForm.propTypes = {
  initialValues: propTypes.shape().isRequired,
  updateEvent: propTypes.func.isRequired,
  invalid: propTypes.bool.isRequired,
  submitting: propTypes.bool.isRequired,
  pristine: propTypes.bool.isRequired,
  handleSubmit: propTypes.func.isRequired,
  createEvent: propTypes.func.isRequired,
  history: propTypes.shape().isRequired,
};

export default connect(mapState, actions)(reduxForm({ form: 'eventForm', enableReinitialize: true, validate })(EventForm));
