import { PLAYER_ACTIONS } from '../actions/playerActions';
import { put, takeLatest } from 'redux-saga/effects';
import { getWidereceivers } from '../requests/getPositionsRequests';

function* wrSaga() {    
    yield takeLatest(PLAYER_ACTIONS.FETCH_WR, fetchWR);
  }

function* fetchWR() {    
    try {
        const WRs = yield getWidereceivers();
        yield put({
            type: PLAYER_ACTIONS.SET_WR,
            payload: WRs
          });
    } catch (error) {
        console.log(error, 'error in fetch')
    }
}

export default wrSaga;