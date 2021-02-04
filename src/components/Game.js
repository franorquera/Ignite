// Styling
import styled from "styled-components";
import {motion} from "framer-motion";
// Redux
import {useDispatch} from "react-redux";
import {loadDetail} from "../actions/detailAction";

const Game = ({name, released, id, image}) => {
    // Load Details
    const dispatch = useDispatch();
    const loadDispatchHandler = () => {
        dispatch(loadDetail(id));
    }

    return (
        <StyledGame onClick={loadDispatchHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name}/>
        </StyledGame>
    );
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgb(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;