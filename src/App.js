import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Websites from './Components/websites';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/websites' element={<Websites />} />
      </Routes>
    </>
  );
}

export default App;
