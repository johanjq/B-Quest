import React, { Component } from "react";
import { Segment, Item, Icon, Button, List } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  render() {
    const { event, onEventOpen, deleteEvent } = this.props;
    return (
      <div>
        <Segment.Group>
          <Segment>
            <Item.Group>
              <Item>
                <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                <Item.Content>
                  <Item.Header as="a">{event.title}</Item.Header>
                  <Item.Description>
                    <p>B-Hero: {event.bigHero}</p>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <Segment>
            <span>
              <Icon name="clock" /> {event.date} |
              <Icon name="marker" /> {event.venue}
            </span>
          </Segment>
          <Segment secondary>
            <List horizontal>
              {event.attendees &&
                event.attendees.map(attendee => (
                  <EventListAttendee key={attendee.id} attendee={attendee} />
                ))}
            </List>
          </Segment>
          <Segment clearing>
            <Segment>
              <span>Big Lord: {event.hostedBy}</span>
            </Segment>
            <Segment>
              <span>{event.contribution}</span>
            </Segment>
            <span>{event.description}</span>
            <Button
              onClick={deleteEvent(event.id)}
              as="a"
              style={{ background: "red", color: "white" }}
              floated="right"
              content="Delete"
            />
            <Button
              onClick={onEventOpen(event)}
              as="a"
              style={{ background: "#008577", color: "white" }}
              floated="right"
              content="View"
            />
          </Segment>
        </Segment.Group>
      </div>
    );
  }
}
export default EventListItem;
