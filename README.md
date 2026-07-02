# 📰 CORE-Inshorts-Clone-MERN

A full-stack **Inshorts-inspired news application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The application delivers concise news articles through a clean, responsive interface, allowing users to browse the latest updates across multiple categories with a fast and intuitive reading experience.

---

# ✨ Features

## 👤 User Features

* Secure User Authentication
* Browse Latest News
* Category-wise News Feed
* Search News Articles
* Bookmark Articles
* Responsive Reading Experience
* User Profile Management
* Infinite Scroll / Pagination

## ⚙️ Core Features

* JWT Authentication
* RESTful APIs
* Responsive UI
* Protected Routes
* Error Handling
* Environment Variable Configuration
* Optimized Backend Architecture
* Clean and Modular Codebase

---

# 🛠 Tech Stack

## Frontend

* React.js
* JavaScript
* HTML5
* CSS3 / Tailwind CSS (if applicable)
* Axios

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt

---

# 📂 Project Structure

```text
CORE-Inshorts-Clone-MERN
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/CORE-Inshorts-Clone-MERN.git

cd CORE-Inshorts-Clone-MERN
```

---

## Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
NEWS_API_KEY=your_news_api_key
```

Start the backend:

```bash
npm start
```

---

## Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

---

# 🔐 Environment Variables

Configure the following:

* MongoDB Connection URI
* JWT Secret
* News API Key (if applicable)
* Client URL

---

# 📸 Screenshots

Add screenshots after deployment.

* Home Feed
* Category Page
* News Details
* Bookmarks
* User Profile
* Mobile View

---

# 📡 API Overview

Example endpoints:

```text
POST   /api/auth/register
POST   /api/auth/login

GET    /api/news
GET    /api/news/:id
GET    /api/news/category/:category

POST   /api/bookmarks
GET    /api/bookmarks
DELETE /api/bookmarks/:id

GET    /api/user/profile
```

---

# 📱 Responsive Design

* Desktop
* Tablet
* Mobile

---

# 🔒 Security

* JWT Authentication
* Protected Routes
* Password Hashing
* Input Validation
* Environment Variables
* Robust Error Handling

---

# 🚀 Future Improvements

* Personalized News Feed
* Trending Topics
* Dark Mode
* Push Notifications
* Multi-language Support
* Reading History
* AI-based News Recommendations
* Offline Reading

---

# 🤝 Contributing

Contributions, bug reports, and feature requests are welcome.

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

# 🙏 Acknowledgment

This project is based on the **MERN-Stack-Projects** repository by **Kunal Tyagi** and has been modified and enhanced with UI improvements, better project organization, optimized backend logic, additional functionality, and an improved user experience.

**Original Repository:**

https://github.com/kunaltyagi9/MERN-Stack-Projects
