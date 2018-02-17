import React from 'react'
import style from '../styles/index.module.scss'
import Hero from '../components/Hero'
import VideoComponent from '../components/VideoComponent'

const IndexPage = () => (
  <div>
    <Hero />
    <main className={style.main__body}>
      <h2 className={style.main__heading}>Recently Added Videos</h2>
    </main>
    <section className={style.videos}>
      <VideoComponent 
        subject="Math"
        videoId="Xh9jAD1ofm4" 
      />
    </section>
  </div>
)

export default IndexPage
