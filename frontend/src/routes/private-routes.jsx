import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoutes = ({ element, isAdmin }) => {
    const user = localStorage.getItem('codeburger:userData');

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    const parsedUser = JSON.parse(user);

    if (isAdmin && !parsedUser.admin) {
        return <Navigate to="/" replace />;
    }

    return element;
};

PrivateRoutes.propTypes = {
    element: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
    isAdmin: PropTypes.bool,
};

export default PrivateRoutes;
