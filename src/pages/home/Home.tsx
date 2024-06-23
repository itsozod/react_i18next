import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useChangeLang } from "../../hooks/useChangeLang";

const Home = () => {
  const { t, i18n } = useTranslation();
  const { changeLang } = useChangeLang();

  return (
    <>
      <button onClick={() => changeLang("ru")}>Ru</button>
      <button onClick={() => changeLang("en")}>En</button>
      <div>{t("home.text")}</div>
      <Link to={`/${i18n.language}/about`}>
        {t("link.navigate")} {t("link.about")}
      </Link>
    </>
  );
};

export default Home;
