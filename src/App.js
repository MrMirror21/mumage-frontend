import { Route, Routes } from 'react-router-dom';
import Icon from './pages/Icon';
import SelectBox from './pages/SelectBox';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
        <>
          <Icon/>
          <SelectBox/>
        </>
        }
        />
      </Routes>
    </>
  );
}

export default App;