import Home from './Home';

export default {
  title: 'Pages/Home',
  component: Home,
};

export const English = () => <Home language="en" />;
export const Arabic = () => <Home language="ar" />;