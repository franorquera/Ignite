// Styling
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// Router
import { useHistory } from "react-router-dom";
// Util
import { smallImage } from "../util"
// Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
    // Data
    const { screen, game, isLoading } = useSelector(state => state.detail);

    // Exit detail hamdler
    const history = useHistory();
    const dispatch = useDispatch();

    const exitDetailHandler = (event) => {
        const element = event.target;

        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto";
            history.push('/');
            dispatch({
                type: "BACK_TO_HOME"
            })
        }
    }

    // Get star images
    const getStars = () => {
        const starts = [];
        const rating = Math.floor(game.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) starts.push(<img alt="star" key={i} src={starFull}></img>)
            else starts.push(<img alt="star" key={i} src={starEmpty}></img>)
        }
        return starts;
    }

    // Get platfrom images
    const getPlatform = (platform) => {
        switch (platform) {
            case "PlayStation 4": return playstation;
            case "Xbox One": return xbox;
            case "PC": return steam;
            case "Nintendo Switch": return nintendo;
            case "iOS": return apple;
            default: return gamepad;
        }
    };

    return (
        <>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <Detail layoutId={pathId}>
                        <Stats>
                            <div className="rating">
                                <motion.h3 layoutId={`title ${pathId}`}> {game.name} </motion.h3>
                                <p>Rating: {game.rating}</p>
                                {getStars()}
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms && game.platforms.map(plat => (
                                        <img alt={plat.platform.name} key={plat.platform.id} src={getPlatform(plat.platform.name)}>
                                        </img>
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt="image" />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screen.results && screen.results.map(screen => (
                                <img src={smallImage(screen.image, 1280)} alt="game" key={screen.id} />
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
    );
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    
    &::-webkit-scrollbar {
    width: 0.5rem;
    }
    
    &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
    }
    
    &::-webkit-scrollbar-track {
    background: white;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    z-index: 10;
    
    img {
    width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    img {
    width: 2rem;
    height: 2rem;
    display: inline;
    }
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

export default GameDetail