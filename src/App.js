import './App.css';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ProjectPage from "./pages/ProjectPage";
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
      element: <ProjectPage />
    },
    {
      path: "/about",
      element: <AboutPage />
    },
  ])

  return (
    <>
      <div className="bg-white">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
