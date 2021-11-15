Welcome to Furever Walks!
https://fureverwalks.herokuapp.com/

This app is built with a Python backend and Javascript frontend.
Furever Walks follows RESTful API conventions with most features including functional CRUD.
Tech stack for this app: Postgres -> Docker -> SQLAlchemy/Alembic -> Redux -> React

## For a deeper dive, check the following:
  * MVP - https://github.com/Rich-Supe/Furever-Walks/wiki/MVP-List
  * Backend Routes - https://github.com/Rich-Supe/Furever-Walks/wiki/API-Routes
  * Frontend Routes - https://github.com/Rich-Supe/Furever-Walks/wiki/Frontend-Routes
  * Database Schema - https://dbdiagram.io/d/60a59bb4b29a09603d15aa7f
  * User Stories - https://github.com/Rich-Supe/Furever-Walks/wiki/User-Stories
  
 ## Technologies Used

| Back-end    | Front-end |
| ---      | ---       |
| Python3 | JavaScript/HTML/CSS 3  |
| PostgreSQL     | React |
| SQLAlchemy |   Redux(Flux)    |
| Alembic | Google Maps API |
| Docker | SwiperJs |
| AWS S3 |  Heroku(deployment)  |

# Stack Explanation:

### Docker: 
##### While using docker on a small scale app may seem like an unneccesary extravagance at first glance, We found it to be a great learning (and practice) opportunity to implement the following:
* Dockerfiles
* Images
* Containers

### Redux(with flux architecture): 
##### Similar to Docker, Redux can be easily replaced with other methods such as modern react context. Our choice to go with Redux to manage our application's state is simply to continue to learn/practice how to create and maintain scalable applications

## Maps Api
*Implementing the map into our app
```javascript
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
```
* Adding functionality to our map:
```javascript
function getDirections(origin, destination) {
        if (map) {
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
                // convert path coords to latlngs:
                 const newCoords = []
                 pathCoordinates.forEach(coord => {
                     newCoords.push(new window.google.maps.LatLng(coord));
                 });
                 const polyline = new window.google.maps.Polyline({
                     path: newCoords,
                     strokeColor: '#FF0000',
                     strokeOpacity: 1.0,
                     strokeWeight: 3,
                     map: map,
                 });
                distance = (legs[0].distance.text)
                duration = (legs[0].duration.text)
                handleCallback({distance, duration})
                directionsRenderer.setDirections(response);
            } else {
                return ('Directions request failed due to ' + status);
            }
        });
        }
    }
