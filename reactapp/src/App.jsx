
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Layout from './component/Layout';
import Contact from './component/contact';
import Login from './component/login';
import Register from './component/register';
import LocationExample from './component/useLocation';
import Home from './component/home';
import PostDetails from './component/postDetails';
import UserDashboard from './component/dashboard';
import BlogCard2 from './component/BlogCard2';
function App() {
  

  return (
    <Router>
      <Routes>
  <Route path='/' element={<Layout/>}>
  <Route path='/' index element={<Home />} />
  <Route path='contact-us' element={<Contact/>} />
  <Route path='login' element={<Login/>} />
  <Route path='register' element={<Register/>} />
  <Route path="/posts/:blogId" element={<BlogCard2 />} />
  <Route path="/location" element={<LocationExample />} />
  <Route path="/dashboard" element={<UserDashboard />} />
  </Route>
      </Routes>
    </Router>
  )
}

export default App
