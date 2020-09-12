import React from 'react'
import './ChannelRow.css'
import { Avatar } from '@material-ui/core';
import { CheckCircleOutlineOutlined } from '@material-ui/icons';


function ChannelRow({image,channel,verefied,subs,noOfVideos,description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" 
            alt={channel} src={image}/>
            <div className="channelRow__text">
                <h4>{channel} {verefied && <CheckCircleOutlineOutlined/>}</h4>
                <p>
                    {subs} subscribers • {noOfVideos} videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
