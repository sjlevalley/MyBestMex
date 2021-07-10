import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { useAuth } from "./auth";

const useLoginRedirect = () => {
  const { isLoggedIn } = useAuth();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (isLoggedIn()) {
      // Use from to redirect user back to page which preceded the login page or
      // home page. See https://reactrouter.com/web/example/auth-workflow.
      const from = location.state?.from || { pathname: "/" };
      history.replace(from);
    }
  });
};

export default useLoginRedirect;
