




import React from 'react'
import axios from 'axios'

const useaxiosPublic = axios.create({
    baseURL : 'https://server-vert-two-78.vercel.app'
})
function UseAxiosPublic() {
  return useaxiosPublic;
}

export default UseAxiosPublic