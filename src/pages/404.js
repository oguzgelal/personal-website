import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link'

class NotFoundPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  componentDidMount() {
    navigateTo('/')
  }

  render() {
    return (
      <div />
    );
  }
}

NotFoundPage.propTypes = {
};

export default NotFoundPage;