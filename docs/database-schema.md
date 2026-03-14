# Database Schema

Database: MongoDB

The application uses three primary collections:

1. Users
2. Categories
3. Expenses

---

Users Collection

Represents registered users.

Fields

\_id
Unique identifier for user

name
User full name

email
User email address (unique)

passwordHash
Hashed password (bcrypt)

refreshTokenHash
Stored refresh token hash

createdAt
Timestamp when user was created

updatedAt
Timestamp when user was last updated

---

Categories Collection

Represents categories created by a user.

Each category belongs to a specific user.

Fields

\_id
Unique category ID

userId
Reference to user

name
Category name (Food, Rent, Travel, etc)

createdAt
Timestamp when category was created

updatedAt
Timestamp when category was updated

---

Expenses Collection

Represents individual expense entries.

Fields

\_id
Unique expense ID

userId
Reference to user

categoryId
Reference to category

amount
Expense amount

notes
Optional text describing expense

date
Date when expense occurred

createdAt
Timestamp when record was created

updatedAt
Timestamp when record was updated

---

Relationships

User → Categories (One to Many)

User → Expenses (One to Many)

Category → Expenses (One to Many)

---

Indexes

users.email

expenses.userId
expenses.date
expenses.categoryId

categories.userId
