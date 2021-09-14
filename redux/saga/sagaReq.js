import { takeEvery , put , call } from 'redux-saga/effects';
import { GET_ARTICLES } from '../actions/actionType';
import { getArticle } from './APIreq'
import { requestSuccessed, requestPending, requestFailed } from '../actions/actionCreator';

function* fetchGetArticle(action) {
    
    yield put(requestPending())
    try {
        const data = yield call(getArticle)
        yield put(requestSuccessed({data}))
        console.log(data);
    } catch (error) {
        yield put(requestFailed())
    }
     
}

function* getArticleSaga(){
    yield takeEvery(GET_ARTICLES, fetchGetArticle)
}
export default getArticleSaga