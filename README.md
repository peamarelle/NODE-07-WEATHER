# node-07-weather

# HOW TO INSTALL DEPENDENCES

* Clone the repository git clone https://github.com/peamarelle/node-07-weather.git

* go to directory cd node-06-restserver

* Run command npm install

* Generate .env file with mapbox apikey.

# Scripts

* Run npm run dev to nodemon mode.

* npm start to deploy aplication in production env.

* Run node index to traditional mode.

# PACKAGES

* express (create server and API-REST´s endpoints).
* nodemon (aplication refresh whenever we modify code).
* morgan (request and response informartion).
* dotenv (enviroment variables).
* winston (logger to app´s operations ).
* swagger-ui-express (For api documentation).
* axios (to comunication with others apis).

# Servers

* http://localhost:5000/api/v1 (development).


# Routes

* GET /weather/{city} (get list of cities with named as url param in Json format).
* GET /documentation (api documentation).