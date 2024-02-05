import './App.css';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from './pages/AboutPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/projects",
      element: <ProjectsPage />
    },
    {
      path: "/about",
      element: <AboutPage />
    },
  ])

  return (
    <>
      <div className="bg-light">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
