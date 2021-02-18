// Styling
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
// Util
import { smallImage } from "../util";
// Animation
import { popup } from "../animations";

const Game = ({ name, released, id, image }) => {
    const stringPathID = id.toString();

    // Load Details Handler 
    const dispatch = useDispatch();
    const loadDispatchHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id));
    }

    return (
        <StyledGame variants={popup} initial="hidden" animate="show" layoutId={stringPathID} onClick={loadDispatchHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathID}`}> {name} </motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathID}`} src={smallImage(image, 640)} alt={name} />
            </Link>
        </StyledGame>
    );
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgb(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;