import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Upload from './pages/Upload';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
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
      </Routes>
    </>
  );
}

export default App;
