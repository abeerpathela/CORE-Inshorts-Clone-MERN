# 📰 Inshorts Clone - Enhanced Edition

A modern, feature-rich news application inspired by Inshorts, delivering news in 60 words or less!

## ✨ Features

### 🎨 Modern UI/UX
- **Complete Redesign**: Beautiful, clean, and premium look with smooth animations
- **Dark/Light Mode**: Toggle between light and dark themes
- **Responsive Design**: Perfectly optimized for mobile, tablet, and desktop
- **Card-based Layout**: Easy to read news cards with hover effects

### 🔍 Enhanced Functionality
- **Search**: Search news by title, description, or author
- **Category Filtering**: Filter news by categories (Sports, Entertainment, Politics, etc.)
- **Favorites**: Save your favorite articles (stored in localStorage)
- **Infinite Scroll**: Load more news as you scroll
- **Pagination**: Backend-supported pagination for efficient data fetching

### 🛡️ Improved Backend
- **Better Error Handling**: Proper error messages and status codes
- **Environment Variables**: Secure configuration management
- **API Enhancements**: Search, category filtering, and proper pagination support
- **Database Optimization**: Efficient querying with MongoDB

### ⚡ Performance & Quality
- **Loading States**: Skeleton loaders and loading indicators
- **Empty States**: User-friendly messages for empty results
- **Code Organization**: Clean, modular, and reusable code
- **Centralized State Management**: React Context for state management

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

#### 1. Backend Setup
```bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# Create a .env file in Backend directory
# Add your MongoDB URI:
DB_USERNAME=your_username
DB_PASSWORD=your_password
PORT=8000

# Start the server
npm start
```

#### 2. Frontend Setup
```bash
# Navigate to frontend directory
cd Frontend

# Install dependencies
npm install

# (Optional) Create a .env file in Frontend directory
REACT_APP_API_URL=http://localhost:8000

# Start the development server
npm start
```

### Usage
1. Open your browser and visit `http://localhost:3000`
2. Explore the news articles!
3. Use the search bar to find specific news
4. Click on categories to filter news
5. Toggle dark/light mode for comfortable reading
6. Click the heart icon to save articles to favorites

## 📁 Project Structure

```
Inshorts-Clone/
├── Backend/
│   ├── connection/
│   │   └── db.js
│   ├── constant/
│   │   └── data.js
│   ├── controller/
│   │   └── news-controller.js
│   ├── model/
│   │   └── news.js
│   ├── routes/
│   │   └── Route.js
│   ├── index.js
│   ├── default.js
│   └── package.json
└── Frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Article.jsx
    │   │   ├── Articles.jsx
    │   │   ├── Header.jsx
    │   │   └── InfoHeader.jsx
    │   ├── service/
    │   │   └── api.js
    │   ├── App.js
    │   └── index.js
    └── package.json
```

## 🔧 API Endpoints

### Get News
```
GET /news?page=0&size=5&category=sports&search=cricket
```

### Get Categories
```
GET /categories
```

## 📱 Screenshots

> 📸 Add screenshots here to showcase the app!

## 🎯 Tech Stack

### Frontend
- React 17
- Material-UI (MUI)
- React Infinite Scroll
- Axios

### Backend
- Node.js
- Express
- MongoDB
- Mongoose

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- Inspired by [Inshorts](https://inshorts.com/)
- Built with ❤️ using React and Node.js
