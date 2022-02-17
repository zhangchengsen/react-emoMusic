import Discover from "@/pages/discover"
import Mine from '@/pages/mine'
import Friends from '@/pages/friends'
const routes = [
    {
        path: "/",
        exact: true,
        component: Discover,
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