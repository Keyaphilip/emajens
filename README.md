# Emajens — Campus Emergency & Services Dashboard

Emajens is a web-based campus emergency and services dashboard designed to provide students and staff with centralized access to emergency reporting, location information, weather updates, news, and other relevant campus services.

The system uses a client-server architecture, with a React and TypeScript frontend communicating with a Node.js and Express backend. External APIs are integrated to provide real-time information and services.

## Project Objectives

The main objective of Emajens is to develop a centralized platform that enables users to access essential campus information and submit emergency reports through a single application.

Specific objectives include:

* Provide a platform for submitting and managing emergency reports.
* Provide users with relevant weather information.
* Integrate external news and information services.
* Provide location-based information where applicable.
* Implement RESTful APIs for communication between the frontend and backend.
* Provide appropriate loading, validation, and error-handling mechanisms.
* Store and manage emergency-related data using MongoDB.

## Key Features

### Emergency Reporting

Users can submit emergency reports containing relevant information about an incident.

The system is designed to support:

* Emergency type
* Description
* Location
* Date and time
* Report status
* Additional relevant information

### Emergency Dashboard

Authorized users can view and manage submitted emergency reports.

The dashboard can support operations such as:

* Viewing emergency reports
* Searching and filtering reports
* Viewing individual report details
* Updating report status
* Deleting reports where appropriate

### Weather Information

The application integrates an external weather API to provide current weather information for a selected location.

### News and Information

The system can retrieve relevant news or information from an external API and present it within the application.

### Location Services

Location functionality can be used to identify or display the geographical location associated with an emergency report.

### Search and Filtering

Users can search and filter information to make it easier to locate specific emergency reports or services.

### Error and Loading Handling

The application provides appropriate feedback while data is being retrieved or processed and handles common API and network errors.

## System Architecture

```text
+-------------------------+
|        User             |
+------------+------------+
             |
             v
+-------------------------+
| React + TypeScript      |
| Frontend                |
+------------+------------+
             |
             | HTTP / REST API
             v
+-------------------------+
| Node.js + Express       |
| Backend                 |
+------------+------------+
             |
       +-----+-----+
       |           |
       v           v
+-------------+  +------------------+
| MongoDB     |  | External APIs    |
| Database    |  | Weather / News   |
+-------------+  +------------------+
```

## Technology Stack

### Frontend

* React
* TypeScript
* Vite
* HTML5
* CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### External Services

* Weather API
* News API
* Location/Geolocation services

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Postman

## Project Structure

```text
emajens/
├── README.md
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── backend/
│   ├── src/
│   ├── package.json
│   └── ...
├── docs/
│   └── PROJECT_DOCUMENTATION.md
├── .env.example
├── .gitignore
└── ...
```

## Getting Started

### Prerequisites

Ensure the following are installed on your computer:

* Node.js
* npm
* Git
* MongoDB or access to MongoDB Atlas
* Visual Studio Code or another suitable code editor

### Clone the Repository

```bash
git clone https://github.com/Keyaphilip/emajens.git
cd emajens
```

### Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The terminal will provide the local development address.

### Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install the dependencies:

```bash
npm install
```

Start the backend development server using the project's configured development command.

For example:

```bash
npm run dev
```

## Environment Variables

API keys, database credentials, and other sensitive configuration values should not be stored directly in the source code.

Create a `.env` file in the appropriate project directory and configure the required variables.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
WEATHER_API_KEY=your_weather_api_key
NEWS_API_KEY=your_news_api_key
```

A `.env.example` file should be included in the repository to document the required variables without exposing actual credentials.

The `.env` file should be excluded from Git using `.gitignore`.

## API Integration

Emajens uses APIs to allow the frontend, backend, database, and external services to communicate.

The backend exposes RESTful endpoints for managing emergency reports.

Example endpoints:

```text
GET     /api/emergencies
GET     /api/emergencies/:id
POST    /api/emergencies
PUT     /api/emergencies/:id
DELETE  /api/emergencies/:id
```

External APIs may be used for services such as:

```text
Weather information
News and information
Geolocation
```

API responses are handled as JSON where applicable.

## API Testing

Postman can be used to test the backend endpoints independently of the frontend.

Example operations include:

```text
GET     Retrieve emergency reports
POST    Create an emergency report
PUT     Update an emergency report
DELETE  Remove an emergency report
```

Testing the backend independently makes it easier to identify API, validation, database, and authentication issues before integrating the endpoints with the frontend.

## Development Workflow

The project uses Git for version control.

A typical development workflow is:

```bash
git status
git add .
git commit -m "Describe the changes"
git push
```

Development should be organized into logical commits so that changes can be tracked and previous versions can be restored when necessary.

## Security Considerations

Security will be considered throughout the development process.

Important considerations include:

* Never commit API keys or database credentials.
* Validate user input on the backend.
* Implement appropriate authentication and authorization for protected operations.
* Restrict database access.
* Use HTTPS when deployed to production.
* Implement appropriate error handling without exposing sensitive system information.
* Apply rate limiting where appropriate.
* Protect emergency-related information from unauthorized access.

## Development Roadmap

### Phase 1 — Project Setup

* Initialize the frontend.
* Configure the backend.
* Configure Git and GitHub.
* Establish the project structure.

### Phase 2 — Frontend Development

* Develop the application interface.
* Implement navigation.
* Create emergency reporting forms.
* Create dashboard components.
* Implement loading and error states.

### Phase 3 — Backend Development

* Configure Express.
* Create REST API endpoints.
* Implement request validation.
* Connect MongoDB.
* Implement emergency report management.

### Phase 4 — External API Integration

* Integrate weather services.
* Integrate news services.
* Implement location functionality.
* Handle API failures and unavailable services.

### Phase 5 — Testing

* Test frontend components.
* Test backend endpoints.
* Test database operations.
* Test external API integrations.
* Perform integration testing.
* Test error and validation scenarios.

### Phase 6 — Deployment

* Configure production environment variables.
* Deploy the frontend.
* Deploy the backend.
* Configure the production database.
* Configure external API credentials.
* Perform production testing.

## Future Enhancements

Potential future improvements include:

* User authentication and role-based access control.
* Real-time emergency notifications.
* SMS-based emergency alerts.
* Push notifications.
* Emergency response tracking.
* Administrative analytics.
* Integration with campus security services.
* Mobile application support.
* Audit logging.
* Improved offline functionality.

## Documentation

Detailed information about the system, including its background, problem statement, objectives, architecture, API design, security considerations, testing strategy, and expected outcomes is available in:

```text
docs/PROJECT_DOCUMENTATION.md
```

## Author

Keya Philip
