import axios from "axios";
import {gameDetailURL, gameScreenshotsURL} from "../api";

export const loadDetail = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAIL"
    })

    const detailData = await axios.get(gameDetailURL(id));
    const screenData = await axios.get(gameScreenshotsURL(id))

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenData.data
        }
    })
}