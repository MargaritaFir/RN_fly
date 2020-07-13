import axios from 'axios';
import { put, all, takeEvery, takeLatest} from 'redux-saga/effects';
// import { takeEvery } from 'redux-saga';

import { GET_LIST } from '../actions/listActions'

const CURRENCY = 'RUB';
const COUNTRY ='RU';
const ORIGIN_PLACE ='SVO';
const DESTINATION_PLACE = 'JFK';
const outBoundDate= '2020-08-01';

const API = "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
const KEY = '967ea4cb99mshe3f35d13e38b90cp1519c4jsnc0fd1c9e0c89'    
    // const URL = `https://${API}/apiservices/browseroutes/v1.0/RU/RUB/en-US/SVO-sky/JFK-sky/2020-08-01`;
const URL = `https://${API}/apiservices/browseroutes/v1.0/${COUNTRY}/${CURRENCY}/en-US/${ORIGIN_PLACE}-sky/${DESTINATION_PLACE}-sky/${outBoundDate}`;
const headers = {
        "content-type":"application/octet-stream",
        "x-rapidapi-host":API,
        "x-rapidapi-key":KEY,
        "useQueryString":true
        }           

const params = {
        "inboundpartialdate":"2020-08-01",
        "mode": 'no-cors'
        }

const config = {
        method: 'get',
        url: URL,
        headers: headers,
        params: params
    }


function* fetchList(action) {
        console.log('fetch')
        const dataList = yield axios(config)
        .then(response => response.data); 
        yield put({ type: "LIST_RECEIVED", dataList: dataList });
}


function* actionWatcher() {     

        yield takeLatest(GET_LIST , fetchList);
        console.log('watch') ; 
}
export default function* rootSaga() {
        console.log('root');
        yield all([
                actionWatcher(),
        ])
}