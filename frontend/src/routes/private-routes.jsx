import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoutes = ({ element }) => {
    const user = localStorage.getItem('codeburger:userData');

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return element;
};

PrivateRoutes.propTypes = {
    element: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};

export default PrivateRoutes;
