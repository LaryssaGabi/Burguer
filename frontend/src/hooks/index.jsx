import { UserProvider } from "./UserContext";
import { CardProvider } from "./CardContect";
import PropTypes from 'prop-types';

const AppProvider = ({ children }) => (
    <CardProvider>
        <UserProvider>
            {children}
        </UserProvider>
    </CardProvider>
)

AppProvider.propTypes = {
    children: PropTypes.node
};

export default AppProvider;