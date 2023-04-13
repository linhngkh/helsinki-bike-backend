### helsinki-bike-backend is one part of the pre-assignment. Front-end below: 
### [Front-end-part](https://github.com/linhngkh/helsinki-bike-frontend)

## Prerequisites
* Node.js v19.8.1
* NPM: 9.5.1
* Docker
## Setup
1. Clone the repository to your local machine.
2. Open the project directory in your terminal.
3. Run ``npm install`` to install all the required packages and dependencies.
## Running the Project
1. Start the MongoDB container by running the command ``docker-compose up -d`` in your terminal. This will create a MongoDB instance and expose it on port 27017.
2. Run ``npm start`` to start the server. This will start the server on port 5000.
3. Open a new terminal window and navigate to the project directory.
4. Open your browser and navigate to 
* http://localhost:5000/api/journeys for accessing Journeys database. 
* http://localhost:5000/api/stations for accessing Stations database.
5. At the same time, open your another browser and navigate to http://localhost:5173 after following instruction for front end part [here](https://github.com/linhngkh/helsinki-bike-frontend). You should now see the React.js application running.


