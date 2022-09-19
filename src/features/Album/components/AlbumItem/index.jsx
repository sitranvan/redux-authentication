import React from 'react'
import './style.scss'
function AbumItem({abumItem}) {
  return (
    <div className='abum-item'>
        <img src={abumItem.thumbnaiUrl} alt={abumItem.title} />
        <h3>{abumItem.title}</h3>
    </div>
  )
}

export default AbumItem