import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Home/Home/Home';
import ProjectDetail from '../Home/ProjectDetail/ProjectDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'projects/:id',
        element: <ProjectDetail />
      }
    ]
  }
]);

export default router;
