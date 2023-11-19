import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from './page/login';
import Home from './page/Home';
import SignUp from './page/SignUp';
import BigProduct from './page/BigProduct';

function App() {
  return (
    <Router>  
    <div className="">
    <Routes>
    <Route path='/' exact
    element={<Home/>}
    > 
    </Route>
    <Route path='/login' exact 
    element={<Login />}/>
    <Route path='/signup' exact
      element={<SignUp/>}    
      >  
    </Route>
    <Route path='/product' exact
      element={<BigProduct/>}    
      >  
    </Route>
     </Routes>

     </div>
    </Router>

  );
}

export default App;