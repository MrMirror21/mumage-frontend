import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import SectionDevide from './pages/SectionChange';
import Signup from './pages/Signup';
import Login from './pages/Login';


const App = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<SectionDevide />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
