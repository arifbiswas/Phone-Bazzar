import React, { useContext } from 'react';
import { AuthContext } from '../../../../ContextApi/AuthProvider';

const Welcome = () => {
  const {user} = useContext(AuthContext);
  // console.log(user);
    return (
        <div className='my-12'>
             <div>
      <h1 className="text-2xl md:text-8xl text-center">
       
        {user&& "Welcome "}
         {user?.alreadyHave && "Back"}
        <span className="text-primary"> {user?.displayName ? user.displayName : user?.email}</span>
        <p className='text-xl mx-2 lg:mx-40 mt-3'>Thank you for visit <span className='text-primary'>Phone Bazaar</span>. Lets enjoy my friend {user?.displayName} , go and explore .Do you buying and sales second hand mobile. And any issue or problem please report our team , One think remember , We provide money-back guaranty.So no tension ,Our services you should be enjoy because ,we have no issues phones or destroy phone , we have only collection 3 , 4 , 5 month used , so don't worry we always give try to our best service  </p>
      </h1>
      <p></p>
      </div>
        </div>
    );
};

export default Welcome;