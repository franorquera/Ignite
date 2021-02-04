import { act } from "react-dom/test-utils";

const initData = { game: {}, screen: {} };

const detailReducer = (state=initData, action) => {
    switch (action.type) {
        case "GET_DETAIL": return {
            ...state, 
            game: action.payload.game,
            screen: action.payload.screen
        };
        default: return {...state};
    }
}

export default detailReducer;