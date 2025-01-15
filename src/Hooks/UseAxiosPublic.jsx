




import React from 'react'
import axios from 'axios'

const useaxiosPublic = axios.create({
    baseURL : 'http://localhost:5000/'
})
function UseAxiosPublic() {
  return useaxiosPublic;
}

export default UseAxiosPublic