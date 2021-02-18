import { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
// Redux
//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
    const [textInput, setTextInput] = useState('');
    const dispatch = useDispatch();

    const inputHandler = (event) => {
        setTextInput(event.target.value);
    }

    const submitSearch = (event) => {
        event.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput("")
    }

    const clearSeachedGames = () => {
        dispatch({ type: "CLEAR_SEACHED_GAMES" });
    }

    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={clearSeachedGames}>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text" />
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
        </StyledNav>
    );
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
        outline: none;
    }
    
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
    }
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    
    img {
        height: 2rem;
        width: 2rem;
    }
`;

export default Nav;