import { Redirect } from 'react-router-dom'
import Discover from "@/pages/discover"
import Mine from '@/pages/mine'
import Friends from '@/pages/friends'
import Recommend from '@/pages/discover/components/recommend'
import Rank from '@/pages/discover/components/rank'
import PlayList from '@/pages/discover/components/playList'
import Artist from '@/pages/discover/components/artist'
import Album from '@/pages/discover/components/album'
import Djradio from '@/pages/discover/djradio'
import PlayerDetail from '@/pages/player/player-detail'
const routes = [
    {
        path: "/",
        exact: true,
        render: () => {
            return <Redirect to="/discover"></Redirect>
        }
    },
    {
        path: "/discover",
        component: Discover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => {
                    return <Redirect to="/discover/recommend"></Redirect>
                }
            },
            {
                path: "/discover/recommend",
                component: Recommend
            },
            {
                path: "/discover/rank",
                component: Rank
            },
            {
                path: "/discover/playlist",
                component: PlayList
            },
            {
                path: "/discover/djradio",
                component: Djradio
            },
            {
                path: "/discover/artist",
                component: Artist
            },
            {
                path: "/discover/album",
                component: Album
            },
            {
                path: "/discover/detail",
                component: PlayerDetail
            },
        ]
    },
    {
        path: "/mine",
        component: Mine,
    },
    {
        path: "/friends",
        component: Friends,
    },


]

export default routes