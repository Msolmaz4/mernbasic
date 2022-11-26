import React from 'react'
import './Backdrop.css'

const Backdrop = ({show}) => {
  return (
    show && <div className='backdrop'>Backdroooooooooooooooooop</div>
  )
}

export default Backdrop