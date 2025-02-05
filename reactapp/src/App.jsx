
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Layout from './component/Layout';
import Contact from './component/contact';
import Login from './component/login';
import Register from './component/register';
import LocationExample from './component/useLocation';
import Home from './component/home';
import PostDetails from './component/postDetails';
function App() {
  

  return (
    <Router>
      <Routes>
  <Route path='/' element={<Layout/>}>
  <Route path='/' index element={<Home />} />
  <Route path='contact-us' element={<Contact/>} />
  <Route path='login' element={<Login/>} />
  <Route path='register' element={<Register/>} />
  <Route path="/posts/:postId" element={<PostDetails />} />
  <Route path="/location" element={<LocationExample />} />
  </Route>
      </Routes>
    </Router>
  )
}

export default App
