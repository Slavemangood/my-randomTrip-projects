import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';
import KakaoMap from '../components/KakaoMap';

function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="main-title">🎯 랜덤 여행 다트</h1>
      <p className="main-subtext">다트를 던져 오늘의 여행지를 정해보세요!</p>

      <KakaoMap />

      <button className="dart-button" onClick={() => navigate('/dart')}>
        다트 던지기 GO!
      </button>
    </>
  );
}

export default MainPage;
