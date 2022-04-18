import 'bootstrap/dist/js/bootstrap'
import { Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import UsersList from './components/user-list/UsersList';
import User from './components/user/User';

function App() {
  return (
    <div>
      <div class="container">
      </div>
      <Routes>
        <Route path="/users" element={ <Outlet />}>
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<User />} />
        </Route>
      </Routes>
    </div>
  );

  
}

export default App;
