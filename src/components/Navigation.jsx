import { NavLink } from "react-router-dom";
import css from "../css/Navigation.module.css"

const Navigation = () => {
  const setActive = ({ isActive }) => {return isActive ? "active" : "";
  };
    return (
        <nav className={css.navMenu}>
            <NavLink className={{ setActive }} to="/">Home Page</NavLink>
            <NavLink className={{ setActive } } to="/movies">Movies Page</NavLink>
        </nav>
    );
};
export default Navigation;