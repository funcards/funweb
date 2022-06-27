import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { routes } from './config'
import { PageTitle, Loading } from './components'
import styles from './App.module.css'

const HomePage = lazy(() => import('./pages/home/HomePage'))

export const App: React.FC = () => (
  <div className={styles.app}>
    <PageTitle />
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={routes.root} element={<HomePage />} />
      </Routes>
    </Suspense>
  </div>
)
