import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Greeting from '../Greeting/Greeting';
import Description from '../Description/Description';
import stageClasses from '../../utils/stageClasses';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import {
  LINKS,
  GREETINGS_FULL_ANIMATED,
  GREETINGS_MOBILE,
  DESCRIPTION_FULL_ANIMATED,
  DESCRIPTION_MOBILE
} from '../../config/settings';

import './Main.scss';

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      stage: 0
    };

    this.stageFinished = this.stageFinished.bind(this);
  }

  stageFinished() {
    const s = this.state;
    s.stage += 1;
    this.setState(Object.assign({}, s))
  }

  componentDidMount() {
    if (window.innerWidth > 500) {
      this.setState({ stage: 1 })
    } else {
      this.setState({ stage: -1 })
    }
  }

  render() {
    return (
      <div className="main">
        <div className="main-bg">
          <div className={`t1 ${stageClasses(this.state.stage)}`} />
          <div className={`t2 ${stageClasses(this.state.stage)}`} />
        </div>
        <div className={`main-greetings ${stageClasses(this.state.stage)}`}>
          {
            (this.state.stage >= 1 || this.state.stage === -1) &&
            <Greeting
              animate={this.state.stage !== -1}
              animationFinished={this.stageFinished}
              class={stageClasses(this.state.stage)}
              textDesktop={GREETINGS_FULL_ANIMATED}
              textMobile={GREETINGS_MOBILE}
            />
          }
          {
            (this.state.stage >= 2 || this.state.stage === -1) &&
            <Description
              animate={this.state.stage !== -1}
              animationFinished={this.stageFinished}
              class={stageClasses(this.state.stage)}
              textDesktop={DESCRIPTION_FULL_ANIMATED}
              textMobile={DESCRIPTION_MOBILE}
            />
          }
        </div>
        {
          (this.state.stage >= 2 || this.state.stage === -1) &&
          <ButtonGroup buttons={LINKS} />
        }
      </div>
    );
  }
}

Main.propTypes = {
};

export default Main;