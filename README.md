### helsinki-bike-backend is one part of the pre-assignment. Front-end below: 
### [Front-end-part](https://github.com/linhngkh/helsinki-bike-frontend)

## Prerequisites
* Node.js v19.8.1
* NPM: 9.5.1
## Setup
1. Clone the repository to your local machine. ``git clone https://github.com/linhngkh/helsinki-bike-backend.git``
2. Open the project directory in your terminal.
``cd helsinki-bike-backend``
3. Run ``npm install`` to install all the required packages and dependencies.
## Running the Project locally
4. Make an ``.env``file and paste this MongoDB Atlas link ``MONGO_URI=mongodb+srv://linhng:linhng123@cluster0.ubkr5bf.mongodb.net/citybikes``
2. Run ``npm start`` to start the server. This will start the server on port 5000.
3. Open your browser and navigate to 
* http://localhost:5000/api/journeys for accessing Journeys database. 
* http://localhost:5000/api/stations for accessing Stations database.
5. At the same time, open your another browser and navigate to http://localhost:5173 after following instruction from front end part [here](https://github.com/linhngkh/helsinki-bike-frontend). You should now see the hel-bike application running.
## Surprise you with
#### Running backend in Docker 
You will see on the file that I tried to deploy backend on Docker but there are some issues when I tried to connect to MongoDB running in Docker container(for ex.: port mapping local mongodb(mongodb://127.0.0.1:27017), it shows that  have connected with database but the database is different). I think I will figure it out in near future. 
#### Running backend in Cloud
Instead, I deployed backend on Vercel by creating vercel.json file. 
Navigate to these links under to access to database: 
 * https://helsinki-bike-backend.vercel.app/api/journeys
 * https://helsinki-bike-backend.vercel.app/api/stations
