import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Authentication from './routes/authentication/authentication.routes-component';
import Home from './routes/home/home.routes-component';
import Navigation from './routes/navigation/navigation.routes-component';

const Shop = () => {
  return <h1>Shop page</h1>
}


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
