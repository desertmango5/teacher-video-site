import React from 'react';
import style from './index.module.scss';

const VideoComponent = (props) => {
  const url = `https://www.youtube.com/embed/${props.videoId}`;

  return (
    <div className={style.video}>
      <h4 className={style.category}><span className={style.small}>Subject:</span> {props.subject}</h4>
      <iframe 
        title={props.title}
        id="ytplayer"
        type="text/html"
        src={url}
        frameBorder="0"
        allowFullScreen
        className={style.video__player}
      />
    </div>
  );
};


export default VideoComponent; 
