import { NavLink } from "react-router-dom";
// import styles from "./Nav.module.css";

function Nav({ to, exact = false, children }) {
  return (
    <li>
      <NavLink exact={exact} to={to}>
        {children}
      </NavLink>
    </li>
  );
}
export default Nav;
