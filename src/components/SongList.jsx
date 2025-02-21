import React from 'react'
import SongItem from './SongItem'

const SongList = () => {
  return (
    <div className='song-list'>
        <SongItem />

        <p className='song-list__see-more'>More</p>
    </div>
  )
}

export default SongList