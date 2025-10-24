Tria Contact List Assignment

This is a simple single-page contact list application built with React and Vite. It uses a professional component-based file structure and is styled with plain CSS.

View Live Demo

(Replace the link above with your own after deploying)

Features

View Contacts: See a clean, scrollable list of all contacts.

Search Contacts: Filter the list in real-time by typing a name in the search bar.

Add Contact: (Optional feature) Click the "Add Contact" button to open a modal and add a new contact to the list.

Responsive Design: The application is styled with plain CSS and is responsive for mobile devices.

Tech Stack

Framework: React

Build Tool: Vite

Styling: Plain CSS (component-scoped CSS files)

Icons: lucide-react

Assumptions & Design Choices

File Structure: I chose a component-based file structure (e.g., src/components/Header/Header.jsx and src/components/Header/Header.css). This is a standard practice in React development that makes the code more organized, reusable, and maintainable.

No API: As per the assignment, data fetching is mimicked by using a hardcoded array of contacts located in src/data/contacts.js.

Styling: I used plain CSS for all styling. Each component imports its own stylesheet, so styles are co-located with their component logic.

State Management: All state is "lifted up" and managed in the main App.jsx component using React hooks (useState). This allows parent components (like App) to pass state and state-setting functions (like addContact) down to child components as props.

Icons: I used lucide-react as it's a lightweight and excellent icon library.

How to Run Locally

Prerequisites

Node.js (v18 or newer)

npm (or pnpm/yarn)

Setup

Clone the repository:

git clone [https://github.com/YOUR_USERNAME/tria-contact-list.git](https://github.com/YOUR_USERNAME/tria-contact-list.git)
cd tria-contact-list


Install dependencies:
(This will install React and lucide-react)

npm install


Run the development server:

npm run dev


Open your browser and visit http://localhost:5173.