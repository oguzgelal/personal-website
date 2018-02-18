import React from 'react';
import PropTypes from 'prop-types';
import {
  LINKS,
  GREETINGS_FULL,
  GREETINGS_MOBILE,
  DESCRIPTION_FULL,
  DESCRIPTION_MOBILE
} from '../../config/settings';

import './MainLite.scss';

class MainLite extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {

    const buttons = [];
    LINKS.map(b => {
      buttons.push(
        <div key={b.id} className="main-lite-buttons-button">
          <a href={b.url}>
            {b.title}
          </a>
        </div>
      )
    })

    return (
      <div className="main-lite">
        <div className="main-lite-title">{GREETINGS_FULL}</div>
        <div className="main-lite-description">{DESCRIPTION_FULL}</div>
        <div className="main-lite-buttons">
          {buttons}
        </div>
      </div>
    );
  }
}

MainLite.propTypes = {
};

export default MainLite;