import axios from "axios";
import {popularGamesURL, upcomingGamesURL, newGamesURL} from "../api";

// Using Thunk
export const loadGames = () => async (dispatch) => {
    // Fetch Axios 
    const popularGamesData = await axios.get(popularGamesURL());
    const upcomingGamesData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGamesData.data.results,
            newGames: newGamesData.data.results,
            upcoming: upcomingGamesData.data.results,
        }
    })
}