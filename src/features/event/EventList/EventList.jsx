import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import EventListItem from './EventListItem';

class EventList extends PureComponent {
  render() {
    const {
      events,
      onEventOpen,
      deleteEvent
    } = this.props;
    return (
      <div>
        {events.map((event) => (
          <EventListItem
            key={event.id}
            event={event}
            onEventOpen={onEventOpen}
            deleteEvent={deleteEvent}
          />
        ))}
      </div>
    );
  }
}


export default EventList;
