import Contact from './Contact';

export default {
  title: 'Pages/Contact',
  component: Contact,
};

export const English = () => <Contact language="en" />;
export const Arabic = () => <Contact language="ar" />;