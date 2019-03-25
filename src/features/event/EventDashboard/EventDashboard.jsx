import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import cuid from 'cuid';
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";


const eventsDashboard = [
  {
    id: "1",
    title: "Take a selfie with a stranger in Temple Bar",
    date: "2018-03-27",
    category: "culture",
    bigHero: "B-Hero: Johan",
    description: "The B-Hero needs to Get into the Temple Bar Pub and take a selfie with a completely stranger! Proof of this quest needs to be uploaded to the Trasure Hunt",
    city: "London, UK",
    venue: "47-48 Temple Bar, Dublin, D02 N725",
    hostedBy: "Robert",
    contribution: "Contribution: 20$",
    hostPhotoURL: "https://bit.ly/2HDmTHG",
    attendees: [
      {
        id: "a",
        name: "Johan",
        photoURL: "https://bit.ly/2HDrEkL"
      },
      {
        id: "b",
        name: "Juan",
        photoURL: "https://bit.ly/2HRLmsb"
      },
      {
        id: "c",
        name: "Mafer",
        photoURL: "https://bit.ly/2CKyhOf"
      },
      {
        id: "e",
        name: "Ronald",
        photoURL: "https://bit.ly/2HRMsnN"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    bigHero: "B-Hero: Juan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Johan",
    contribution: "Contribution: 20$",
    hostPhotoURL: "https://bit.ly/2HDrEkL",
    attendees: [
      {
        id: "b",
        name: "Juan",
        photoURL: "https://bit.ly/2HRLmsb"
      },
      {
        id: "c",
        name: "Mafer",
        photoURL: "https://bit.ly/2CKyhOf"
      },
      {
        id: "e",
        name: "Ronald",
        photoURL: "https://bit.ly/2HRMsnN"
      },
      {
        id: "d",
        name: "Robert",
        photoURL: "https://bit.ly/2HDmTHG"
      }
    ]
  },
  {
    id: "3",
    title: "Do 20 push ups inside a McDonalds",
    date: "2018-03-27",
    category: "sports",
    bigHero: "B-Hero: Ronald",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "McDonalds Dublin",
    hostedBy: "Juan",
    contribution: "Contribution: 20$",
    hostPhotoURL: "https://bit.ly/2HRLmsb",
    attendees: [
      {
        id: "a",
        name: "Johan",
        photoURL: "https://bit.ly/2HDrEkL"
      },
      {
        id: "c",
        name: "Mafer",
        photoURL: "https://bit.ly/2CKyhOf"
      },
      {
        id: "e",
        name: "Ronald",
        photoURL: "https://bit.ly/2HRMsnN"
      },
      {
        id: "d",
        name: "Robert",
        photoURL: "https://bit.ly/2HDmTHG"
      }
    ]
  },
  {
    id: "4",
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    bigHero: "B-Hero: Robert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Maria Fernanda",
    contribution: "Contribution: 20$",
    hostPhotoURL: "https://bit.ly/2CKyhOf",
    attendees: [
      {
        id: "a",
        name: "Johan",
        photoURL: "https://bit.ly/2HDrEkL"
      },
      {
        id: "b",
        name: "Juan",
        photoURL: "https://bit.ly/2HRLmsb"
      },
      {
        id: "e",
        name: "Ronald",
        photoURL: "https://bit.ly/2HRMsnN"
      },
      {
        id: "d",
        name: "Robert",
        photoURL: "https://bit.ly/2HDmTHG"
      }
    ]
  },
  {
    id: "5",
    title: "Get a free hug in the shopping center",
    date: "2018-03-27",
    category: "culture",
    bigHero: "B-Hero: Maria Fernanda",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Ronald",
    contribution: "Contribution: 20$",
    hostPhotoURL: "https://bit.ly/2HRMsnN",
    attendees: [
      {
        id: "a",
        name: "Johan",
        photoURL: "https://bit.ly/2HDrEkL"
      },
      {
        id: "b",
        name: "Juan",
        photoURL: "https://bit.ly/2HRLmsb"
      },
      {
        id: "c",
        name: "Mafer",
        photoURL: "https://bit.ly/2CKyhOf"
      },
      {
        id: "d",
        name: "Robert",
        photoURL: "https://bit.ly/2HDmTHG"
      }
    ]
  }
];

class EventDashboard extends Component {
  state = {
    events: eventsDashboard,
    isOpen: false,
    selectedEvent: null
  };

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };
  //Event to handle the update of Treasure Hunts
  handleUpdateEvent = (updatedEvent) => {
    this.setState({
      events: this.state.events.map(event => {
        if(event.id === updatedEvent.id){
          return Object.assign({}, updatedEvent)
        }else{
          return event
        }
      }),
      isOpen: false,
      selectedEvent: null
    })
  }

  handleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    })
  }

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid()
    newEvent.hostPhotoURL = '/assets/user.png';
    const updatedEvents = [...this.state.events, newEvent]
    this.setState({
      events: updatedEvents,
      isOpen: false
    })
  }
  handleDeleteEvent = (eventId) => () =>{
    const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    this.setState({
      events: updatedEvents
    })  
  }

  render() {
    const {selectedEvent} = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events={this.state.events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Treasure Hunt"
          />
          {this.state.isOpen && <EventForm updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} handleCancel={this.handleCancel} />}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
