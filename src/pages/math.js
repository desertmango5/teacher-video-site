import React from 'react' 
import VideoComponent from '../components/VideoComponent'
import style from '../styles/math.module.scss'


const Math = ({ data }) => (
  <div>
    <section className={style.videos}>
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

export default Math

export const mathVideos = graphql`
  query MathVideos {
    allContentfulVideo(
      sort: { fields: [date], order: DESC }
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