# LearnHub - Online Education Platform

LearnHub is a modern, responsive web application built with React and Bootstrap 5 for online education. Users can browse courses, view detailed curriculum, check pricing plans, and contact support.

## Features

- **Dynamic Course Pages**: View detailed course information, curriculum, instructor profiles, and student reviews.
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop using Bootstrap 5.
- **Interactive UI**: Includes hover effects, accordions for FAQs/Curriculum, and sticky sidebars.
- **Centralized Data**: Easy data management via `src/data/coursesData.js`.
- **Navigation**: Client-side routing with React Router v6.

## Technologies Used

- **React.js**: Frontend framework.
- **Bootstrap 5**: CSS framework for styling and responsiveness.
- **React Router DOM**: For navigation and routing.
- **React Icons / SVGs**: For visual elements.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Oumrane-Echidmi/learnhub-platform.git
   ```

2. Navigate to the project directory:

   ```bash
   cd learnhub
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app will run at `http://localhost:3000`.

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable components (Navbar, Footer)
├── data/            # Static data files (courses, plans)
├── pages/           # Page components (Home, Courses, Contact, etc.)
├── App.js           # Main application entry point with Routes
└── index.js         # Entry file rendering the React app
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
