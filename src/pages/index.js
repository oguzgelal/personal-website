import React from 'react';
import PropTypes from 'prop-types';
import bowser from 'bowser';

import Main from '../components/Main/Main'
import MainLite from '../components/MainLite/MainLite'

const IndexPage = props => {

  let render = <Main />
  
  if (bowser.msie || bowser.msedge || bowser.opera) {
    render = <MainLite />
  }

  return (
    render
  );
};

IndexPage.propTypes = {
};

export default IndexPage;