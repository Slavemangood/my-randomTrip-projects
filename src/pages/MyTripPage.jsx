import '../styles/MyTripsPage.css';

function MyTripsPage() {
  return (
    <div className="my-trips-container">
      <h2 className="my-trips-title">내 여행 정보</h2>

      {/* 내 정보 카드 */}
      <div className="user-info-card">
        <p><strong>닉네임:</strong> 여행러123</p>
        <p><strong>총 여행 횟수:</strong> 5회</p>
      </div>

      {/* 다음 여행지 카드 */}
      <div className="next-trip-card">
        <h3>🎯 다음 여행지</h3>
        <p>📍 전라남도 여수시</p>
        <p>확정 날짜: 2025-04-12</p>
        <button className="edit-button">변경하기</button>
      </div>

      {/* 내가 다녀온 여행들 */}
      <div className="trip-history-section">
        <h3>🧳 여행 히스토리</h3>
        <ul className="trip-list">
          <li>📍 강원도 속초시 - 2024.12.10</li>
          <li>📍 부산 해운대 - 2024.08.03</li>
          <li>📍 경상북도 경주 - 2024.03.22</li>
        </ul>
      </div>
    </div>
  );
}

export default MyTripsPage;
