import React from "react";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import format from "date-fns/format";

const eventImageStyle = {
  filter: "brightness(50%)"
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white"
};

const EventDetailedHeader = ({ event, isHost, isGoing, goingToEvent, cancelGoingToEvent }) => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/assets/categoryImages/${event.category}.jpg`}
          fluid
          style={eventImageStyle}
        />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event.title}
                  style={{ color: "white" }}
                />
                <p>{format(event.date, "dddd Do MMMM")}</p>
                <p>
                  Hosted by <strong>{event.bigHero}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        {!isHost && (
          <div>
            {isGoing ? (
              <Button onClick={() => cancelGoingToEvent(event)}>Cancel My Place</Button>
            ) : (
              <Button onClick={() => goingToEvent(event)} color="teal">JOIN THIS TREASURE HUNT</Button>
            )}
          </div>
        )}
        {/*<Icon name="share square" size="big"/>*/}
        {isHost && (
          <Button
            as={Link}
            to={`/manage/${event.id}`}
            color="orange"
          >
            Manage Treasure Hunt
          </Button>
        )}
      </Segment>
    </Segment.Group>
  );
};
export default EventDetailedHeader;
