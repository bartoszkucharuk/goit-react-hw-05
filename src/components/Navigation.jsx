import { NavLink } from "react-router-dom";

export default function Navigation() {
  const setActive = ({ isActive }) => {
    return isActive ? "active" : "";
  };
    return (
        <nav>
            <NavLink className={setActive} to="/">Home Page_</NavLink>
            <NavLink className={setActive} to="/movies">Movies </NavLink>
        </nav>
    );
};