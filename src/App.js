// REACT ROUTER DOM
import { Routes, Route, Outlet } from 'react-router-dom';

// STYLES
import './App.css';

// COMPONENTS
import Home from './routes/home/home.routes-component';
import Navigation from './routes/navigation/navigation.routes-component';
import Authentication from './routes/authentication/authentication.routes-component';
import Shop from './routes/shop/shop.routes-component';


// MY COMPONENT
const App = () => {

 return (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index={true} element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='auth' element={<Authentication />} />
    </Route>
  </Routes>
 )

}

export default App;
