import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Upload from './pages/Upload';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;
