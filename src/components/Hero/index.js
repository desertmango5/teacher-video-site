import React from 'react'
import Link from 'gatsby-link'
import style from './index.module.scss'

const Hero = () => (
  <div>
    <div className={style.hero}>
      <img
        src="https://res.cloudinary.com/djsqo4kys/image/upload/f_auto/v1518877802/hero-sm_gnkbhy.jpg"
        alt="silhouette of boy reading a book"
        className={style.hero__image}
      />
      <section className={style.hero__text}>
        <h3 className={style.hero__h3}>KG1 English Videos</h3>
        <h5 className={style.hero__h5}>Practice your English at home</h5>
        <section className={style.hero__buttons}>
          <Link to="/english/">
            <button className={style.hero__button}>English</button>
          </Link>
          <Link to="/math/">
            <button className={style.hero__button}>Math</button>
          </Link>
          <Link to="/science/">
            <button className={style.hero__button}>Science</button>
          </Link>
        </section>
      </section>
    </div>
  </div>
)

export default Hero
