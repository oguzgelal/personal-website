import React from 'react';
import PropTypes from 'prop-types';
import Typed from 'typed.js';

import stageClasses from '../../utils/stageClasses';

import './Greeting.scss'

class Greeting extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  componentDidMount() {
    if (this.props.animate) {
      new Typed('.greeting', {
        strings: [this.props.textDesktop],
        typeSpeed: 50,
        onComplete: () => {
          setTimeout(this.props.animationFinished, 700);
        }
      });
    }
  }

  render() {
    return (
      <div className={`greeting ${this.props.class}`}>
        {!this.props.animate && this.props.textMobile}
      </div>
    );
  }
}

Greeting.propTypes = {
  animate: PropTypes.bool,
  animationFinished: PropTypes.func,
  class: PropTypes.string,
  textDesktop: PropTypes.string,
  textMobile: PropTypes.string,
};

export default Greeting;