import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import SectionDevide from './pages/SectionChange';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PageDetail from './pages/PageDetail';
import MyPage from './pages/MyPage';

const App = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<SectionDevide />} />
        <Route path="/imgDetail/:imgId/:width/:height/:authorName" element={<PageDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/MyPage" element={<MyPage />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
