

import { Footer, Navbar } from '@/components/shared'
import { IChildren } from '@/interface'
import React, { FC } from 'react'

const layout:FC<IChildren> = ({children}) => {
  return (
    <div className='font-poppins'>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default layout