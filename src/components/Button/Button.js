import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Button.scss'

const Button = props => {
  return (
    <a href={props.url} target="_new" className="link">
      <div className={`button button-${props.id}`}>
        <div className="button-txt">{props.title}</div>
      </div>
    </a>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

export default Button;