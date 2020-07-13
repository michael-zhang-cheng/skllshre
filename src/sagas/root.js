import { fork, all } from 'redux-saga/effects';
import urlSaga from './url';

export default function* () {
  yield all([fork(urlSaga)])
}
