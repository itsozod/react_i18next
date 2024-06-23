import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useChangeLang } from "../../hooks/useChangeLang";

const About = () => {
  const { t, i18n } = useTranslation();
  const { changeLang } = useChangeLang();

  return (
    <>
      <button onClick={() => changeLang("ru")}>Ru</button>
      <button onClick={() => changeLang("en")}>En</button>
      <div>{t("about.text")}</div>
      <Link to={`/${i18n.language}/`}>
        {t("link.navigate")} {t("link.home")}
      </Link>
    </>
  );
};

export default About;
