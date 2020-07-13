import config from '../config';
import { TEXT_CHANGE, CONVERSION_SUCCESS, CONVERSION_FAIL } from '../action-types';
import { replaceUrls } from '../string-utils';


export default (state = config.defaultURLState , action) => {
  switch (action.type) {
    case (TEXT_CHANGE):
      return {
        ...state,
        textValue: action.value
      }
    case (CONVERSION_SUCCESS):
      return {
        ...state,
        textValue: replaceUrls(state.textValue, action.response.reduce((map, next) => ({ ...map, [next.original]: next.shortened }), {})),
        request_status: 'success',
      }
    case (CONVERSION_FAIL):
      return {
        ...state,

        request_status: 'failed',
      }
    default:
      return state;
  }
}
