import React from 'react' 
import VideoComponent from '../components/VideoComponent'
import style from '../styles/language.module.scss'

class Language extends React.Component {
  render() {

    const videos = this.props.data.allContentfulVideo.edges
    // filter for 'Language' videos only
    const languageVideos = videos.filter((video) => {
      return video.node.subject[0] === 'Language'
    })

    const number = languageVideos.length

    return (
      <div>
        <h2 className={style.main__heading}>Language Videos</h2>
        <h5 className={style.number}>{number} {number > 1 ? 'Videos' : 'Video'}</h5>
        <section className={style.videos}>
          <hr/>
          {languageVideos.map((video) => (
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
  }
} 

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