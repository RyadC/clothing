import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.routes-component';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />}>
      </Route>
    </Routes>
  )
}

export default App;
