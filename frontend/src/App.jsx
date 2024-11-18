import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin.jsx';
import About from './pages/AboutPage.jsx';
import SignUp from './pages/Signup.jsx'
import Profile from './pages/Profile.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
