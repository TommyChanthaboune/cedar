import { Link } from 'react-router-dom';
import logo from '../../assets/abc-health-system-logo.svg';

const Header = (): React.ReactElement => (
  <header className="border-cedarLightGray border-b">
    <div className="bg-white px-4 py-5">
      <Link to="/">
        <img src={logo} alt="abc-health-system-logo" />
      </Link>
    </div>
  </header>
);

export { Header };
