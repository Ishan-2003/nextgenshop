import './App.css';
import Masterlayout from './Components/Masterlayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Forgotpassword from './Pages/Forgotpassword'
import Login from './Pages/Login'
import Resetpassword from './Pages/Resetpassword'
import { ProSidebarProvider } from 'react-pro-sidebar';
function App() {
  return (
    <Router>
    <ProSidebarProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forgot-password' element={<Forgotpassword />} />
        <Route path='/reset-password' element={<Resetpassword />} />
        <Route path='/admin' element={<Masterlayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </ProSidebarProvider>
    </Router>
  );
}

export default App;
