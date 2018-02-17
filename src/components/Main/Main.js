import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Greeting from '../Greeting/Greeting';
import Description from '../Description/Description';
import stageClasses from '../../utils/stageClasses';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import links from '../../config/links';

import './Main.scss';

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      stage: 0,
      mobile: false,
    };

    this.stageFinished = this.stageFinished.bind(this);
  }

  stageFinished() {
    const s = this.state;
    s.stage += 1;
    this.setState(Object.assign({}, s))
  }

  componentDidMount() {
    if (window.innerWidth > 400) {
      this.setState({
        stage: 1,
        mobile: false,
      })
    } else {
      this.setState({
        stage: -1,
        mobile: true,
      })
    }
  }

  render() {
    return (
      <div className="main">
        <div className={`main-greetings ${stageClasses(this.state.stage)}`}>
          {
            (this.state.stage >= 1 || this.state.stage === -1) &&
            <Greeting
              animate={!this.state.mobile}
              animationFinished={this.stageFinished}
              class={stageClasses(this.state.stage)}
              textDesktop="Hi. ^400 I'm Oguz Gelal"
              textMobile="Hi. I'm Oguz Gelal"
            />
          }
          {
            (this.state.stage >= 2 || this.state.stage === -1) &&
            <Description
              animate={!this.state.mobile}
              animationFinished={this.stageFinished}
              class={stageClasses(this.state.stage)}
              textDesktop="I'm a full-stack web developer"
              textMobile="I'm a full-stack web developer"
            />
          }
        </div>
        {
          (this.state.stage >= 2 || this.state.stage === -1) &&
          <ButtonGroup buttons={links} />
        }
      </div>
    );
  }
}

Main.propTypes = {
};

export default Main;