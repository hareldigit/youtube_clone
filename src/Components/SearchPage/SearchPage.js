import React from 'react'
import './SearchPage.css'
import { TuneOutlined } from '@material-ui/icons';
import ChannelRow from '../ChannelRow/ChannelRow'
import VideoRow from '../VideoRow/VideoRow'

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage__filter">
                <TuneOutlined/>
                <h2>Filter</h2>
            </div>
            <ChannelRow
            image="https://yt3.ggpht.com/a/AATXAJxNPiI8XqY68BEqQJKitK3m5MkFWT6Fl28CXEHt=s100-c-k-c0xffffffff-no-rj-mo"
            channel="321 Relaxing - Meditation Relax Clips"
            verefied
            subs="1.08M"
            noOfVideos={571}
            description="Relaxing clips with sounds and music to meditation, sleep, relaxation, study and concentration. Relax 1 minute, 3 minutes..."
            />
            <hr/>
            <VideoRow
                subs="8.8M"
                description="Get the new Yellow Brick Cinema iOS app for a 7-day FREE trial: https://apple.co/30uHqHe 3 Hour Zen Meditation Music: Nature"
                timestamp="before 4 years"
                channel="Yellow Brick Cinema - Relaxing Music"
                title="3 Hour Zen Meditation Music: Nature Sounds, Relaxing Music, Calming Music, Healing Music, ✿071C"
                image="https://i.ytimg.com/vi/eKFTSSKCzWA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBziwGN5QSW0-NrWeO76_netG8RAQ"
            />
        </div>
    )
}

export default SearchPage
