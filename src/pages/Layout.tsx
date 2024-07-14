import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';

const Layout = (): React.ReactElement => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

export { Layout };
