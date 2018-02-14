import React from 'react';
import PropTypes from 'prop-types';
import Typed from 'typed.js';
import cx from 'classnames';

import './Header.scss';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      greeting: false,
      description: false
    };
  }

  startGreeting() {
    return new Promise(resolve => {
      new Typed('.greeting', {
        strings: ['Hi. ^400 I\'m Oguz Gelal'],
        typeSpeed: 50,
        onComplete: () => {
          setTimeout(resolve, 700);
        }
      });
    })
  }

  startDescription() {
    return new Promise(resolve => {
      new Typed('.description', {
        strings: ['I\'m a full-stack web developer'],
        typeSpeed: 25,
        startDelay: 200,
        onComplete: () => {
          setTimeout(resolve, 400)
        }
      })
    })
  }

  componentDidMount() {
    Promise.resolve()
      .then(this.startGreeting)
      .then(() => { this.setState({ greeting: true }) })
      .then(this.startDescription)
      .then(() => { this.setState({ description: true }) })
  }

  render() {
    return (
      <div className={cx('greeting-container', { 'finished': this.state.greeting })}>
        <div className="greeting" />
        <div className="description" />
      </div>
    );
  }
}

Header.propTypes = {
};

export default Header;