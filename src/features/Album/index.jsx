import React from 'react'
import AbumList from './components/AlbumList'
const abumList = [
    {
        id: 1,
        title: "Today's EDM",
        thumbnaiUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/d/2/1/3d21739be702017b25c50651eb5cc70e.jpg",
    },
    {
        id: 2,
        title: "Tiktok Remix",
        thumbnaiUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/2/1/a/d21a2a56277a3992dad265595438c37f.jpg",
    },
    {
        id: 3,
        title: "Top Hits Remix",
        thumbnaiUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/5/7/6/d5762221d5031c280bd1b127dcd2463d.jpg",
    },
    {
        id: 4,
        title: "Rap Việt Mới Nhất",
        thumbnaiUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/9/3/4/d93479e5b164c28fd7fb7be4a3f208b8.jpg",
    }
]


function AlbumFeature() {
    return (
        <AbumList abumList={abumList} />
    )
}

export default AlbumFeature