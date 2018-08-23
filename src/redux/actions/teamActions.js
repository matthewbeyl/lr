export const TEAM_ACTIONS = {
    FETCH_TEAM: 'FETCH_TEAM',
    SET_USER_TEAM: 'SET_USER_TEAM',
    DELETE_PLAYER: 'DELETE_PLAYER',
    SET_TEAM: 'SET_TEAM',
    EDIT_NOTES: 'EDIT_NOTES',
    ADD_QBS: 'ADD_QBS',
    ADD_RBS: 'ADD_RBS',
    ADD_WRS: 'ADD_WRS',
    ADD_TES: 'ADD_TES',
    ADD_KS: 'ADD_KS',
    ADD_DEFS: 'ADD_DEFS'
}

export function fetchTeam() {
    return { type: TEAM_ACTIONS.FETCH_TEAM }
};