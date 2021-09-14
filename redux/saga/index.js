import { all } from 'redux-saga/effects';
import getArticleSaga from './sagaReq'

export default function* rootSaga() {
    yield all([
        getArticleSaga()
    ])
}