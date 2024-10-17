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
    element: <App />,  
    children: [
      {
        index: true,  
        element: <AboutMe />,
      },
      {
        path: 'portfolio', 
        element: <Portfolio />,
      },
      {
        path: 'contact',  
        element: <Contact />,
      },
      {
        path: 'resume',  
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);