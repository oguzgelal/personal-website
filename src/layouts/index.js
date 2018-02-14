import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './fonts.scss'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Oguz Gelal | Personal website"
      meta={[
        { name: 'description', content: 'Oguz Gelal | Personal website' },
        { name: 'keywords', content: 'oguz, gelal, oguz gelal' },
      ]}
    />
    {
      children()
    }
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
