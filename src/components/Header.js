import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <div className='container' style={headerStyles}>
      <h2>Feedback Api {text}</h2>
    </div>
  );
}

Header.defaultProps = {
  text: 'default text',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95',
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
