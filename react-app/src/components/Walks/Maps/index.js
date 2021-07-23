import { useEffect, useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Maps from './maps';
// import styles from 
import dogFlagIcon from '../../../assets/img/dog-icon-4.png'

const MapContainer = () => {
    const key = process.env.REACT_APP_MAPS_API_KEY;
    const ref = useRef();
    const [ map, setMap ] = useState(null);
    // const [ marker1, setMarker1 ] = useState(null);
    // const [ marker2, setMarker2 ] = useState(null);
    // let [ count, setCount ] = useState(0);
    const myLatlng = { lat: 37.363, lng: -122.044 };
    const SanFransisco = { lat: 37.7749, lng: -122.4194 };
    // const NewYork = {lat: 37.756008006000215, lng: -122.4073820010392}
    let marker1 = null
    let marker2 = null

    function placeMarkerAndPanTo(latLng, map) {
        console.log("COORD from current marker placer:", latLng.lat(), latLng.lng())
        new window.google.maps.Marker({
            position: latLng,
            map: map,
            icon: dogFlagIcon,
            draggable: true,
        });
        map.panTo(latLng);
        };

    if (map != null) {
    map.addListener('click', (e) => {
        // setCount(count ++);
        // console.log(count)
        if (marker1 === null) {
            marker1 = ({ lat: e.latLng.lat(), lng: e.latLng.lng() });
        } else if (marker2 === null) {
            marker2 = ({ lat: e.latLng.lat(), lng: e.latLng.lng() });
        }
        if (marker1 !== null && marker2 !== null) {
            console.log("mark1:", marker1)
            console.log("mark2:", marker2)
            // getDirections(marker1, marker2);
            // getDirections(myLatlng, SanFransisco)
            // getDirections(marker1.getPosition(), marker2.getPosition());
        }
        placeMarkerAndPanTo(e.latLng, map);
    });
    }

    function getDirections(origin, destination) {
        if (map) {
        console.log('origin:', origin);
        console.log('destination:', destination);
        const directionsService = new window.google.maps.DirectionsService();
        // const directionsRenderer = new window.google.maps.DirectionsRenderer();
        directionsService.route({
            origin: origin,
            destination: destination,
            travelMode: window.google.maps.TravelMode.WALKING,
        }, function(response, status) {
            if (status === window.google.maps.DirectionsStatus.OK) {
                const { routes } = response;
                const { legs } = routes[0];
                const { steps } = legs[0];
                const { path } = steps[0];
                const pathCoordinates = path.map(function(c) {
                    return c.lat() + ',' + c.lng();
                });
                console.log(pathCoordinates);
                const polyline = new window.google.maps.Polyline({
                    path: pathCoordinates,
                    strokeColor: '#FF0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 3,
                    map: map,
                });
            } else {
                console.log('Directions request failed due to ' + status);
            }
        });
        }
    }

    // function getDirections(origin, destination) {
    //         console.log("Getting directions")
    //         const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${key}&mode=walking`;
    //     return fetch(url)
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             if (responseJson.status === 'OK') {
    //                     return responseJson;
    //                 }
    //                 throw new Error(`Error: ${responseJson.status}`);
    //             });
    //     }
        
        useEffect(() => {
        const onLoad = () =>
        
        setMap(new window.google.maps.Map(ref.current, {
            center: { lat: 37.7749, lng: -122.4194 },
            zoom: 12,
        }));

        if (!window.google) {
            const script = document.createElement(`script`);
            script.src =
            `https://maps.googleapis.com/maps/api/js?key=` +
            key;
            document.head.append(script);
            script.addEventListener(`load`, onLoad);
            return () => script.removeEventListener(`load`, onLoad);
        } else onLoad();
    }, []);
    
    
return (
    <>
        <h1> MAPS </h1>
        <div className="Maps__map" id="map" ref={ref}
        style={{ height: 500, width: 500 }}>

        </div>
        {/* <button onClick={getDirections(myLatlng, SanFransisco)}>Search!</button> */}
    </>
);
};

export default MapContainer;
// Write a function that sends a googlemap Directions API request
// to the server, using the user's current location.
// This function should be called when the user clicks the button.
// The function should send the following parameters:
// - origin: the user's current location
// - destination: the location the user clicked on the map
// - travelMode: 'walking'
// - key: the API key for the google maps directions API
// The function should return a Promise that resolves to a JSON object
// with the following properties:
// - status: 'OK'
// - route: an array of steps, each with the following properties:
//     - start_location: the starting location of the step
//     - end_location: the ending location of the step
//     - distance: the distance of the step
//     - duration: the duration of the step
//     - instruction: the text of the step
//     - polyline: a polyline encoding the route of the step
// The function should also update the map with a polyline encoding the route
// between the user's current location and the location the user clicked on the map.