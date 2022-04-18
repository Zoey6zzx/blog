import 'bootstrap/dist/js/bootstrap'
import { Route, Routes, Outlet, Link } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import PostsList from './components/posts-list/PostsList';
import UsersList from './components/user-list/UsersList';
import User from './components/user/User';

function App() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={ <Outlet />}>
                    <Route index element={<UsersList />} />
                    <Route path=":userId" element={<Outlet />} > {/* /users/:userId */}
                        <Route index element={<User />} />
                        <Route path="posts" element={<PostsList />} /> {/* /users/:userId/posts */}
                    </Route>
                </Route>
            </Routes>
        </div>
    </div>
  );

  
}

export default App;
