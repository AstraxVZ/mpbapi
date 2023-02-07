import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <span className="navigation-links1-text">{props.text}</span>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text: 'Home',
  rootClassName: '',
}

NavigationLinks1.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks1
