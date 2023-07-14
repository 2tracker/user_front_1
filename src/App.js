import { Route, Routes } from 'react-router-dom';
import './App.css';
import './style/globle.css';
import Dashboard from './page/dashborad';
import Loginpage from './page/loginpage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}

    <Routes>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='/dashborad' element={<Dashboard/>}/>

      </Routes>
      {/* </header> */}
    </div>
  );
}

export default App;



