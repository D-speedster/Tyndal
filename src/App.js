import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/websites' element={'TEST'} />
      </Routes>
    </>
  );
}

export default App;
