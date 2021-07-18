Welcome to Furever Walks!

This app is built with a Python backend and Javascript frontend.
Furever Walks follows RESTfulAPI conventions with most features including functional CRUD.
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
