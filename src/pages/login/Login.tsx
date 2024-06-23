import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Login = ({ handleLoc }: { handleLoc: () => void }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  return (
    <button
      onClick={() => {
        handleLoc();
        navigate(`/${i18n.language}/`);
      }}
    >
      Login
    </button>
  );
};

export default Login;
