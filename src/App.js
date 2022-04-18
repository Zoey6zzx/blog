import 'bootstrap/dist/js/bootstrap'
import { Route, Routes, Outlet, Link } from 'react-router-dom';
import './App.css';
import CommentsList from './components/comments-list/CommentsList';
import Home from './components/home/Home';
import NotFound from './components/not-found/NotFound';
import PostsList from './components/posts-list/PostsList';
import UsersList from './components/user-list/UsersList';
import User from './components/user/User';

function App() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
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

                <Route path="posts" element={<Outlet />}>
                    <Route index element={<PostsList />} />
                    <Route path=":postId/comments" element={<CommentsList />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </div>
  );

  
}

export default App;
