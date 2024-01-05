import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const MainRoutes = () => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={<Home />}
            />
            <Route 
                path="/Login"
                element={<Login />}
            />
        </Routes>
    )
}

export default MainRoutes;