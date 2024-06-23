import { useLocation, useNavigate } from "react-router-dom";
import i18n from "../i18n";

export const useChangeLang = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    navigate(
      `/${i18n.language}/${location.pathname?.slice(
        4,
        location.pathname?.length
      )}`
    );
  };
  return { changeLang };
};
