# REST API Checkpoint — Users CRUD with Express & Mongoose

## 📌 Project Description
This is a simple REST API built with **Node.js**, **Express**, and **Mongoose** for managing users in a MongoDB database.  
The API supports **CRUD operations** (Create, Read, Update, Delete) and uses **MongoDB Atlas** as the database.

---

## 📂 Folder Structure
```markdown
project-root/
│
├── config/
│   └── .env           # Environment variables (MongoDB URI, Port)
│
├── models/
│   └── User.js        # Mongoose schema and model definition
│
├── server.js          # Main server file
│
└── README.md          # Project documentation

````

---

## ⚙️ Installation & Setup

1. **Clone this repository** (or create a new folder)
   ```bash
   git clone <repo-url>
   cd project-folder
````

2. **Initialize project (if not already done)**

   ```bash
   npm init -y
   ```

3. **Install dependencies**

   ```bash
   npm install express mongoose dotenv
   ```

4. **Configure environment variables**

   * Inside `config/.env`, add:

     ```
     PORT=5000
     MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/rest_checkpoint
     ```

5. **Run the server**

   ```bash
   npx nodemon server.js
   ```

   Or:

   ```bash
   node server.js
   ```

---
````
## 🚀 API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/users`     | Get all users     |
| POST   | `/users`     | Create a new user |
| PUT    | `/users/:id` | Update user by ID |
| DELETE | `/users/:id` | Delete user by ID |
````
---

## 📬 Example Request (POST)
````
**URL:** `http://localhost:5000/users`
**Method:** POST
**Body (JSON):**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

---
````
## 🧪 Testing

You can test all routes using **Postman**:

* GET → Fetch all users
* POST → Add a new user
* PUT → Edit a user by ID
* DELETE → Remove a user by ID
````
---
````
## 📝 Notes

* The database is connected to **MongoDB Atlas**.
* Don’t forget to comment your code before submission.
* Make sure `.env` is **NOT** pushed to GitHub (add it to `.gitignore`).
````
---

## 👨‍💻 Author

**Thafsouthe HASSANI**

```

---# rest-checkpoint
