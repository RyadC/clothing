import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.routes-component';

const App = () => {

  const Shop = () => {

    return <h1>Shop page</h1>
  }

 return (
  <Routes>
    <Route path='/' element={<Home />}>
      <Route path='shop' element={<Shop />} />
    </Route>
  </Routes>
 )

}

export default App;
