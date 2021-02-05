const initData = { game: {}, screen: {}, isLoading: true };

const detailReducer = (state = initData, action) => {
    switch (action.type) {
        case "GET_DETAIL": return {
            ...state,
            game: action.payload.game,
            screen: action.payload.screen,
            isLoading: false
        };
        case "LOADING_DETAIL": return { ...state, isLoading: true };
        case "BACK_TO_HOME": return { ...state, isLoading: true };
        default: return { ...state };
    }
}

export default detailReducer;