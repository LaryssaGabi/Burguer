import { Route, Routes, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoutes = ({ element: Element, ...rest }) => {
    const user = localStorage.getItem('codeburger:userData');

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <Routes>
            <Route {...rest} element={<Element />} />
        </Routes>
    );
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    element: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};


