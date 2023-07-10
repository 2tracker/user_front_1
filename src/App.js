import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './page/login';
import Dashboard from './page/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}

    <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/dashborad' element={<Dashboard/>}/>

      </Routes>
      {/* </header> */}
    </div>
  );
}

export default App;



