import React, { Suspense } from 'react'
import style from './index.module.less'
import { Outlet } from 'react-router-dom'

import AppHeader from '@/components/app-header'
import AppNav from '@/components/app-nav'
import AppFooter from '@/components/app-footer'
import AppLoading from '@/components/app-loading'


function Layout() {
    return (
        <div className={style.layoutContainer}>
            <AppNav></AppNav>
            <AppHeader></AppHeader>
            <main className="mainContainer">
                <Suspense
                    fallback={<AppLoading />}
                >
                    <Outlet></Outlet>
                </Suspense>
            </main>
            <AppFooter></AppFooter>
        </div>
    )
}

export default Layout
