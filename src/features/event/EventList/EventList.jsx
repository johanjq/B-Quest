import React, { Component } from 'react'
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {

    const {events, deleteEvent} = this.props;

    return (
      <div>
        {/*<h1>Treasure Hunt List</h1>*/}
        {events && events.map((event) => (
            <EventListItem 
            key={event.id} 
            event={event} 
            deleteEvent={deleteEvent}
            />
        ))}
      </div>
    )
  }
}
export default EventList;