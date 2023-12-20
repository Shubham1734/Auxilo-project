# Node.js MongoDB CRUD Project with JWT Authentication
A simple Node.js project demonstrating CRUD (Create, Read, Update, Delete) operations with MongoDB and JWT (JSON Web Token) authentication.

## Introduction

This project serves as a template for a Node.js application with MongoDB integration for CRUD operations. JWT authentication is implemented to secure the API endpoints.

## Features

- Create, Read, Update, and Delete operations for organizations and personal details.
- JWT authentication for secure API access.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose (ODM for MongoDB)
- JSON Web Token (JWT)

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB server running

# ER diagram
schema
```typescript
type organization = {
name : string,
location : string,
organizationId: Number,
emp_id : Number,
}

type personalDetails = {
  name: String,
  age: Number,
  mob : Number,
  emp_id: Number,
}
```

# API Documentation
## Organization Details
Create: POST /api/organization/create
Read: GET /api/organization/:id
Update: PUT /api/organization/:id
Delete: DELETE /api/organization/:id

## Personal Details
Create: POST /api/personal-details/create
Read: GET /api/personal-details/:id
Update: PUT /api/personal-details/:id
Delete: DELETE /api/personal-details/:id

# Authentication
Secure your API routes by including a valid JWT token in the Authorization header.
For the secret key, please visit the config.js file.

# Authorization
To fetch data from the server, first generate your token and add it to the header in the proper format.

