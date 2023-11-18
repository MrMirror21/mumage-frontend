import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
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
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/Explore" element={<Explore/>}/>
        <Route path="/Post/:id" element={<Post/>}></Route>
        <Route path="/Contactus" element={<ContactUs/>}/>
      </Routes>
    </>
  );
}

export default App;