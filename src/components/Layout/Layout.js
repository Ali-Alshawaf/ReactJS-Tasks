import Header from "../../components/Header/Header";

export default function Layout({ children, language, setLanguage }) {
  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      {children}
    </>
  );
}
