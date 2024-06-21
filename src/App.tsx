import { useTranslation } from "react-i18next";
import "./App.css";
import { useEffect, useState } from "react";
interface Coffee {
  title: string;
}

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch(
      "https://vercel-server-itsozods-projects.vercel.app/coffees?title_like=&_page=0&_limit=4"
    );
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const { t, i18n } = useTranslation("home");
  const changeLang = (lang: string) => i18n.changeLanguage(lang);
  return (
    <>
      <button onClick={() => changeLang("ru")}>Ru</button>
      <button onClick={() => changeLang("en")}>En</button>
      <div>{t("text")}</div>
      {data?.map((coffee: Coffee) => {
        return <div>{t(coffee?.title, coffee?.title)}</div>;
      })}
    </>
  );
}

export default App;
