import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background:var(--main-bg-title-color);
    text-align: center;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 1rem;
    position: fixed;
    height: 3.125rem;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 0;
    p{
        color: var(--main-light-color);
        margin: 0;
        padding: 1rem;
    }
    @media screen and (max-width: 500px) {
        font-size:0.85rem;
    }
`