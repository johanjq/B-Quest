import React, {Component} from 'react';
import Youtube from 'react-youtube';

//https://youtu.be/_nBlN9yp9R8
//https://www.youtube.com/watch?v=_nBlN9yp9R8

class ReactYoutube extends Component{

    VideoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
        console.log(event.target)
      }

    render(){
        const opts = {
            height: '320',
            width: '500',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1
            }
        };
          const {videoId} = this.props
          return (
            <div>
                <Youtube
                videoId={videoId}
                opts={opts}
                onReady={this.VideoOnReady}
                />
            </div>
          );
    }   
}

export default ReactYoutube;