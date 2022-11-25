import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../ContextApi/AuthProvider';
import PageLoading from '../../../Pages/Shared/PageLoading/PageLoading';

const PrivateRoutes = ({children}) => {
   const {user, loading} = useContext(AuthContext);
   if(loading){
       return <PageLoading></PageLoading>
    }
    if(!user){
     return <Navigate to="/login"></Navigate>
    }
   return children ;
};

export default PrivateRoutes;