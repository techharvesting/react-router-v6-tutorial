import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Me from './pages/Me';
import NotFound from './pages/NotFound';
import User from './pages/User';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users/:username' element={<User />} />
        <Route path='/me' element={<Me />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
