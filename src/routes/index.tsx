import React, {useContext} from 'react';
import authContext from '../contexts/auth';
import AppRoutes from './app.routes';

import AuthRoutes from './auth.routes';
//import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const {signed} = useContext(authContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
