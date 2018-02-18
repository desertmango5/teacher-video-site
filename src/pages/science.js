import React from 'react' 
import VideoComponent from '../components/VideoComponent'
import style from '../styles/science.module.scss'


class Science extends React.Component {
  render() {

    const videos = this.props.data.allContentfulVideo.edges
    // filter for 'Science' videos only
    const scienceVideos = videos.filter((video) => {
      return video.node.subject[0] === 'Science'
    })

    return (
      <div>
        <h2 className={style.main__heading}>Science Videos</h2>
        <section className={style.videos}>
          <hr/>
          {scienceVideos.map((video) => (
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