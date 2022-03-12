import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function AboutIconLink() {
  return (
    <div
      style={{ position: 'absolute', right: 20, bottom: 20, cursor: 'pointer' }}
      title='This is a basic feedback app'
      className='about-link'
    >
      <Link to='/about'>
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}
