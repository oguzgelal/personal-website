import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button'

import './ButtonGroup.scss'

const ButtonGroup = props => {

  const buttons = [];
  props.buttons.map(b => {
    buttons.push(
      <Button
        key={b.id}
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