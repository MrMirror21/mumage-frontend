import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Section from './pages/SectionChange';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/section" element={<Section />} />
      </Routes>
    </>
  );
}

export default App;
