import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ isAuthenticated, render: Component }) =>
  isAuthenticated ? <Navigate to="/" /> : Component;

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
};
export default PublicRoute;
