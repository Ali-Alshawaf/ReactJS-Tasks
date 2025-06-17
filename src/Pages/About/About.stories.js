import About from './About';

export default {
  title: 'Pages/About',
  component: About,
};

export const English = () => <About language="en" />;
export const Arabic = () => <About language="ar" />;