import React, { Component } from "react";
import { Segment, Item, Icon, Button, List, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  render() {
    const { event, deleteEvent } = this.props;
    return (
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
                {event.cancelled && 
                <Label style={{top: '-20px'}} ribbon='right' color='red' content='This Treasure Hunt has been cancelled' />}
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {format(event.date, "dddd Do MMMM")} at{' '}
            {format(event.date, "HH:mm")} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              Object.values(event.attendees).map((attendee, index) => (
                <EventListAttendee key={index} attendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <Segment>
            <span>Big Lord: {event.hostedBy}</span>
          </Segment>
          <Segment>
            <span>Contribution: {event.contribution}€</span>
          </Segment>
          <span>{event.description}</span>
          <div style={{ margin: "10px 0px" }}>
            <Button
              onClick={deleteEvent(event.id)}
              as="a"
              style={{ background: "red", color: "white" }}
              floated="right"
              content="Delete"
            />
            <Button
              as={Link}
              to={`/event/${event.id}`}
              style={{ background: "#008577", color: "white" }}
              floated="right"
              content="View"
            />
          </div>
        </Segment>
      </Segment.Group>
    );
  }
}
export default EventListItem;
