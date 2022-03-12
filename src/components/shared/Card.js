import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ children, reverse }) {
  // return (
  // <div className={`card ${reverse && 'reverse'}`}>
  //   {children}
  // </div>
  // )
  return (
    <div
      className='card'
      style={{
        backgroundColor: reverse ? 'rgba(0, 0, 0, 0.5)' : '#fff',
        color: reverse ? '#fff' : '#000',
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
