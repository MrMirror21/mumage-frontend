import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Explore from './pages/Explore';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
        <>
          <Landing/>
        </>
        }
        />
        <Route path="/Explore" element={
        <>
          <Explore/>
        </>
        }
        />
      </Routes>
    </>
  );
}

export default App;