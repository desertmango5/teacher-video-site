import React from 'react'
import style from './index.module.scss'

class VideoComponent extends React.Component {
  render() {
    const url = `https://www.youtube.com/embed/${this.props.videoId}`
    return (
      <div className={style.video}>
        <h4 className={style.category}><span className={style.small}>Subject:</span> {this.props.subject}</h4>
        <iframe 
          id='ytplayer'
          type='text/html'
          
          src={url}
          frameBorder='0'
          allowFullScreen
          className={style.video__player}
        >
        </iframe>
      </div>
    )
  }
} 

export default VideoComponent
