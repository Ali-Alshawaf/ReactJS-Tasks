import Header from './Header';
import { useState } from 'react';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = (args) => {
  const [language, setLanguage] = useState(args.language || 'en');
  return <Header language={language} setLanguage={setLanguage} />;
};

export const Navbar = () => <Template />;



