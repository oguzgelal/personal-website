import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button'

import './ButtonGroup.scss'

const ButtonGroup = props => {

  const buttons = [];
  props.buttons.map((b, i) => {
    buttons.push(
      <Button
        key={i}
        type={b.type}
        title={b.title}
        url={b.url}
      />
    )
  })

  return (
    <div className="button-group">
      {buttons}
    </div>
  );
};

ButtonGroup.propTypes = {
  buttons: PropTypes.array.isRequired
};

export default ButtonGroup;