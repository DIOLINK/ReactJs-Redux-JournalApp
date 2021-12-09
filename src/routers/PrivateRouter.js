import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRouter = ({ isAuthenticated, render: Component }) =>
  isAuthenticated ? Component : <Navigate to="/auth/login" />;
PrivateRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
};
export default PrivateRouter;
