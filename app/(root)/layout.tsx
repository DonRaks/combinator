import React from 'react'
import ErrorPage from './error'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='text-3xl'>
       Navbar
      
      {children }
    </div>
  )
}

export default layout