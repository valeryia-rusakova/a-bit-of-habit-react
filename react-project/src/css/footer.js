import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background:var(--main-bg-title-color);
    text-align: center;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 1rem;
    p{
        color: var(--main-light-color);
        margin: 0;
        padding: 1rem;
    }
    @media screen and (max-width: 500px) {
        font-size:0.85rem;
    }
`