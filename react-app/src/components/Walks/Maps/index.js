import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import Maps from './maps';
import styles from '../../../css-modules/MapContainer.module.css'
import dogFlagIcon from '../../../assets/img/dog-icon-4.png'
import getMapStats from '../../../store/maps'

const MapContainer = ({handleCallback}) => {
    const dispatch = useDispatch();
    const key = process.env.REACT_APP_MAPS_API_KEY;
    const ref = useRef();
    // console.log("Hopefully a function", handleCallback)
    const [ map, setMap ] = useState(null);
    // const [ distance, setDistance ] = useState(null);
    // const [ duration, setDuration ] = useState(null);
    // const [ marker1, setMarker1 ] = useState(null);
    // const [ marker2, setMarker2 ] = useState(null);
    // let [ count, setCount ] = useState(0);
    // const myLatlng = { lat: 37.36323, lng: -122.04423 };
    // const SanFransisco = { lat: 37.774923, lng: -122.419423 };
    // const NewYork = {lat: 37.756008006000215, lng: -122.4073820010392}
    let marker1 = null
    let marker2 = null
    let distance = null
    let duration = null
    // let count = 0;

    function placeMarkerAndPanTo(latLng, map) {
        // console.log("COORD from current marker placer:", latLng.lat(), latLng.lng())
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
        // count ++;
        // console.log(count)
        // if (marker1 !== null && marker2 !== null) {
        //     console.log("mark1:", marker1)
        //     console.log("mark2:", marker2)
        //     // getDirections(marker1, marker2);
        //     // getDirections(myLatlng, SanFransisco)
        //     // getDirections(marker1.getPosition(), marker2.getPosition());
        // }
        placeMarkerAndPanTo(e.latLng, map);
    });
    }

    function getDirections(origin, destination) {
        if (map) {
        // console.log('origin:', origin);
        // console.log('destination:', destination);
        const directionsService = new window.google.maps.DirectionsService();
        const directionsRenderer = new window.google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);
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
                // convert path coords to latlngs:`
                // console.log("legs", legs);
                // console.log("Distance", legs[0].distance.text)
                // console.log("Duration", legs[0].duration.text)
                // console.log("steps", steps);
                // console.log("path", path);  
                // const newCoords = []
                // pathCoordinates.forEach(coord => {
                //     newCoords.push(new window.google.maps.LatLng(coord));
                // })
                // console.log("New coords:", newCoords)
                // const polyline = new window.google.maps.Polyline({
                //     path: newCoords,
                //     strokeColor: '#FF0000',
                //     strokeOpacity: 1.0,
                //     strokeWeight: 3,
                //     map: map,
                // });
                distance = (legs[0].distance.text)
                duration = (legs[0].duration.text)
                console.log("Dist/Duration:", distance, duration)
                // dispatch(getMapStats({distance, duration}))
                handleCallback({distance, duration})
                directionsRenderer.setDirections(response);
                // console.log("directionsRenderer:", directionsRenderer)
            } else {
                console.log('Directions request failed due to ' + status);
            }
        });
        }
    }

    // function getDirections(origin, destination) {
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
    <div className={styles.mapContainer}>
        <h1>PLAN YOUR WALK ROUTE</h1>
        <div className={styles.map} id="map" ref={ref}
        // style={{ height: 500, width: 1000 }}
        >
        </div>
        <button className={styles.mapBtn} onClick={() => getDirections(marker1, marker2)}>SEARCH</button>
        {/* <button onClick={() => getDirections(myLatlng, SanFransisco)}>Search!</button> */}
    </div>
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




// MITCH'S CODE
// function initMap() {
//     var directionsService = new google.maps.DirectionsService();
//     var directionsRenderer = new google.maps.DirectionsRenderer();
//     var chicago = new google.maps.LatLng(41.850033, -87.6500523);
//     var mapOptions = {
//       zoom:7,
//       center: chicago
//     }
//     var map = new google.maps.Map(document.getElementById('map'), mapOptions);
//     directionsRenderer.setMap(map);
//   }
//   function calcRoute() {
//     var start = document.getElementById('start').value;
//     var end = document.getElementById('end').value;
//     var request = {
//       origin: start,
//       destination: end,
//       travelMode: 'DRIVING'
//     };
//     directionsService.route(request, function(result, status) {
//       if (status == 'OK') {
//         directionsRenderer.setDirections(result);
//       }
//     });
//   }