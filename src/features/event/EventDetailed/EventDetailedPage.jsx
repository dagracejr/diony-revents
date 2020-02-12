import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    const arr = state.events;
    const filteredArr = arr.filter((fevent) => fevent.id === eventId)[0];
    event = filteredArr;
  }

  return {
    event,
  };
};

function EventDetailedPage({ event }) {
  return (
    <>
      <Grid>
        <Grid.Column width={10}>
          <EventDetailedHeader event={event} />
          <EventDetailedInfo event={event} />
          <EventDetailedChat />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventDetailedSidebar attendees={event.attendees} />
        </Grid.Column>
      </Grid>
    </>
  );
}

EventDetailedPage.propTypes = {
  event: PropTypes.shape().isRequired,
};

export default connect(mapState)(EventDetailedPage);
