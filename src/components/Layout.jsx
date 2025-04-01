import BottomTab from './BottomTab';
import '../styles/Layout.css';

function Layout({ children }) {
  return (
    <div className="app-frame">
      <div className="main-container">
        {children}
      </div>
      <BottomTab />
    </div>
  );
}

export default Layout;
