import { Route, Routes } from 'react-router-dom';
import Icon from './pages/Icon';
import Section from './pages/Section';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
        <>
          <Icon/>
          <Section/>
        </>
        }
        />
      </Routes>
    </>
  );
}

export default App;