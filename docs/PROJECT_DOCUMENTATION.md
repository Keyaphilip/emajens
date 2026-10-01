# EMAJENS

## Campus Emergency and Services Dashboard

---

## 1. Introduction

Emajens is a digital platform designed to provide students and members of a campus community with centralized access to emergency services, important campus information, and selected real-time services.

In many campus environments, information about emergencies, weather conditions, relevant news, and available services may be distributed across different channels. During an emergency or situation requiring timely information, searching through multiple platforms can delay access to useful information.

Emajens brings selected services together in one platform. Users can view relevant information, report emergencies, and access location-based services through a simple dashboard.

The system integrates external services through REST APIs while also providing its own backend for managing application-specific information such as emergency reports.

---

# 2. Background

Modern educational institutions rely heavily on digital systems to communicate information and provide services to their communities.

Students may need access to information such as:

* Emergency contacts
* Security announcements
* Weather conditions
* Important news
* Campus services
* Locations of relevant facilities
* Emergency reporting channels

When these services are disconnected, users may have difficulty finding the information they need quickly.

Emajens proposes a centralized platform where these services can be accessed through a single interface.

---

# 3. Problem Statement

Campus communities require timely access to information and services, particularly when dealing with emergencies or other situations that require immediate attention.

However, emergency reporting and important information may be distributed across different communication channels. This can make it difficult for users to quickly submit reports or obtain relevant information.

There is therefore a need for a centralized system that allows campus users to access essential information and report emergencies through a single platform.

---

# 4. Aim of the Project

The aim of Emajens is to develop a centralized campus emergency and services platform that enables users to access essential information and submit emergency reports through a single digital interface.

---

# 5. Objectives

## 5.1 Main Objective

To develop a centralized campus emergency and services dashboard that provides users with access to emergency reporting and essential real-time information.

## 5.2 Specific Objectives

The project aims to:

1. Develop a user-friendly and responsive dashboard for campus users.
2. Provide users with a mechanism for submitting emergency reports.
3. Display emergency reports and their current status.
4. Provide access to relevant weather information.
5. Provide relevant news and information through external services.
6. Provide location-related services where applicable.
7. Implement search and filtering functionality.
8. Integrate external REST APIs to retrieve relevant information.
9. Develop a backend API for managing application data.
10. Store emergency reports and related application data in a database.
11. Implement appropriate loading and error states.
12. Protect sensitive configuration and API credentials.
13. Test the application's API endpoints and major functionality.

---

# 6. Target Users

The intended users of the system include:

* Students
* Teaching staff
* Non-teaching staff
* Campus security personnel
* Campus administrators
* Other members of the campus community

Different users may eventually have different levels of access depending on their roles.

---

# 7. Proposed System Features

## 7.1 Emergency Reporting

Users will be able to submit reports about emergencies occurring within or around the campus.

An emergency report may contain:

* Emergency category
* Description
* Location
* Date and time
* Report status

Possible categories include:

* Security incident
* Medical emergency
* Fire
* Accident
* Suspicious activity
* Other emergency

The system can assign an initial status such as:

```text
Pending
Under Review
Resolved
```

---

## 7.2 Emergency Dashboard

The dashboard will provide an overview of reported emergencies.

Users with appropriate permissions may be able to view:

* Recent reports
* Emergency type
* Location
* Report status
* Time reported

This provides a centralized view of reported incidents.

---

## 7.3 Weather Information

The system will integrate a weather service to provide current weather information.

Depending on the selected API, the dashboard may display:

* Temperature
* Weather conditions
* Humidity
* Wind speed
* Weather forecast

This information can provide users with useful environmental information without requiring them to leave the application.

---

## 7.4 News and Information

The application may integrate a news service to provide relevant current information.

Possible information includes:

* Headlines
* Article descriptions
* Publication dates
* News sources
* Links to complete articles

Search and filtering can be used to improve accessibility.

---

## 7.5 Location Services

Where supported, the application can use location information to provide location-aware services.

Possible uses include:

* Identifying the user's approximate location
* Associating a location with an emergency report
* Displaying emergency locations
* Identifying nearby campus facilities

Location data should only be collected and stored where necessary for the application's functionality.

---

## 7.6 Search and Filtering

Users will be able to search and filter available information.

Examples include:

* Searching emergency reports
* Filtering reports by emergency category
* Filtering reports by status
* Searching available news

---

## 7.7 Notifications

A future version of the system may provide notifications when important emergency information is available.

Possible notification mechanisms include:

* In-app notifications
* Push notifications
* Email
* SMS

Notification functionality will depend on the final system requirements and available services.

---

# 8. System Architecture

Emajens will use a client-server architecture.

```text
                  ┌───────────────────────┐
                  │       User            │
                  └───────────┬───────────┘
                              │
                              ▼
                  ┌───────────────────────┐
                  │ React + TypeScript    │
                  │      Frontend         │
                  └───────────┬───────────┘
                              │
                         HTTP / REST
                              │
                 ┌────────────┴────────────┐
                 │                         │
                 ▼                         ▼
       ┌──────────────────┐      ┌──────────────────┐
       │ Emajens Backend  │      │ External APIs    │
       │ Node.js/Express  │      │                  │
       └────────┬─────────┘      │ Weather          │
                │                │ News             │
                │                │ Location/Maps    │
                │                └──────────────────┘
                ▼
       ┌──────────────────┐
       │     MongoDB      │
       └──────────────────┘
```

---

# 9. Technology Stack

## 9.1 Frontend

The frontend will be developed using:

* React
* TypeScript
* Vite
* HTML5
* CSS
* Fetch API or Axios

The frontend will be responsible for the user interface and communication with the backend and selected external services.

---

## 9.2 Backend

The backend will use:

* Node.js
* Express.js

The backend will handle:

* Emergency reports
* Application business logic
* Validation
* Database communication
* API endpoints
* Authentication where required

---

## 9.3 Database

MongoDB will be used to store application-specific information.

Potential collections include:

```text
users
emergencies
notifications
```

The exact database structure will be determined during implementation.

---

## 9.4 External APIs

The application may integrate external APIs for services such as:

* Weather
* News
* Maps/location

The final APIs will be selected based on their documentation, availability, usage restrictions, and suitability for the project.

---

## 9.5 Development Tools

Development and testing will use:

* Visual Studio Code
* Git
* GitHub
* Node.js
* Postman
* MongoDB tools
* Web browser

---

# 10. API Integration

APIs will allow Emajens to communicate with external services and retrieve information that would otherwise need to be maintained manually.

For example, when a user requests weather information:

```text
User
  │
  │ Requests weather
  ▼
Emajens Frontend
  │
  │ HTTP Request
  ▼
Weather API
  │
  │ JSON Response
  ▼
Emajens
  │
  ▼
Weather Information
```

The system will work with standard HTTP methods where appropriate.

| Method    | Purpose               |
| --------- | --------------------- |
| GET       | Retrieve information  |
| POST      | Create a new resource |
| PUT/PATCH | Update a resource     |
| DELETE    | Delete a resource     |

The application's own backend will provide CRUD operations for resources such as emergency reports.

---

# 11. Proposed Backend API

The backend may provide endpoints such as:

```text
GET     /api/emergencies
GET     /api/emergencies/:id
POST    /api/emergencies
PUT     /api/emergencies/:id
DELETE  /api/emergencies/:id
```

### Example: Create Emergency Report

```http
POST /api/emergencies
```

Example request:

```json
{
  "type": "Security",
  "description": "Suspicious activity reported near the main gate",
  "location": {
    "latitude": -1.2864,
    "longitude": 36.8172
  }
}
```

Example response:

```json
{
  "success": true,
  "message": "Emergency report created successfully",
  "data": {
    "id": "example-id",
    "type": "Security",
    "status": "Pending"
  }
}
```

The final API structure may be modified during implementation.

---

# 12. Data Flow

The general data flow for an emergency report will be:

```text
User
  │
  │ Completes emergency form
  ▼
Frontend
  │
  │ POST request
  ▼
Backend API
  │
  ├── Validate data
  │
  ├── Process request
  │
  ▼
MongoDB
  │
  │ Store report
  ▼
Backend
  │
  │ JSON response
  ▼
Frontend
  │
  ▼
Display confirmation
```

---

# 13. Environment Configuration

Sensitive information such as API keys and database credentials should not be included directly in source code.

Environment variables will be used to store sensitive configuration.

Example:

```env
PORT=5000
MONGODB_URI=your_database_connection_string
WEATHER_API_KEY=your_weather_api_key
NEWS_API_KEY=your_news_api_key
```

The `.env` file will be excluded from Git using `.gitignore`.

Example:

```gitignore
node_modules/
.env
dist/
```

This prevents sensitive credentials from being accidentally published to GitHub.

---

# 14. Security Considerations

The system will consider several security measures, including:

* Input validation
* Authentication for protected resources
* Authorization based on user roles
* Secure storage of credentials
* Environment variables for API keys
* HTTPS in production
* Database access controls
* Appropriate error handling
* Rate limiting where necessary
* Minimization of unnecessary personal information

Emergency-related information may be sensitive, therefore access to certain information should be restricted according to user roles.

---

# 15. Testing Strategy

Testing will be performed throughout development.

## 15.1 Frontend Testing

The frontend will be tested for:

* Correct display of API data
* Form validation
* Emergency report submission
* Search functionality
* Filtering
* Loading states
* Error states
* Responsive layout

## 15.2 Backend Testing

Backend endpoints will be tested for:

* Successful requests
* Invalid requests
* Missing fields
* Database operations
* Error responses
* Authentication and authorization where implemented

## 15.3 API Testing

Postman will be used to test backend endpoints such as:

```text
GET
POST
PUT
DELETE
```

The tests will verify HTTP status codes, response structures, validation, and error handling.

---

# 16. Version Control

Git and GitHub will be used to manage the project source code.

The repository will contain the project's source code, documentation, configuration templates, and development history.

A typical workflow will be:

```text
Create feature
      ↓
Develop
      ↓
Test
      ↓
Commit
      ↓
Push to GitHub
```

Feature branches can be used for major functionality.

Example:

```bash
git checkout -b feature/emergency-reporting
```

After completing the feature:

```bash
git add .
git commit -m "Add emergency reporting"
git push -u origin feature/emergency-reporting
```

---

# 17. Proposed Project Structure

```text
emajens/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── types/
│   │   ├── assets/
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── server.js
│   │
│   ├── .env
│   └── package.json
│
├── docs/
│   └── PROJECT_DOCUMENTATION.md
│
├── .gitignore
└── README.md
```

---

# 18. Expected Outcomes

At the completion of the project, Emajens is expected to provide:

1. A functional campus services dashboard.
2. A mechanism for submitting emergency reports.
3. A backend API for managing emergency information.
4. Database storage for application data.
5. Integration with selected external APIs.
6. Search and filtering functionality.
7. Location-aware functionality where applicable.
8. Appropriate loading and error handling.
9. Secure handling of API credentials.
10. A documented and testable software system.

---

# 19. Future Enhancements

Future versions of Emajens could include:

* Mobile applications for Android and iOS
* Push notifications
* SMS emergency alerts
* Real-time emergency updates
* Interactive campus maps
* Security personnel dashboard
* Role-based access control
* Emergency response tracking
* Analytics and reporting
* Offline emergency reporting
* Integration with institutional security systems
* Integration with additional campus services

---

# 20. Conclusion

Emajens is intended to provide a centralized platform through which members of a campus community can access important information and report emergencies.

By combining emergency reporting, location services, weather information, news, and other relevant services within one platform, the system can provide users with a more convenient way to access information that may be useful during everyday campus activities and emergency situations.

The system uses modern web technologies and service integrations to provide a foundation that can be expanded with additional features and institutional services in future versions.

