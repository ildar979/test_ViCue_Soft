import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/Main/MainPage';
import PersonalPage from './Pages/PersonalPage/PersonalPage';

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="beers/:id" element={<PersonalPage/>} />
      </Routes>
    </div>
  );
}

export default App;
