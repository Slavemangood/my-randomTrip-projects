import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/BottomTab.css';

function BottomTab() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bottom-tab">
      <button className={isActive('/') ? 'active' : ''} onClick={() => navigate('/')}>홈</button>
      <button className={isActive('/my-trips') ? 'active' : ''} onClick={() => navigate('/my-trips')}>내여행</button>
      <button className={isActive('/reviews') ? 'active' : ''} onClick={() => navigate('/reviews')}>후기</button>
      <button className={isActive('/settings') ? 'active' : ''} onClick={() => navigate('/settings')}>설정</button>
    </div>
  );
}

export default BottomTab;
