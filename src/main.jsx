import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import App from './App.jsx';
import './App.css';
import './index.css';

// Define the routes based on your NavLink paths
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,  // App contains Navigation and any other layout components
    children: [
      {
        index: true,  // This will render the AboutMe component at the root path "/"
        element: <AboutMe />,
      },
      {
        path: 'portfolio',  // Matches the "/portfolio" NavLink
        element: <Portfolio />,
      },
      {
        path: 'contact',  // Matches the "/contact" NavLink
        element: <Contact />,
      },
      {
        path: 'resume',  // Matches the "/resume" NavLink
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);