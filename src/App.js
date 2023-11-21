import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import PageDetail from './pages/MainPage/PageDetail';
import PageControll from './components/Features/PageControll';
import Upload from './pages/Upload';
import SignUp from './pages/Signup';
import SignIn from './pages/SignIn';
import Explore from './pages/Explore';
import Post from './pages/Post';
import ContactUs from './pages/ContactUs';
import GlobalStyles from './styles/GlobalStyles';
import { Suspense } from 'react';
import UserPage from './pages/UserPage/UserPage';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RecoilRoot>
        <Suspense fallback="...loading">
          <Routes>
            <Route path="/" element={<PageControll />} />
            <Route path="/imgDetail/:postId" element={<PageDetail />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Post/:postId" element={<Post />}></Route>
            <Route path="/Contactus" element={<ContactUs />} />
            <Route path="/UserPage/:userId" element={<UserPage />} />
          </Routes>
        </Suspense>
      </RecoilRoot>
    </>
  );
}

export default App;