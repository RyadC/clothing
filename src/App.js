import { Fragment } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.routes-component';


const Navigation = () => {

  return (
    <Fragment>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </Fragment>
  )
}

const Shop = () => {
  return <h1>Shop page</h1>
}


const App = () => {

 return (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index={true} element={<Home />} />
      <Route path='shop' element={<Shop />} />
    </Route>
  </Routes>
 )

}

export default App;
