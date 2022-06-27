import { all } from 'redux-saga/effects'

import { isProduction } from '@/config'

export function* rootWatcher() {
  try {
    yield all([])
  } catch (e) {
    if (!isProduction) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }
}
