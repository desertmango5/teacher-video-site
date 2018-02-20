import React from 'react' 
import VideoComponent from '../components/VideoComponent'
import style from '../styles/science.module.scss'


class Science extends React.Component {
  render() {

    const videos = this.props.data.allContentfulVideo.edges
    const number = videos.length

    return (
      <div>
        <h2 className={style.main__heading}>Science Videos</h2>
        <h5 className={style.number}>{number} {number > 1 ? 'Videos' : 'Video'}</h5>
        <section className={style.videos}>
          <hr/>
          {videos.map((video) => (
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

export default Science

export const scienceVideos = graphql`
  query ScienceVideos {
    allContentfulVideo(
      filter: { subject: { eq: "Science" }}
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