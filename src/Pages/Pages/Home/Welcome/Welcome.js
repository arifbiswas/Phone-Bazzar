import React, { useContext } from 'react';
import { AuthContext } from '../../../../ContextApi/AuthProvider';

const Welcome = () => {
  const {user} = useContext(AuthContext);
    return (
        <div className='my-12'>
             <div>
      <h1 className="text-2xl md:text-8xl text-center">
        {user&& "Welcome"} 
        <span className="text-primary"> {user?.displayName ? user.displayName : user?.email}</span>
        <p className='text-xl mx-2 lg:mx-40 mt-3'>Thank you for visit <span className='text-primary'>Phone Bazaar</span>. Lets enjoy my friend {user?.displayName} , go and explore .Do buying and sales,Any issue or problem please report our team , One think remember , We provide money-back guaranty.So no tension , Buying any products.  </p>
      </h1>
      <p></p>
      </div>
        </div>
    );
};

export default Welcome;