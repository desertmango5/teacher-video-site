import React from 'react'
import style from '../styles/index.module.scss'
import Hero from '../components/Hero'
import VideoComponent from '../components/VideoComponent'

const IndexPage = ({ data }) => (
  <div>
    <Hero />
    <main className={style.main__body}>
      <div className={style.main__transform}>
        <h2 className={style.main__heading}>Recently Added Videos</h2>
      </div>
    </main>
    <section className={style.videos}>
      <hr/>
      {data.allContentfulVideo.edges.map((video) => (
        <div key={video.node.id}>
          <VideoComponent 
            subject={video.node.subject}
            videoId={video.node.videoId} 
          />
        </div>
      ))}
    </section>
  </div>
)

export default IndexPage

export const recentVideos = graphql`
  query ThreeMostRecent {
    allContentfulVideo(
      sort: { fields: [date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          date
          subject
          videoId
        }
      }
    }
  }
`