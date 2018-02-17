import React from 'react';
import PropTypes from 'prop-types';
import Typed from 'typed.js';

import stageClasses from '../../utils/stageClasses';

import './Description.scss'

class Description extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  componentDidMount() {
    if (this.props.animate) {
      new Typed('.description', {
        strings: [this.props.textDesktop],
        typeSpeed: 25,
        startDelay: 200,
        showCursor: false,
        onComplete: () => {
          setTimeout(this.props.animationFinished, 400)
        }
      })
    }
  }

  render() {
    return (
      <div className={`description ${this.props.class}`}>
        {!this.props.animate && this.props.textMobile}
      </div>
    );
  }
}

Description.propTypes = {
  animate: PropTypes.bool,
  animationFinished: PropTypes.func,
  class: PropTypes.string,
  textDesktop: PropTypes.string,
  textMobile: PropTypes.string,
};

export default Description;