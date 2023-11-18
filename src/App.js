import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import SectionDevide from './pages/MainPage/SectionChange';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PageDetail from './pages/MainPage/PageDetail';
import MyPage from './pages/MyPage/MyPage';
import PageControll from './components/Features/PageControll';

const App = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<PageControll />} />
        <Route path="/imgDetail/:imgId/:width/:height/:authorName" element={<PageDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/MyPage" element={<MyPage />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
