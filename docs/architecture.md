# System Architecture

This project is a full-stack expense tracking application designed to help users
track, categorize, and analyze their daily expenses.

The system consists of three main components:

1. Frontend (Next.js)
2. Backend API (Node.js + Express)
3. Database (MongoDB)

---

High Level Architecture

Frontend (Next.js)
|
v
Backend API (Express)
|
v
Business Logic Layer (Services)
|
v
Database Models (MongoDB)
|
v
Database Storage

---

Backend Architecture

The backend follows a layered architecture to separate concerns and keep the
codebase maintainable and scalable.

Each layer has a specific responsibility.

---

config/

Responsible for application configuration.

Responsibilities:

- Database connection setup
- Environment configuration
- Third-party service configuration

Example:
config/db.js

---

models/

Responsible for defining database schema.

Responsibilities:

- Define data structure
- Define relationships between collections
- Handle database interaction through ODM (Mongoose)

Examples:
models/user.model.js
models/expense.model.js
models/category.model.js

---

routes/

Responsible for defining API endpoints.

Responsibilities:

- Define REST endpoints
- Attach middleware
- Forward request to controllers

Example:

POST /expenses
GET /expenses
DELETE /expenses/:id

---

controllers/

Controllers handle HTTP request and response.

Responsibilities:

- Read request data (req.body, req.params, req.query)
- Call appropriate services
- Return structured API responses

Controllers should not contain heavy business logic.

Example:

expense.controller.js
auth.controller.js

---

services/

Services contain the main business logic.

Responsibilities:

- Implement application logic
- Perform validations related to business rules
- Call database models
- Coordinate multiple operations

Example logic:

- Creating an expense
- Calculating totals
- Validating category ownership

---

middlewares/

Middleware functions execute before controllers.

Responsibilities:

- Authentication
- Authorization
- Request validation
- Error handling

Example:

auth.middleware.js

---

validators/

Responsible for validating incoming request data.

Responsibilities:

- Validate request body
- Validate query parameters
- Ensure API receives correct data format

Example:

expense.validator.js

---

utils/

Utility functions used across the application.

Responsibilities:

- Password hashing
- JWT generation
- Date formatting
- Reusable helper functions

Example:

utils/hash.js
utils/jwt.js

---

constants/

Stores reusable constant values.

Responsibilities:

- Application constants
- Default values
- Static configuration

Example:

constants/categories.js

---

Entry Files

app.js

Responsible for configuring the Express application.

Responsibilities:

- Initialize Express
- Register middlewares
- Register routes

server.js

Responsible for starting the server.

Responsibilities:

- Start Express server
- Connect to database
- Start listening on defined port
