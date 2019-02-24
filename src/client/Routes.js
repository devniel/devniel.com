import App from './App';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
