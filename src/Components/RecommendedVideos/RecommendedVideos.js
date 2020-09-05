import React from 'react'
import './RecommendedVideos.css'
import VideoCard from '../VideoCard/VideoCard';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>
                Recommended
            </h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                title="Relaxing Music with Nature Sounds - Waterfall HD"
                views="36M Views"
                timestamp="before 4 years"
                channelImage="https://yt3.ggpht.com/a/AATXAJxNPiI8XqY68BEqQJKitK3m5MkFWT6Fl28CXEHt=s48-c-k-c0xffffffff-no-rj-mo"
                channel="321 Relaxing - Meditation Relax Clips"
                gifImage="https://i.ytimg.com/an_webp/lE6RYpe9IT0/mqdefault_6s.webp?du=3000&sqp=CMmvz_oF&rs=AOn4CLAPIJjhfMbkTWVkD6MrSVpHzoAfwQ"
                staticImage="https://i.ytimg.com/vi_webp/lE6RYpe9IT0/mqdefault.webp"
                />
            </div>
       </div>
    )
}

export default RecommendedVideos
