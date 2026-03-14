# Development Flow

This project follows a layered backend architecture that separates
routing, request handling, business logic, and database interaction.

---

Typical Request Lifecycle

1. Client sends a request
2. Request hits the API route
3. Middleware processes request
4. Controller handles request
5. Controller calls service layer
6. Service performs business logic
7. Service interacts with database model
8. Data is returned to controller
9. Controller sends response to client

---

Request Flow Diagram

Client (Next.js)
|
v
Route Layer
|
v
Middleware Layer
|
v
Controller Layer
|
v
Service Layer
|
v
Database Model
|
v
MongoDB
|
v
Response returned to client

---

Example Flow: Create Expense

Client Request

POST /expenses

Body

{
"categoryId": "123",
"amount": 200,
"notes": "Lunch",
"date": "2025-09-20"
}

---

Step 1: Route

routes/expense.routes.js

Receives request and forwards it to controller.

---

Step 2: Middleware

middlewares/auth.middleware.js

Checks if user is authenticated.

If authentication fails, request is rejected.

---

Step 3: Controller

controllers/expense.controller.js

Responsibilities:

- Extract request data
- Call service layer
- Return API response

---

Step 4: Service Layer

services/expense.service.js

Responsibilities:

- Validate category ownership
- Prepare expense data
- Perform database operations

---

Step 5: Model

models/expense.model.js

Mongoose schema handles interaction with MongoDB.

---

Step 6: Database

MongoDB stores the expense record.

---

Step 7: Response

Controller sends success response to client.

Example Response

{
"success": true,
"data": {
"expenseId": "abc123",
"amount": 200
}
}

---

Benefits of This Architecture

- Separation of concerns
- Easier testing
- Cleaner controllers
- Scalable codebase
- Easier feature expansion
