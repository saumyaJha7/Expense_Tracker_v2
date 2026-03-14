# API Design

The backend follows RESTful API design.

All endpoints return JSON responses.

Authentication uses JWT tokens.

---

Authentication APIs

POST /auth/register

Create a new user.

Body

{
"name": "User Name",
"email": "user@email.com",
"password": "password"
}

---

POST /auth/login

Authenticate user and return token.

Body

{
"email": "user@email.com",
"password": "password"
}

---

GET /auth/me

Return current logged in user.

Requires authentication.

---

Category APIs

POST /categories

Create a new category.

Body

{
"name": "Food"
}

---

GET /categories

Return all categories for current user.

---

DELETE /categories/:id

Delete a category.

---

Expense APIs

POST /expenses

Create a new expense.

Body

{
"categoryId": "123",
"amount": 200,
"notes": "Lunch",
"date": "2025-09-20"
}

---

GET /expenses

Return all expenses.

Supports optional filters.

Examples

GET /expenses?month=9

GET /expenses?category=food

GET /expenses?startDate=2025-09-01&endDate=2025-09-30

---

PUT /expenses/:id

Update an expense.

---

DELETE /expenses/:id

Delete an expense.

---

Analytics APIs

GET /analytics/monthly

Return monthly summary of expenses.

Response Example

{
"total": 5000,
"categories": [
{"name": "Food", "amount": 2000},
{"name": "Rent", "amount": 3000}
]
}
