import React, { useContext } from 'react';
import { AuthContext } from '../../../../ContextApi/AuthProvider';

const Welcome = () => {
  const {user} = useContext(AuthContext);
    return (
        <div className='my-12'>
             <div>
      <h1 className="text-2xl md:text-8xl text-center">
       
        {user&& "Welcome "}
         {user?.alreadyHave && "Back"}
        <span className="text-primary"> {user?.displayName ? user.displayName : user?.email}</span>
        <p className='text-xl mx-2 lg:mx-40 mt-3'>Thank you for visit <span className='text-primary'>Phone Bazaar</span>. Lets enjoy my friend {user?.displayName} , go and explore .Do buying and sales,Any issue or problem please report our team , One think remember , We provide money-back guaranty.So no tension , Buying any products.you can buy any products only second hand mobile.Our services you should be enjoy because ,we no provide a issues phone or destroy phone , we have only collection 3 , 4 , 5 month used , so don't worry we always give our best service  </p>
      </h1>
      <p></p>
      </div>
        </div>
    );
};

export default Welcome;