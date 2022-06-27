import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { isProduction } from '@/config'

import { rootWatcher } from './root.saga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => [sagaMiddleware, ...getDefaultMiddleware({ thunk: false })],
  devTools: !isProduction,
})

sagaMiddleware.run(rootWatcher)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
