import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";

const eventsDashboard = [
  {
    id: "1",
    title: "Take a selfie with a stranger in Temple Bar",
    date: "2018-03-27T11:00:00+00:00",
    category: "culture",
    bigHero: "B-Hero: Johan",
    description: "The B-Hero needs to Get into the Temple Bar Pub and take a selfie with a completely stranger! Proof of this quest needs to be uploaded to the Trasure Hunt",
    city: "London, UK",
    venue: "47-48 Temple Bar, Dublin, D02 N725",
    hostedBy: "Robert",
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
        id: "a",
        name: "Mafer",
        photoURL: "https://bit.ly/2CKyhOf"
      },
      {
        id: "b",
        name: "Ronald",
        photoURL: "https://bit.ly/2HRMsnN"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28T14:00:00+00:00",
    category: "drinks",
    bigHero: "B-Hero: Juan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Johan",
    hostPhotoURL: "https://bit.ly/2HDrEkL",
    attendees: [
      {
        id: "b",
        name: "Juan",
        photoURL: "https://bit.ly/2HRLmsb"
      },
      {
        id: "a",
        name: "Mafer",
        photoURL: "https://bit.ly/2CKyhOf"
      },
      {
        id: "b",
        name: "Ronald",
        photoURL: "https://bit.ly/2HRMsnN"
      },
      {
        id: "b",
        name: "Robert",
        photoURL: "https://bit.ly/2HDmTHG"
      }
    ]
  },
  {
    id: "1",
    title: "Do 20 push ups inside a McDonalds",
    date: "2018-03-27T11:00:00+00:00",
    category: "sports",
    bigHero: "B-Hero: Ronald",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "McDonalds Dublin",
    hostedBy: "Juan",
    hostPhotoURL: "https://bit.ly/2HRLmsb",
    attendees: [
      {
        id: "a",
        name: "Johan",
        photoURL: "https://bit.ly/2HDrEkL"
      },
      {
        id: "a",
        name: "Mafer",
        photoURL: "https://bit.ly/2CKyhOf"
      },
      {
        id: "b",
        name: "Ronald",
        photoURL: "https://bit.ly/2HRMsnN"
      },
      {
        id: "b",
        name: "Robert",
        photoURL: "https://bit.ly/2HDmTHG"
      }
    ]
  },
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27T11:00:00+00:00",
    category: "culture",
    bigHero: "B-Hero: Robert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Maria Fernanda",
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
        id: "b",
        name: "Ronald",
        photoURL: "https://bit.ly/2HRMsnN"
      },
      {
        id: "b",
        name: "Robert",
        photoURL: "https://bit.ly/2HDmTHG"
      }
    ]
  },
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27T11:00:00+00:00",
    category: "culture",
    bigHero: "B-Hero: Maria Fernanda",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Ronald",
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
        id: "a",
        name: "Mafer",
        photoURL: "https://bit.ly/2CKyhOf"
      },
      {
        id: "b",
        name: "Robert",
        photoURL: "https://bit.ly/2HDmTHG"
      }
    ]
  }
];

class EventDashboard extends Component {
  state = {
    events: eventsDashboard,
    isOpen: false
  };

  handleFormOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={this.state.events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Treasure Hunt"
          />
          {this.state.isOpen && <EventForm handleCancel={this.handleCancel} />}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
