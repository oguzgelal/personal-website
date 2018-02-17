import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Link from 'gatsby-link'

import './Button.scss'

const Button = props => {
  return (
    <Link to={props.url} className="link">
      <div className={`button button-${props.type}`}>
        <div className="button-txt">{props.title}</div>
      </div>
    </Link>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

export default Button;