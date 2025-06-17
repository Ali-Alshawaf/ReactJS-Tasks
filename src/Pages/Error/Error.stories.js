import Error from './Error';

export default {
  title: 'Pages/Error',
  component: Error,
};

export const English = () => <Error language="en" />;
export const Arabic = () => <Error language="ar" />;