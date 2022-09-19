import React from 'react'
import AbumItem from '../AlbumItem'
import './style.scss'
function AbumList({abumList}) {
  return (
    <ul className="abum-list">
        {abumList.map(item => (
            <li key={item.id}>
                <AbumItem abumItem={item}/>
            </li>
        ))}
    </ul>
  )
}

export default AbumList