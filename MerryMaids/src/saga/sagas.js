import {
    put,
    call,
    takeLatest,
  } from "redux-saga/effects";
  import API from "../constants/APIUrls";
  import API_CONST from "../constants/APIConstants";
  import ACTION_TYPES from "../actions/actionsType";
  

  const _apiCall = (url, data) => {
    console.log("post data>>>" + url + " " + JSON.stringify(data));
    console.log("post url >>>" + url + " " + JSON.stringify(url));
    return fetch(url, data)
      .then(res => {
        return { res: res, res_json: res.json() };
      })
      .catch(e => {
        throw e;
      });
  }

  const _extJSON = p => {
    return p.then(res => res);
  };

  function* userLogin(action) {
    var postData = action.data;
    try {
      let response = yield call(_apiCall, API.USER_LOGIN, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });
      var responseJSON = yield call(_extJSON, response.res_json);
      yield put({
        type: ACTION_TYPES.LOGIN_USER_RES,
        payload: responseJSON
      });
    } catch (e) {
      console.log('Error: ' + e);
      yield put({
        type: ACTION_TYPES.LOGIN_USER_RES,
        payload: undefined
      });
    }
  }

  function* rootSaga() {
    yield takeLatest(API_CONST.N_USER_LOGIN, userLogin);
    
}

export default rootSaga;