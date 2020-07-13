import { takeEvery, select, call, put } from 'redux-saga/effects';
import { TEXT_SUBMIT, CONVERSION_SUCCESS, CONVERSION_FAIL } from '../action-types';
import { textSelector } from '../selectors';
import { extractURLs } from '../string-utils';

import URLService from '../services/urlService';

const service = new URLService();

export function* handleUrlRequest (action) {
  const text = yield select(textSelector);
  const urls = yield call(extractURLs, text);
  try {
    const response = yield call([service, service.getShortenedURLs], urls);
    yield put({
      type: CONVERSION_SUCCESS,
      response: response.data,
    })
  } catch {
    yield put({
      type: CONVERSION_FAIL
    })
  }
}

export default function* () {
  yield takeEvery(TEXT_SUBMIT, handleUrlRequest);
}
