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
<br/>
Read: GET /api/organization/:id<br/>
Update: PUT /api/organization/:id<br/>
Delete: DELETE /api/organization/:id<br/>

## Personal Details
Create: POST /api/personal-details/create<br/>
Read: GET /api/personal-details/:id<br/>
Update: PUT /api/personal-details/:id<br/>
Delete: DELETE /api/personal-details/:id<br/>

# Authentication
Secure your API routes by including a valid JWT token in the Authorization header.
For the secret key, please visit the config.js file.

# Authorization
To fetch data from the server, first generate your token and add it to the header in the proper format.
# Screenshots
## Store the data on the server using the POST method
![Screenshot (1068)](https://github.com/Shubham1734/Auxilo-project/assets/93915712/cc2c4f35-9c43-46d7-8ab8-52397ab596a5)

## Retrieve the data from the server using the GET method
![Screenshot (1069)](https://github.com/Shubham1734/Auxilo-project/assets/93915712/e08aaf31-684b-4115-80f0-4ef2a79196b1)


