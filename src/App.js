import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import PageDetail from './pages/MainPage/PageDetail';
import MyPage from './pages/MyPage/MyPage';
import PageControll from './components/Features/PageControll';
import Upload from './pages/Upload';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Explore from './pages/Explore';
import Post from './pages/Post';
import ContactUs from './pages/ContactUs';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<PageControll />} />
          <Route path="/imgDetail/:imgId/:width/:height/:authorName" element={<PageDetail />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Post/:postId" element={<Post />}></Route>
          <Route path="/Contactus" element={<ContactUs />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;