import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Recom from './pages/Recom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
				<Route path="/Recom" element={<Recom />} />
      </Routes>
    </>
  );
}

export default App;