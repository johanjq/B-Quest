import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

const emptyEvent = {
  title: '',
  date: '',
  city: '',
  venue: '',
  hostedBy: '',
  contribution: ''
}

class EventForm extends Component {
  state = {
    event: emptyEvent
  }

  componentDidMount(){
    if(this.props.selectedEvent !== null){
      this.setState({
        event: this.props.selectedEvent
      })
    }
  }
  //Each time we click on this, we get access to the next props
  //or the previous props
  //So the form will update to whatever we're selecting
  componentWillReceiveProps(nextProps){
    //console.log('current', this.props.selectedEvent);
    //console.log('next', nextProps.selectedEvent);
    if(nextProps.selectedEvent !== this.props.selectedEvent){
      this.setState({
        event: nextProps.selectedEvent || emptyEvent
      })
    }
  }
  //When we click view on each TH,
  //We're going to be able to edit the event and change its fields
  onFormSubmit = (evt) => {
    evt.preventDefault();
    if(this.state.event.id){
      this.props.updateEvent(this.state.event);
    } else{
      this.props.createEvent(this.state.event)
    }
  }

  onInputChange = (evt) => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
        event: newEvent
    })
  }

  render() {
    const {handleCancel} = this.props;
    const {event} = this.state;
    return (
            <Segment>
              <Form onSubmit={this.onFormSubmit}>
                <Form.Field>
                  <label>Treasure Hunt Title</label>
                  <input name='title' onChange={this.onInputChange} value={event.title} placeholder="Treasure Hunt Title" />
                </Form.Field>
                <Form.Field>
                  <label>Treasure Hunt Date</label>
                  <input name='date' onChange={this.onInputChange} value={event.date} type="date" placeholder="Treasure Hunt Date" />
                </Form.Field>
                <Form.Field>
                  <label>City</label>
                  <input name='city' onChange={this.onInputChange} value={event.city} placeholder="City TH is taking place" />
                </Form.Field>
                <Form.Field>
                  <label>Venue</label>
                  <input name='venue' onChange={this.onInputChange} value={event.venue} placeholder="Enter the Venue of the TH" />
                </Form.Field>
                <Form.Field>
                  <label>Hosted By</label>
                  <input name='hostedBy' onChange={this.onInputChange} value={event.hostedBy} placeholder="Enter the name of the Big Lord" />
                </Form.Field>
                <Form.Field>
                  <label>Contribution: </label>
                  <input name='contribution' onChange={this.onInputChange} value={event.contribution} placeholder="How much will you contribute?" />
                </Form.Field>
                <Button positive type="submit">
                  Submit
                </Button>
                <Button onClick={handleCancel} type="button">Cancel</Button>
              </Form>
            </Segment>
    )
  }
}
export default EventForm;