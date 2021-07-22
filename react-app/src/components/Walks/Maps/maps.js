import React from 'react';
import { GoogleMap, Marker } from 'react-google-maps';

const containerStyle = {
    width: '400px',
    height: '400px',
};

const center = {
    lat: 38.9072,
    lng: 77.0369,
};

const Maps = () => {
    
    // const { isLoaded } = useJsApiLoader({
        // id: 'google-map-script',
        // googleMapsApiKey: key,
        // });
        
        console.log('APIIIII------', key)
        
    return (
        <>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            />
    </>
    );
};

export default React.memo(Maps)
const key = process.env.REACT_APP_MAPS_API_KEY;

import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
))

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default MyFancyComponent;