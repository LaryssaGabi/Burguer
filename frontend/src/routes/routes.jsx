import { createBrowserRouter } from 'react-router-dom';
import Login from '../containers/Login';
import Register from '../containers/Register';
import PrivateRoutes from './private-routes';
import Home from '../containers/Home';
import Products from '../containers/Products';



export const router = createBrowserRouter([
    {
        path: '*',
        element: <PrivateRoutes element={<Home />} />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
    {
        path: '/produtos',
        element: <Products />,
    },
]);


