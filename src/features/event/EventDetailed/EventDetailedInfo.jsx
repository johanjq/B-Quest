import React, { Component } from "react";
import { connect } from 'react-redux'
import { Segment, Grid, Icon, Button } from "semantic-ui-react";
import THDetailedMap from './THDetailedMap'
import { openModal } from '../../modals/modalActions'
import format from "date-fns/format";

const actions = {
  openModal
}


class EventDetailedInfo extends Component {

  state = {
    showMap: false
  };

  componentWillUnmount() {
    this.setState({
      showMap: false
    })
  }

  showMapToggle = () => {
    this.setState(prevState => ({
      showMap: !prevState.showMap
    }))
  }

  handleShare = () => {
    this.props.openModal('ShareTH')
  }

  

  render() {
    const {event, openModal} = this.props;
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
              <Button onClick={() => openModal('ShareModal', {data: 43})} color="teal" size="tiny" content="Share TH" />
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
              <span>{format(event.date, 'dddd Do MMM')} at {format(event.date, 'h:mm A')}</span>
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

export default connect(null, actions)(EventDetailedInfo);
