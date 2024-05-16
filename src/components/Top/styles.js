import styled from "styled-components";

export const ContainerTopo = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 60px;
    padding: 30px ;

    background: rgb(0, 163, 255);

    @media (max-width: 900px){

        display: flex;
        align-items: center;
        justify-content: center;
        
        svg{
            display: none;
        }
    }
    
    @media (max-width: 1300px){

        display: flex;
        align-items: center;
        justify-content: space-between;

        a{
            font-size: 14px;
        }
        
        svg{
            font-size: 20px;
        }
    }


div{
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px){
        display: flex;
        align-items: center;
        justify-content: center;
}

}
`

export const ContainerItensTopo = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px){
        display: flex;
        flex-direction: column;

        a{
            display: none;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    }

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