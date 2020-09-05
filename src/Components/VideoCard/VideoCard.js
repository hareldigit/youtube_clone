import React ,{useState} from 'react'
import './VideoCard.css'
import {Avatar} from "@material-ui/core"

function VideoCard({staticImage,gifImage,title,channel,views,timestamp,channelImage}) {

const [isHover,setIsHover] = useState(false)

    return (
        <div className="videoCard"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}>
            <img src={!isHover?staticImage:gifImage} alt="" className="videoCard__thumbnail"/>
            <div className="videoCard__info">
                <Avatar className="videoCard__avatar" alt={channel} src={channelImage}></Avatar>
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p> 
                </div>
            </div>
        </div>
    )
}

export default VideoCard
