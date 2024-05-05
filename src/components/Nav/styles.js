import styled from "styled-components";

export const ContainerNav = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgb(5,3,128);
    height: 100%;

    a{
        color: #ffffff;
        font-size: 20px;
        font-weight: 600;
        padding: 30px;
        text-decoration: none;
        cursor: pointer;

    &:hover{
        color: rgb(217,102,0);
    }

    }

    svg{
        color: #ffffff;

        cursor: pointer;

        &:hover{
        color: rgb(217,102,0);
    }
    }

    @media(max-width: 900px){

        nav{
            display: none;
        }
        
        img{
            width: 100px;
        }
     
    }

    @media(max-width: 700px){
        padding: 14px 14px;
        display: flex;
        justify-content: space-between;
    }

`

export const Image = styled.img`

    width: 250px;

`