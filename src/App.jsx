import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import DartPage from './pages/DartPage';
import ResultPage from './pages/ResultPage';
import MyTripsPage from './pages/MyTripsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/dart" element={<DartPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/my-trips" element={<MyTripsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
