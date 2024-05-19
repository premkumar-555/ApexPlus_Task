import React from 'react'


const LayoutContainer = ({children}) => {

  return (
    <div className='wv-100 hv-100 d-flex jc-between border-black'>
     {children}
    </div>
  )
}

export default LayoutContainer