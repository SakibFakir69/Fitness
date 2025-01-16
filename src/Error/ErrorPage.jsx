




import React from 'react'

import Error404 from '../../public/lottieflow-404-12-1-000000-easey'
import Lottie from 'react-lottie'


function ErrorPage() {

    const options ={
        loop:true,
        autoplay:true,
        animationData:Error404,


        
    }


  return (

    <div className='w-full flex justify-center items-center'>

        <div className='  w-1/2 m-52 '>
        <Lottie options={options} />
        </div>
    </div>

    

  )
}

export default ErrorPage