import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default function AppNavBar() {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </Link>
      <Link to="/about">
        <FontAwesomeIcon icon={faUserCircle} />
        <span>About me</span>
      </Link>
    </nav>
  );
}
