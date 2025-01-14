


import React, { useContext } from 'react'
import { MyContext } from '../Context/AuthContext';

function UseAuth() {

    const authContext = useContext(MyContext);



  return authContext;
}

export default UseAuth