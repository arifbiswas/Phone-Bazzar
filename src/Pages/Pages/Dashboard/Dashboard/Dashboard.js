import React, { useContext } from 'react';
import { AuthContext } from '../../../../ContextApi/AuthProvider';
import PageLoading from '../../../Shared/PageLoading/PageLoading';

const Dashboard = () => {
    const {user,loading} = useContext(AuthContext);
    console.log(user);
    if(loading){
        return <PageLoading></PageLoading>
    }
    return (
        <div className='flex justify-center items-center h-full'>
            <div className='flex flex-col'>
            <span className='text-5xl lg:text-8xl'>Dashboard</span>
            <span className='text-5xl lg:text-8xl'>{user?.displayName}</span>
            <span className='text-5xl lg:text-8xl'>{user?.userRole}</span>
            </div>
        </div>
    );
};

export default Dashboard;