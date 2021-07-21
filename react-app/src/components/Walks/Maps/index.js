import { useEffect, useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Maps from './maps';
// import styles from 

const MapContainer = () => {
    const key = process.env.REACT_APP_MAPS_API_KEY;
    // Use a useRef
    const ref = useRef();

    const [ map, setMap ] = useState();
    const options = {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12,
    }

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
        <div className="Maps__map" id="map1" ref={ref}
        style={{ height: 500, width: 500 }}>

        </div>
    </>
);
};

export default MapContainer;



// Track points to make a route. 