import axios from 'axios';
import { put, all, takeEvery, takeLatest} from 'redux-saga/effects';
import { GET_LIST, GET_DATE_LIST} from '../actions/listActions';

//Константы
const CURRENCY = 'RUB';
const COUNTRY ='RU';
const ORIGIN_PLACE ='SVO';
const DESTINATION_PLACE = 'JFK';
const API = "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
const KEY = '967ea4cb99mshe3f35d13e38b90cp1519c4jsnc0fd1c9e0c89'    

// const URL = `https://${API}/apiservices/browseroutes/v1.0/RU/RUB/en-US/SVO-sky/JFK-sky/2020-08-01`;

const makeConfig = (date) => {
        const URL = `https://${API}/apiservices/browseroutes/v1.0/${COUNTRY}/${CURRENCY}/en-US/${ORIGIN_PLACE}-sky/${DESTINATION_PLACE}-sky/${date}`;    
        const headers = {
                "content-type":"application/octet-stream",
                "x-rapidapi-host":API,
                "x-rapidapi-key":KEY,
                "useQueryString":true
                }           

        const params = {
                "inboundpartialdate":date,
                "mode": 'no-cors'
                }
        const config = {
                 method: 'get',
                url: URL,
                headers: headers,
                params: params
        }

        return config;
}


function* fetchList() {
        const currentDate =JSON.parse(JSON.stringify(new Date())).split('T')[0];
        const config = makeConfig(currentDate)
        console.log('fetch');

        const dataList = yield axios(config)
        .then(response => {
               return response.data.Quotes;
        }); 

        yield put({ type: "LIST_RECEIVED", dataList: dataList });
}

// Потому что API возвращает все рейсы за текущий месяц (если дата в июле - то весь июль, если в сентябре - за весь сентябрь)

function* fetchDateList(action) {
        console.log('fetch');
        const config = makeConfig(action.date)

        const dataList = yield axios(config)
        .then(response => {
               return response.data.Quotes.filter((item) => item.OutboundLeg.DepartureDate.split('T')[0] === action.date )
        }); 

        yield put({ type: "LIST_RECEIVED", dataList: dataList });
}



function* actionWatcher() {     
        yield takeLatest(GET_LIST , fetchList);
        yield takeLatest(GET_DATE_LIST , fetchDateList);
        
        console.log('watch') ; 
}
export default function* rootSaga() {
        console.log('root');
        yield all([
                actionWatcher(),
        ])
}