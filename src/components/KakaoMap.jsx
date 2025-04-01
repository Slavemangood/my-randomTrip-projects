import { useEffect } from 'react';

function KakaoMap() {
  useEffect(() => {
    if (!document.getElementById('kakao-map-script')) {
      const script = document.createElement('script');
      script.id = 'kakao-map-script';
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=a213b82aab4481c277219508eaf8b161&autoload=false`;
      script.async = true;

      script.onload = () => {
        window.kakao.maps.load(() => {
          const container = document.getElementById('map');
          const options = {
            center: new kakao.maps.LatLng(35.8, 128.0),
            level: 13,
          };
          new window.kakao.maps.Map(container, options);
        });
      };

      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '600px',
        borderRadius: '10px',
        marginTop: '20px',
        marginBottom: '0px',
      }}
    />
  );
}

export default KakaoMap;
