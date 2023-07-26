import { Route, Routes } from 'react-router-dom';
import './App.css';
import './style/globle.css';
import Dashboard from './page/dashboard';
import Myprofile from './page/myprofile';
import Layout from './component/common/Layout';
import Loginpage from './page/loginpage';
import Notspage from './page/notspage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}

    <Routes>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/myprofile' element={<Myprofile/>}/>
        <Route path='/nots' element={<Notspage/>}/>

      </Routes>


      {/* </header> */}
    </div>
  );
}

export default App;



