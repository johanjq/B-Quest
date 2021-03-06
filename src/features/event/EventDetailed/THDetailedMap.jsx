import React from "react";
import { Segment, Icon } from "semantic-ui-react";
import GoogleMapReact from 'google-map-react'

const Marker = () => <Icon name='marker' size='big' color='red'/>

const THDetailedMap = ({ lat, lng }) => {
  const center = [lat, lng];
  const zoom = 15;
  return (
    <Segment attached="bottom" style={{padding: 0}} >
      <div style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAJ2SBrRr6J1Cm_ic9v0QBEtqHsBQKaikg" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker lat={lat} lng={lng}/>
        </GoogleMapReact>
      </div>
    </Segment>
  );
};

export default THDetailedMap;
