import React from "react";
import { Segment, List, Item, Label } from "semantic-ui-react";

const EventDetailedSidebar = ({attendees}) => {
  const isHero = false;
  return (
    <div>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {/*Will display how many people are going to the TH */}
        {attendees && attendees.length} {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          {attendees &&
            attendees.map(attendee => (
              <Item key={attendee.id} style={{ position: "relative" }}>
              {/*Turns orange labels off*/}
                {isHero &&
                <Label
                  style={{ position: "absolute" }}
                  color="orange"
                  ribbon="right"
                >
                
                  B-Hero
                </Label>}
                <Item.Image size="tiny" src={attendee.photoURL} />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h3">
                    <p>{attendee.displayName}</p>
                  </Item.Header>
                </Item.Content>
              </Item>
            ))}
        </List>
      </Segment>
    </div>
  );
};
export default EventDetailedSidebar;
