import React, {Component} from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

import {MAP_URL} from "../../../constants";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap defaultZoom={12} defaultCenter={{lat: props.latitude, lng: props.longitude}}>
        <Marker position={{lat: props.latitude, lng: props.longitude}}/>
    </GoogleMap>
));

class Map extends React.Component {
    render() {
        return (
            <MapWithAMarker
                latitude={this.props.latitude}
                longitude={this.props.longitude}
                googleMapURL={MAP_URL}
                loadingElement={<div style={{height: `100%`}}/>}
                containerElement={<div style={{height: `400px`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
            />
        )
    }
}

export default Map;