import React, { memo } from 'react'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import routes from './router'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
export default memo(function App() {
    return (
        <HashRouter>
            <AppHeader />
            {renderRoutes(routes)}
            <AppFooter />
        </HashRouter>
    )
})
