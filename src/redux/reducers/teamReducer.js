import { TEAM_ACTIONS } from '../actions/teamActions';
import { combineReducers } from 'redux';

const initialState = {
    team: {
        quarterbacks: [],
        runningbacks: [],
        widereceivers: [],
        tightends: [],
        kickers: [],
        defenses: []
    }
}

const teamReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEAM_ACTIONS.ADD_QBS:
            return {
                // ...state,
                ...state.team,
                quarterbacks: state.team.quarterbacks && state.team.quarterbacks.length > 0 ? [...state.team.quarterbacks, action.payload] : [action.payload]
            }
        case TEAM_ACTIONS.ADD_RBS:
            return {
                ...state,
                ...state.team,
                runningbacks: [...state.runningbacks, action.payload]
            }
        case TEAM_ACTIONS.ADD_WRS:
            return {
                ...state,
                ...state.team,
                widereceivers: [...state.widereceivers, action.payload]
            }
        case TEAM_ACTIONS.ADD_TES:
            return {
                ...state,
                ...state.team,
                tightends: [...state.tightends, action.payload]
            }
        case TEAM_ACTIONS.ADD_KS:
            return {
                ...state,
                ...state.team,
                kickers: [...state.kickers, action.payload]
            }
        case TEAM_ACTIONS.ADD_DEFS:
            return {
                ...state,
                ...state.team,
                defenses: [...state.defenses, action.payload]
            }
        default:
            return state;
    }
};

const userTeamReducer = (state = [], action) => {
    console.log(action);
    
    switch (action.type) {
        case TEAM_ACTIONS.SET_USER_TEAM:        
            return action.payload || state;
        default:
            return state;
    }
};

export default combineReducers({
    teamReducer,
    userTeamReducer
});