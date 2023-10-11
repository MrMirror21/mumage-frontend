import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Explore from './pages/Explore';
import Post from './pages/Post';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/Explore" element={<Explore/>}/>
        <Route path="/Post/:content" element={<Post/>}></Route>
      </Routes>
    </>
  );
}

export default App;