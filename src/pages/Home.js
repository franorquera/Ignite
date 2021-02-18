import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Styling
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
// Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
// Animation
import { fadeIn } from "../animations";

const Home = () => {
    // Get de URL location
    const location = useLocation();
    const pathID = location.pathname.split("/")[2];

    // Fetch Games
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch])

    // Get Data Back
    const { popular, newGames, upcoming, searched } = useSelector(state => state.games);

    return (
        <GameList variants={fadeIn} initial="hidden" animate="show">
            <AnimateSharedLayout type='crossfade'>
                <AnimatePresence> {pathID && <GameDetail pathId={pathID} />} </AnimatePresence>
                {searched.length ? (
                    <div className="searched">
                        <h2>Searched Games</h2>
                        <Games>
                            {searched.map(game => (
                                <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                            ))}
                        </Games>
                    </div>
                ) : ""}
                <h2>Upcoming Games</h2>
                <Games>
                    {upcoming.map(game => (
                        <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                    ))}
                </Games>
                <h2>Popular Games</h2>
                <Games>
                    {popular.map(game => (
                        <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                    ))}
                </Games>
                <h2>New Games</h2>
                <Games>
                    {newGames.map(game => (
                        <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                    ))}
                </Games>
            </AnimateSharedLayout>
        </GameList>
    );
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;

    h2 {
        padding: 5rem 0rem;
    }
`;
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home