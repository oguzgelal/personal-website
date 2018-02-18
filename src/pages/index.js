import React from 'react'
import PropTypes from 'prop-types'

import Main from '../components/Main/Main'
import MainLite from '../components/MainLite/MainLite'

const IndexPage = props => {

  let supported = true;

  try {
    supported = CSS.supports('width', '1vw');
    supported = CSS.supports('height', '1vh');
    supported = CSS.supports('position', 'fixed');
    supported = (
      CSS.supports('display', 'flex') ||
      CSS.supports('display', '-webkit-box') ||
      CSS.supports('display', '-moz-box') ||
      CSS.supports('display', '-ms-flexbox') ||
      CSS.supports('display', '-webkit-flex')
    );
    supported = (
      CSS.supports('clip-path', 'polygon(100% 0, 0 100%, 100% 100%)') ||
      CSS.supports('-webkit-clip-path', 'polygon(100% 0,0 100%,100% 100%)')
    );
  } catch (e) {
    supported = false;
  }

  let render = <Main />

  if (!supported) {
    render = <MainLite />
  }

  return (
    render
  );
};

IndexPage.propTypes = {
};

export default IndexPage;