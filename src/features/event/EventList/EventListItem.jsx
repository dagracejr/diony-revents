import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  Segment,
  Item,
  List,
  Icon,
  Button,
} from 'semantic-ui-react';
import EventListAtendee from './EventListAttendee';

class EventListItem extends PureComponent {
  render() {
    const {
      event,
      deleteEvent,
    } = this.props;

    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Hosted by
                  <span>{event.hostedBy}</span>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />
            {event.date}
            |
            <Icon name="marker" />
            {event.city}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees && event.attendees.map((attendee) => (
              <EventListAtendee key={attendee.id} attendee={attendee} />
            ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button onClick={deleteEvent(event.id)} as="a" color="red" floated="right" content="Remove" />
          <Button as={Link} to={`/event/${event.id}`} color="teal" floated="right" content="View" />
        </Segment>
      </Segment.Group>
    );
  }
}

EventListItem.propTypes = {
  event: PropTypes.shape().isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default EventListItem;
