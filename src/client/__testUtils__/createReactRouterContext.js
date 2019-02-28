import { shape } from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

const router = {
  history: new BrowserRouter().history,
  route: {
    location: {},
    match: {},
  },
};

const createContext = () => ({
  context: { router },
  childContextTypes: { router: shape({}) },
});

export default createContext;
