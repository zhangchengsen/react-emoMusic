import React, { memo } from 'react'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import { Provider } from 'react-redux'
import store from './store'
import routes from './router'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Player from '@/pages/player/app-player-bar'
export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <AppHeader />
                {renderRoutes(routes)}
                <Player></Player>
                <AppFooter />
            </HashRouter>
        </Provider>

    )
})
