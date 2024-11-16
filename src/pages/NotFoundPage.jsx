import { Link } from "react-router-dom";


const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className={styles.homeLink}>
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;