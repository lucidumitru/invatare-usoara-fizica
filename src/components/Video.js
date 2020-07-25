import React from "react";

const Video = ({src}) => {
    return (
        <div className="video-responsive">
            <div className="video-frame">
                <iframe width="560" height="315" src={src} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
        </div>
    )
}

export default Video;