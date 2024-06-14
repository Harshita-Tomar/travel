
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/pages/Home';
import Services from './component/pages/Services';
import Products from './component/pages/Products';
import SignIn from './component/pages/SignIn';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/signin' element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
