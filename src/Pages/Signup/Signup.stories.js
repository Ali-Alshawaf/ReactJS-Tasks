import Signup from './Signup';

export default {
  title: 'Pages/Signup',
  component: Signup,
};

export const English = () => <Signup language="en" />;
export const Arabic = () => <Signup language="ar" />;