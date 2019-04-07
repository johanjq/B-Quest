import { createReducer } from "../../app/common/util/reducerUtil";
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./eventConstants";

const initialState = [
  {
    id: "1",
    title: "Take a selfie with a stranger in Temple Bar",
    date: "2018-03-27",
    category: "templebar",
    bigHero: "Robert",
    description:
      "The B-Hero needs to Get into the Temple Bar Pub and take a selfie with a completely stranger! Proof of this quest needs to be uploaded to the Trasure Hunt",
    city: "Dublin, Ireland",
    venue: "47-48 Temple Bar, Dublin, D02 N725",
    venueLatLng: {
      lat: 53.345648,
      lng: -6.264204
    },
    hostedBy: "Johan",
    contribution: "20",
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
    title: "Cross the Ha'penny Bridge Jumping",
    date: "2018-03-28",
    category: "hapenny",
    bigHero: "Johan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Dublin, Ireland",
    venue: "Ha'penny Bridge, Bachelors Walk, North City, Dublin",
    venueLatLng: {
      lat: 53.346496,
      lng: -6.263109
    },
    hostedBy: "Juan",
    contribution: "5",
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
    title: "Sing a song in public",
    date: "2018-03-27",
    category: "music",
    bigHero: "Juan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Dublin, Ireland",
    venue: "Porterhouse Temple Bar, Parliament Street, Temple Bar, Dublin 2",
    venueLatLng: {
      lat: 53.345241,
      lng: -6.267440
    },
    hostedBy: "Ronald",
    contribution: "10",
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
        name: "Maria",
        photoURL: "https://bit.ly/2HDmTHG"
      }
    ]
  },
  {
    id: "4",
    title: "Cross Running the Samuel Beckett Bridge",
    date: "2018-03-27",
    category: "samuelbeckett",
    bigHero: "Maria Fernanda",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Dublin, Ireland",
    venue: "Samuel Beckett Bridge, Dublin",
    venueLatLng: {
      lat: 53.347115,
      lng: -6.241371
    },
    hostedBy: "Juan",
    contribution: "25",
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
    title: "Get a hug in the shopping center",
    date: "2018-03-27",
    category: "shoppingcenter",
    bigHero: "Ronald",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Dublin, Ireland",
    venue: "Dundrum Shopping Centre, Dundrum Road, Dundrum, Dublin",
    venueLatLng: {
      lat: 53.289107,
      lng: -6.243293
    },
    hostedBy: "Ailem",
    contribution: "15",
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

export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)]
}

export const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    Object.assign({}, payload.event)
  ]
}

export const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)]
}


export default createReducer(initialState, {
    [CREATE_EVENT]: createEvent,
    [UPDATE_EVENT]: updateEvent,
    [DELETE_EVENT]: deleteEvent
})