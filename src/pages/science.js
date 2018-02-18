import React from 'react' 
import VideoComponent from '../components/VideoComponent'
import style from '../styles/science.module.scss'


const Science = ({ data }) => (
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

export default Science

export const scienceVideos = graphql`
  query ScienceVideos {
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