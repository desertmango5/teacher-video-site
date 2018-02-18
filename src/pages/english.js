import React from 'react' 
import VideoComponent from '../components/VideoComponent'
import style from '../styles/language.module.scss'

class English extends React.Component {
  render() {

    const videos = this.props.data.allContentfulVideo.edges
    // filter for 'English' videos only
    const englishVideos = videos.filter((video) => {
      return video.node.subject === 'English'
    })

    const number = englishVideos.length

    return (
      <div>
        <h2 className={style.main__heading}>English Videos</h2>
        <h5 className={style.number}>{number} {number > 1 ? 'Videos' : 'Video'}</h5>
        <section className={style.videos}>
          <hr/>
          {englishVideos.map((video) => (
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

export default English

export const englishVideos = graphql`
  query EnglishVideos {
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