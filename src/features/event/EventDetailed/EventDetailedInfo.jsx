import React, { Component } from "react";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";
import THDetailedMap from './THDetailedMap' 


class EventDetailedInfo extends Component {

  state = {
    showMap: false
  }
  showMapToggle = () => {
    this.setState(prevState => ({
      showMap: !prevState.showMap
    }))
  }

  render() {
    const {event} = this.props;
    return (
      <Segment.Group>
        <Segment attached="top">
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="share square" size="large" color="teal" />
            </Grid.Column>
            <Grid.Column width={11}>
              <span>Share this Treasure Hunt</span>
            </Grid.Column>
            <Grid.Column width={4}>
              <Button color="teal" size="tiny" content="Share TH" />
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid>
            <Grid.Column width={1}>
              <Icon size="large" color="teal" name="info" />
            </Grid.Column>
            <Grid.Column width={15}>
              <p>{event.description}</p>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="euro" size="large" color="teal" />
            </Grid.Column>
            <Grid.Column width={15}>
              <span>{event.contribution}€: Contribution for this TH</span>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="calendar" size="large" color="teal" />
            </Grid.Column>
            <Grid.Column width={15}>
              <span>{event.date}</span>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="marker" size="large" color="teal" />
            </Grid.Column>
            <Grid.Column width={11}>
              <span>{event.venue}</span>
            </Grid.Column>
            <Grid.Column width={4}>
              <Button onClick={this.showMapToggle} color="teal" size="tiny" content={this.state.showMap ? 'Hide Map' : 'Show Map'} />
            </Grid.Column>
          </Grid>
        </Segment>
        {this.state.showMap &&
        <THDetailedMap lat={event.venueLatLng.lat} lng={event.venueLatLng.lng}/>}
      </Segment.Group>
    );
  }
}

export default EventDetailedInfo;
