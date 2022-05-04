import Header from './Header';
import Sidenav from './Sidenav';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="main-container">
      <Header />
      <Sidenav />
      <div className="content-container">{children}</div>
    </div>
  );
}
