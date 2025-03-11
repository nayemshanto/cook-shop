import Navbar from '@/components/shared/navbar'
import { IChildren } from '@/interface'
import React, { FC } from 'react'

const layout:FC<IChildren> = ({children}) => {
  return (
    <div className='font-poppins'>
        <Navbar/>
        {children}
    </div>
  )
}

export default layout