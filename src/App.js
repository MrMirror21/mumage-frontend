import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Explore from './pages/Explore';
import Post from './pages/Post';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/Explore" element={<Explore/>}/>
        <Route path="/Post/:id" element={<Post/>}></Route>
        <Route path="/Contactus" element={<ContactUs/>}/>
      </Routes>
    </>
  );
}

export default App;