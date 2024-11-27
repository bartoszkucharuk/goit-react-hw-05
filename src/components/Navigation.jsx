import { NavLink } from "react-router-dom";

const Navigation = () => {
  const setActive = ({ isActive }) => {
    return isActive ? "active" : "";
  };
    return (
        <nav>
            <NavLink className={setActive} to="/">Home Page_</NavLink>
            <NavLink className={setActive} to="/movies">Movies Page_ </NavLink>
        </nav>
    );
};
export default Navigation;