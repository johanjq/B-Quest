import React, { Component } from "react";
import { Segment, Item, Icon, Button, List } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee'

class EventListItem extends Component {
  render() {
    return (
      <div>
        <Segment.Group>
          <Segment>
            <Item.Group>
              <Item>
                <Item.Image size="tiny" circular src="https://randomuser.me/api/portraits/women/42.jpg" />
                <Item.Content>
                  <Item.Header as="a">Event Title</Item.Header>
                  <Item.Description>
                    Hosted by <a>hosted by</a>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <Segment>
            <span>
              <Icon name="clock" /> date |
              <Icon name="marker" /> time
            </span>
          </Segment>
          <Segment secondary>
            <List horizontal>
            {/* todo: attendees go here */}
                <EventListAttendee/>
                <EventListAttendee/>
                <EventListAttendee/>
            </List>
          </Segment>
          <Segment clearing>
          <span>Description will go here</span>
            <Button as="a" style={{background: "#008577", color:"white"}} floated="right" content="View" />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}
export default EventListItem;
