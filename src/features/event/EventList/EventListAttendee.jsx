import React, { Pure, PureComponent } from 'react';
import { List, Image} from 'semantic-ui-react';

class EventListAttendee extends PureComponent {
  render() {
    const {attendee} = this.props;
    return (
      <List.Item>
        <Image as='' size='mini' circular src={attendee.photoURL}></Image>
      </List.Item>
    )
  }
}

export default EventListAttendee;
