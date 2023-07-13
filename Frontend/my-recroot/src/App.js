import logo from './logo.svg';
import './App.css';
import Signup from './Component/Signup';
import Signin from './Component/Signin';
import Navbar from './Component/Navbar';
import AllRoute from './Routes/AllRoute';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoute/>
    </div>
  );
}

export default App;
