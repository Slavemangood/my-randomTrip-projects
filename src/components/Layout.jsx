import { Outlet } from 'react-router-dom'; // ✅ 추가!
import BottomTab from './BottomTab';
import '../styles/Layout.css';

function Layout() {
  return (
    <div className="app-frame">
      <div className="main-container">
        <Outlet />  {/* ✅ 여기에 현재 페이지 컴포넌트가 들어옴 */}
      </div>
      <BottomTab />
    </div>
  );
}

export default Layout;
