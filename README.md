<<<<<<< HEAD
# SEO Analyzer Web App

A powerful single-page web application that helps content creators optimize their text for search engines. Perfect for analyzing blogs, newsletters, tweets, or social media captions to improve their SEO performance.

## 🌟 Features

### Content Analysis
- 📊 Detailed Content Statistics
  - Word count
  - Sentence count
  - Character count
  - Keyword density

- 📖 Smart Readability Analysis
  - Easy/Medium/Hard score
  - Based on Flesch Reading Ease formula
  - Helps make content more accessible


### Grammer Check
- 📊 Detailed Grammer correction
  - Automated Grammar and Spelling Suggestions
  - Spelling mistakes detection
  - Grammar errors like verb agreement, punctuation, etc.
  - Suggestions for correction with brief explanations
  - Highlights incorrect phrases or sentences
  - Sentence structure improvement tips


### Keyword Tools
- 🔑 Intelligent Keyword Analysis
  - Identifies most relevant keywords
  - Shows keyword frequency
  - Calculates keyword density
  - Suggests optimization opportunities

- ✨ Smart Keyword Insertion
  - One-click keyword insertion
  - Maintains text coherence
  - Automatically finds best placement
  - Preserves original content flow

### SEO Optimization
- 💡 Real-time SEO Suggestions
  - Content length recommendations
  - Keyword distribution advice
  - Readability improvements
  - Best practices tips

## 🚀 Getting Started

### Prerequisites
- Node.js (14.0 or higher)
- npm (6.0 or higher)
- Modern web browser
  - Chrome (recommended)
  - Firefox
  - Safari
  - Edge

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd seo-analyzer-app
```

2. Install backend dependencies:
```bash
cd server
npm install
```

3. Install frontend dependencies:
```bash
cd ../client
npm install
```

### Running the Application

1. Start the backend server:
```bash
cd server
npm start
```
Server runs at http://localhost:5000

2. Start the frontend (in a new terminal):
```bash
cd client
npm start
```
Application opens at http://localhost:3000

## 📝 How to Use

1. **Input Your Content**
   - Open the application in your browser
   - Paste your text in the input area
   - Click "Analyze Text"

2. **View Analysis Results**
   - See readability score
   - Review content statistics
   - Check keyword analysis
   - Read SEO suggestions

3. **Optimize Your Content**
   - Review suggested keywords
   - Click "Insert" next to any keyword
   - See real-time text updates
   - Review the improved content

## 🔧 Technical Architecture

### Frontend (React)
- Single-page application
- Real-time content updates
- Responsive design
- Modern UI/UX

### Backend (Node.js + Express)
- RESTful API endpoints
- Text analysis engine
- Keyword extraction algorithm
- Smart keyword insertion logic

## 📁 Project Structure

```
seo-analyzer-web-app/
├── README.md                            # Project Documentation
├── package.json
├── render.yaml
├── client                               # Frontend React Application
│   ├── README.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json                     # Frontend dependencies
│   ├── vite.config.js
│   ├── public                           # static files
│   │   ├── leftsvg.svg
│   │   ├── rightsvg.svg
│   │   └── vite.svg
│   └── src
│       ├── App.css                      # Application styles
│       ├── App.jsx                      # Main application component
│       ├── assets        
│       ├── config.js
│       ├── index.css                    
│       └── main.jsx
└── server                               # Backend Node.js server
    ├── index.js                         # Server Implementation
    ├── package-lock.json
    ├── package.json                     # Backend dependencies
    └── routes
        └── nlp.js
```

## 🛠️ API Endpoints

### POST /analyze
- Analyzes submitted text
- Returns SEO metrics and suggestions
- Provides keyword recommendations
- Check for any possible grammatical corrections

### POST /insert-keyword
- Handles keyword insertion
- Maintains text coherence
- Returns updated content

## 💻 Development

The application is built with modern web technologies and follows best practices for:
- Clean code architecture
- Responsive design
- Error handling
- User experience
=======
# InsightSEO
>>>>>>> 450706a8240eef2a082df5eb948ece0173ead967
