import { Route, Routes } from 'react-router-dom';
import './App.css';
import './style/globle.css';
import Dashboard from './page/dashboard';
import Myprofile from './page/myprofile';
import Loginpage from './page/loginpage';
import Taskpage from './page/taskpage';
import CreateticketPage from './page/createticket';
import Chats from './page/chats';

function App() {
  return (
    <div className="App"> 
      {/* <header className="App-header"> */}

    <Routes>
        <Route path='/' element={<Loginpage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/myprofile' element={<Myprofile/>}/>
        <Route path='/task' element={<Taskpage/>}/>
        <Route path='/ticketcreate' element={<CreateticketPage/>}/>
        <Route path='/chats' element={<Chats/>}/>

      </Routes>


      {/* </header> */}
    </div>
  );
}

export default App;



