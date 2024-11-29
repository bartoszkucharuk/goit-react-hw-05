import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, something went wrong. Please check URL of page you wanted to go.</p>
      <Link to="/">
        <button>Home site</button>
      </Link>
    </div>
  );
};
