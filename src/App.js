import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './page/login';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <p className="text-5xl font-bold underline">
      Hello world!
    </p>
    <Routes>
        <Route path='/' element={<LoginPage/>}/>
      </Routes>
      {/* </header> */}
    </div>
  );
}

export default App;



