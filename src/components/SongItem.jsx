import React from 'react'
import { Link } from 'react-router-dom'

const SongItem = () => {
  return (
    <Link to="/song/1" className='song-item'>
        <div className='song-item__number-album'>
            <p1>1</p1>
            <div className='song-item__album'>
                <img src='' alt='' className='song-item__image'></img>
                <p1 className='song-item__name'> Song Name</p1>
            </div>
        </div>
        <p1> 2:30</p1>
    </Link>
  )
}

export default SongItem