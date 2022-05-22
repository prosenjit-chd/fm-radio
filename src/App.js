import './App.css';
import Radio from './components/Radio/Radio';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PrivateRoute from './components/Admin/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Admin/Home/Dashboard/Dashboard';
import Projects from './components/Admin/Home/Projects/Projects';
import HomeLand from './components/Admin/Home/HomeLand/HomeLand';
import AddProjects from './components/Admin/Home/AddProjects/AddProjects';
import Login from './components/Admin/Login/Login/Login';
import Register from './components/Admin/Login/Register/Register';
import NotFound from './components/Admin/NotFound/NotFound';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Routes>

            <Route path="/" element={<Radio />}></Route>
            <Route path="/home" element={<Radio />}></Route>
            <Route path="/radio" element={<Radio />}></Route>

            {/* Admin*/}
            <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route exact path="/adminhome" element={<PrivateRoute><HomeLand /></PrivateRoute>}>
              </Route>
              <Route exact path="/projects" element={<PrivateRoute><Projects /></PrivateRoute>}>
              </Route>
              <Route path={`/addprojects`} element={<PrivateRoute><AddProjects /></PrivateRoute>}>
              </Route>
            </Route>

            {/* autentication */}
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>

            <Route path="*" element={<NotFound />}></Route>

          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
