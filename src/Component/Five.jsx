



import UseSptrainer from '@/Hooks/UseSptrainer'
import React from 'react'

function Five() {


    const {isLoading,spTrainer} = UseSptrainer();
    console.log(spTrainer);






  return (
    <div>

        {/* {
            spTrainer.map((item,key)=>(
                <p>{item.Name}</p>
            ))
        }
 */}





    </div>
  )
}

export default Five