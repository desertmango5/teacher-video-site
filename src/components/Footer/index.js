import React from 'react' 
import style from './index.module.scss' 
import Gatsby from '../../assets/icons/gatsby-logo.png'
import Netlify from '../../assets/icons/netlify-logo.png'
import Contentful from '../../assets/icons/contentful-logo.png'

const Footer = () => (
  <div>
    <footer className={style.footer}>
      <div className={style.logos}>
        <p>Powered by</p>
        <a href="https://www.gatsbyjs.org/">
          <img 
            src={Gatsby} 
            alt="GatsbyJS logo" 
            title="GatsbyJS"
            className={style.logo}
          />
        </a>
        <a href="https://www.netlify.com/">
          <img 
            src={Netlify} 
            alt="Netlify logo" 
            title="Netlify"
            className={style.logo}
          />
        </a>
        <a href="https://www.contentful.com/">
          <img 
            src={Contentful} 
            alt="Contentful CMS logo" 
            title="Contenful CMS"
            className={style.logo}
          />
        </a>
      </div>
      <p className={style.copyright}>Copyright &copy; 2018 Kelly Manges</p>
    </footer>
  </div>
)

export default Footer
