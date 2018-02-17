import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../styles/style.scss'

import Header from '../components/Header'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Miss Kelly's Room"
      meta={[
        { name: 'description', content: 'Collection of education videos for my KG students so they can practice English at home.' },
        { name: 'keywords', content: 'english, language, math, maths, science, practice, student, kg, kindergarten, learning, education' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
