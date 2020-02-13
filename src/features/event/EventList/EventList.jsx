import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import EventListItem from './EventListItem';

class EventList extends PureComponent {
  render() {
    const {
      events,
      deleteEvent,
    } = this.props;
    return (
      <div>
        {events.map((event) => (
          <EventListItem
            key={event.id}
            event={event}
            deleteEvent={deleteEvent}
          />
        ))}
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  deleteEvent: PropTypes.func.isRequired,
};


export default EventList;
