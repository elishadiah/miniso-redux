import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return <Redirect to='/login?error=1&message=You must login fast' />;
  }
  return <Route {...rest}> {children}</Route>;
};

export default PrivateRoute;
