import React from 'react';
import './Sidebar.css';
import SidebarRow from '../SidebarRow/SidebarRow';
import {Home,Whatshot,Subscriptions,VideoLibrary,History,OndemandVideo,WatchLater,ThumbUpAltOutlined,ExpandMoreOutlined} from '@material-ui/icons';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow selected Icon={Home} title='Home' />
            <SidebarRow Icon={Whatshot} title='Trending' />
            <SidebarRow Icon={Subscriptions} title='Subscription' />
            <hr/>
            <SidebarRow Icon={VideoLibrary} title='Library' />
            <SidebarRow Icon={History} title='History' />
            <SidebarRow Icon={OndemandVideo} title='Your videos' />
            <SidebarRow Icon={WatchLater} title='Watch Later' />
            <SidebarRow Icon={ThumbUpAltOutlined} title='Liked video' />
            <SidebarRow Icon={ExpandMoreOutlined} title='Show more' />
        </div>
    )
}

export default Sidebar
