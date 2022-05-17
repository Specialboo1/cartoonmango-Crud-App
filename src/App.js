import Sidebar from './components/sidebar';
import Users from './components/users';
import { Dashboard } from './components/dashboard';
import Createuser from './components/createuser';
import Edituser from './components/edituser';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
 <div id="wrapper">
   <Sidebar></Sidebar>
   <div class="container-fluid">
   <Routes>
   <Route exact path="/" element={<Dashboard/>}/>
   <Route exact path="/user" element={<Users/>}/>
   <Route exact path="/createuser" element={<Createuser/>}/>
   <Route exact path="/user/edit/:id" element={<Edituser/>}/>
   </Routes>
   </div>
   </div>
   </Router>
  );
}

export default App;
