import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Main from './components/main/main';
import Write from './components/write/write';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='main' element={<Main />} />
        <Route path='write' element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
