import styled from "styled-components";


export const Container = styled.div`

    .planos{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        padding: 90px;

        h2{
            color: rgb(0, 163, 255);
            font-size: 40px;
        }

        a{
            color: rgb(0, 163, 255);
            font-size: 20px;
            font-weight: 500;
        }
    }

`

export const ContainerPlanos = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img{
        height: 500px;
        width: 500px;

        margin-top: 20px;
        border: none;


    &:hover{
        opacity: 0.8;
    }

    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        a{
            text-decoration: none;

            color: #ffffff;
            background: rgb(255, 92, 0);

            width: 250px;
            height: 40px;

            font-size: 20px;
            font-weight: 800;

            margin-top: 10px;
            border: none;
            border-radius: 10px;

            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;

        &:hover{
        color: blue;
    }

        &:active{
        opacity: 0.4;
    }
        }

    }
`

export const ContainerSobre = styled.div`

    margin-top: 200px;
    padding-top: 80px;
    padding: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: rgb(5,3,128);
    border-radius: 10px;
    border: none;

    h1{
        color: rgb(0, 163, 255);
        text-align: center;
        font-size: 60px;
    }

    a{
        font-size: 20px;
        padding-top: 40px;
        color: rgb(0, 163, 255);
        width: 80%;
        text-align: justify;
        
    }

`

export const H1 = styled.h1`

    text-align: center;
    color: rgb(0, 163, 255);
    margin-top: -10px;

    font-size: 60px;
    font-weight: 900;

`

export const Containerlocal = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;

    h1{
        color: rgb(0, 163, 255);
        text-align: center;
        font-size: 60px;
    }

    iframe{
        width: 100%;
        height: 500px;

        border: none;
    }


`

export const ContainerTopo = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 60px;
    padding: 30px ;

    background: rgb(0, 163, 255);

    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }

`

export const ContainerItensTopo = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

`

export const A = styled.a`

    color: white;
    font-weight: 600;
    padding: 30px;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    
    &:hover{
        color: rgb(5,3,128);
    }

`

export const ContainerNav = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgb(5,3,128);
    height: 100%;
    margin-top: -25px;
`

export const Image = styled.img`

    width: 250px;

`

export const ContainerItensNav = styled.div`

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


`

export const ContainerFooter = styled.footer`

    background: rgb(0, 163, 255);
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    H1{
        font-size: 13PX;
        font-weight: 500;

        color: #ffffff;
        text-align: center;

    }

`