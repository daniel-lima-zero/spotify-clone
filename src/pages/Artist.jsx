import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import SongList from '../components/SongList';

const Artist = () => {
  return (
    <div className='artist'>
      <div className="artist__header" style={{}}>
        <h2 className='artist__title'> NAME</h2>
      </div>

      <div className="artist__body">
        <h2>Popular Songs</h2>
        <SongList/>
      </div>
      <Link to ="/song/1">
        <FontAwesomeIcon className='single-item__icon single-item__icon--artist' icon={faCirclePlay} />
      </Link>
    </div>
  )
}

export default Artist