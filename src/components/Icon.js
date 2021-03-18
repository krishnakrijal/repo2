import React from 'react'

const Icon = ({icons,imgNo}) => {
    return (
        <div>
          <img src={icons[imgNo]} alt="pho" /> 
        </div>
    )
}

export default Icon
