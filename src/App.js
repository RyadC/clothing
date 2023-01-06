// REACT ROUTER DOM
import { Routes, Route, Outlet } from 'react-router-dom';

// STYLES
import './App.css';

// COMPONENTS
import Navigation from './routes/navigation/navigation.routes-component';
import Home from './routes/home/home.routes-component';
import Authentication from './routes/authentication/authentication.routes-component';
import Shop from './routes/shop/shop.routes-component';
import Checkout from './routes/checkout/checkout.routes-component';


// MY COMPONENT
const App = () => {

 return (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index={true} element={<Home />} />
      <Route path='shop/*' element={<Shop />} />
      <Route path='auth' element={<Authentication />} />
      <Route path='checkout' element={<Checkout />} />
    </Route>
  </Routes>
 )

}

export default App;
