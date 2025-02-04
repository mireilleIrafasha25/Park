
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Layout from './component/Layout';
import Contact from './component/contact';
import Login from './component/login';
import Register from './component/register';
function App() {
  

  return (
    <Router>
      <Routes>
  <Route path='/' element={<Layout/>}>
  <Route path='contact-us' element={<Contact/>} />
  <Route path='login' element={<Login/>} />
  <Route path='register' element={<Register/>} />
  </Route>
      </Routes>
    </Router>
  )
}

export default App
