import { Link } from "react-router-dom";
import css from "../css/NotFoundPage.module.css"

export default function NotFoundPage() {
  return (
    <div>
      <h1 className={css.notFound}>404 - Page Not Found</h1>
      <p className={css.adnotation}>Sorry, something went wrong. Please check URL of page you wanted to go.</p>
      <Link to="/">
        <button>Home site</button>
      </Link>
    </div>
  );
};
