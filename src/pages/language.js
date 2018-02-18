import React from 'react' 
import VideoComponent from '../components/VideoComponent'
import style from '../styles/language.module.scss'

const Language = ({ data }) => (
  <div>
    <h2 className={style.main__heading}>Language Videos</h2>
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

export default Language

export const languageVideos = graphql`
  query LanguageVideos {
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