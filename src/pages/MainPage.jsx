import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';
import BottomTab from '../components/BottomTab';
import KakaoMap from '../components/KakaoMap';

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="app-frame"> {/* ✅ 스마트폰 프레임처럼 감싸기 */}
        <div className="main-container">
            <h1 className="main-title">🎯 랜덤 여행 다트</h1>
            <p className="main-subtext">다트를 던져 오늘의 여행지를 정해보세요!</p>
            {/* 지도 api 호출 */}
            <KakaoMap />

            <button className="dart-button" onClick={() => navigate('/dart')}>
            다트 던지기 GO!
            </button>
      </div>
         {/* 하단 네비게이션 바 */}
         <BottomTab />
    </div>
  );
}

export default MainPage;
