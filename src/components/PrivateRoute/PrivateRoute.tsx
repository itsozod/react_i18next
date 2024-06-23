import { Navigate, Outlet } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";


const PrivateRoute = ({ onlyFor }: { onlyFor:string | null}) => {
  return onlyFor ? (
    <Wrapper>
      <Outlet />
    </Wrapper>
  ) : (
    <Navigate to={"/login"} replace />
  );
};

export default PrivateRoute;
