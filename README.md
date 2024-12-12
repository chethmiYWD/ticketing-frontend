
# Real-Time Ticketing System

The Real-Time Ticketing System is a multi-threaded application designed to simulate real-time ticket distribution and booking. It is built with a focus on concurrency, efficiency, and user-friendly operation. The system provides a graphical user interface (GUI) for customers and vendors to interact with the ticketing platform while a backend handles ticket allocation, retrieval, and logging.




## Setup Instructions

Ensure that the following are installed on your system:

Java JDK: Version 11 or higher.

Node.js: Version 16 or higher.

Angular CLI: Version 15 or higher.

MongoDB: Version 6 or higher (for data persistence).

### Backend Setup

Clone the backend repository
git clone <https://github.com/chethmiYWD/ticketing-Backend.git>
cd ticketing-backend

Build the Spring Boot Application 
./mvnw clean install 

Run the application
./mvnw spring-boot:run

The backend will start at http://localhost:8080.

### Frontend Setup

Clone the frontend repository
git clone <https://github.com/chethmiYWD/ticketing-frontend.git>
cd tickeint-frontend

Install dependencies
npm install

Run the Angular application
ng serve

The frontend will be available at http://localhost:4200

### CLI Setup

Clone the CLI repository
git clone <https://github.com/chethmiYWD/TicketingSystem.git>
cd TicketingSystem






## Usage Instructions

### Configuring the System

Update configurations for the backend in the application.properties file and setup the MongoDB connection string.

MongoDB should be running and accessible for persistent storage

### Starting the System

Start the Spring Boot application as described in the setup

Run the Angular application

Ensure that MongoDB is running

Use the CLI for direct commands and monitoring

### UI Controls

#### Customer Dashboard

Customer registration and login interface

Filter events by name or artist using the search bar

View event details 

Use the "Book Ticket" button on an event card to reserve a ticket

Logout feature

#### Vendor Dashboard

Vendor login feature by role identification

Manage ticket releases for events

Logout feature
## Additional Notes

For debugging, use backend logs and MongoDB collections

Ensure network connectivity between the frontend and backend services