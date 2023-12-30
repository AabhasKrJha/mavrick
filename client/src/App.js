import { Route, Routes } from 'react-router';

import './css/App.css';
import Layout from './layout';
import Homepage from './components/homepage';
import Blogs from './components/blog';
import Gallery from './components/gallery';
import Documentaries from './components/documentaries';
import Participate from './components/participate';
import Login from './components/login';
import Register from './components/register';
import { UserContextProvider } from './UserContext';
import Admin from './components/admin';
import AdminDashboard from './components/admin_dashboard';
import Blog from './components/single_blog';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element = {<Layout background={true}/>}>
          <Route path='/' element = { <Homepage/> } />
        </Route>
        <Route path='/participate' element = {<Layout background={true} participate={true}/>}>
          <Route path={'/participate'} element = {<Participate/>} />
        </Route>
        <Route path='/' element = {<Layout/>}>
          <Route path={'/blog'} element = {<Blogs/>} />
          <Route path={'/blog/one'} element = {<Blog/>} />
          <Route path={'/gallery'} element = {<Gallery/>} />
          <Route path={'/documentary'} element = {<Documentaries/>} />
          <Route path={'/login'} element = {<Login/>} />
          <Route path={'/register'} element = {<Register/>} />
          <Route path={'/create'} element = {<Register/>} />
        </Route>
        <Route path='/' element = {<Layout/>}>
          <Route path='/admin' element = {<Admin/>}></Route>
          <Route path='/admin/dashboard' element = {<AdminDashboard/>}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
