import styled, {css} from "styled-components";

export const Container = styled.section`

    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: 5;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgb(0,212,255);
    background: linear-gradient(90deg, rgba(0,212,255,0.700717787114846) 10%, rgba(26,14,230,0.6446953781512605) 52%);

    opacity: 0;
    pointer-events: none;

    transition: .5s;
    transform: translateY(50px);

    svg{
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
        transform: rotate(45deg);
        transition: .7s;
        color: #ffffff;
    }

    nav{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #ffffff;

        gap: 2rem;
        transform: scale(0.7);
        transition: .7s;
    }

    a{
        cursor: pointer;
        text-decoration: none;
        color: #ffffff;
        font-size: 20px;

        &:hover{
        color: rgb(217,102,0);
    }
    }

    
    ${({isVisible}) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);

        svg{
            transform: rotate(0deg);
        }

        nav{
            transform: scale(1);
        }

    `}

`