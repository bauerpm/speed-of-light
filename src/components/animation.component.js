import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import './animation.css'

export const Animation = (props) => (
  <div className="Animation-main">
    <FontAwesomeIcon className={props.className} icon={props.icon} />
  </div>
)

Animation.propTypes = {
  icon: PropTypes.any,
  className: PropTypes.string,
}
