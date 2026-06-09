# LearnHub - Modern Online Education Platform

LearnHub is a high-performance, responsive online education platform built with **React 19** and **Bootstrap 5**. It provides a seamless user experience for browsing courses, managing a course cart, and interacting with an AI-powered study mentor.

![LearnHub Preview](https://github.com/user-attachments/assets/f9158f62-e0a2-42ae-8728-ba36b77d4585)

## 🚀 Key Features

- **🌓 Dynamic Dark Mode**: System-wide dark mode support with persistent state using React Context and `localStorage`.
- **🛒 Course Cart System**: Real-time enrollment management allowing users to browse, add, and remove courses globally.
- **🤖 AI Study Mentor**: A persistent, professional AI assistant available on every page to guide students through their learning journey.
- **💳 Mock Checkout Flow**: A secure-looking payment experience with a post-purchase success state.
- **📱 Mobile-First Design**: Fully responsive UI optimized for all devices using Bootstrap 5 utility classes.
- **⚡ Performance-Oriented**: Client-side routing with **React Router v7** for near-instant transitions.
- **🗂️ Centralized Content**: Simplified management of course data, instructors, and reviews via a structured data layer.

## 🛠️ Tech Stack

- **Core**: React 19 (Functional Components & Hooks)
- **Routing**: React Router v7
- **Styling**: Bootstrap 5 + Vanilla CSS
- **State Management**: React Context API (Theme & Cart)
- **Icons**: SVG & Bootstrap Icons

## 📁 Project Architecture

```text
src/
├── assets/          # Local images (Courses, Instructors, Students)
├── components/      # Reusable UI (Navbar, Footer, AI Agent)
├── context/         # Global State (ThemeContext, CartContext)
├── data/            # Static Data (coursesData.js - the source of truth)
├── pages/           # View Components (Home, Courses, Pricing, Cart, Payment)
├── App.js           # Router configuration and Provider wrapping
└── index.js         # Entry point
```

## 📋 Course Data Schema

The platform is driven by a centralized data structure in `src/data/coursesData.js`. Each course object follows this format:

```javascript
{
  id: 1,
  title: "Full-Stack Web Development",
  author: "Dr. Angela Yu",
  rating: 4.8,
  price: "$89.99",
  image: courseImageReference,
  badge: "Bestseller",
  badgeClass: "bg-warning",
  desc: "Master both front-end and back-end development...",
  category: "Web Development",
  instructorImage: instructorImageReference,
  reviews: [...]
}
```

## 🚦 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Oumrane-Echidmi/learnhub-platform.git
   cd learnhub-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Launch the development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🧪 Available Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Bundles the app into static files for production.
- `npm test`: Starts the interactive test runner.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
