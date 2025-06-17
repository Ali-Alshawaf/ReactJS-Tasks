import Login from './Login';

export default {
  title: 'Pages/Login',
  component: Login,
};

export const English = () => <Login language="en" />;
export const Arabic = () => <Login language="ar" />;