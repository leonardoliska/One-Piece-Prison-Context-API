import styled from "styled-components"

import { Link as ReactRouterLink } from "react-router-dom"

export const Container = styled.header`
    padding: 20px 5%;
    gap: 18px;
    color: #f0c171;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    background: #180f08e5;
    /* margin-bottom: 30px; */
    box-shadow: 0px 10px 17px -3px rgba(0, 0, 0, 0.75);
    border-bottom: 4px dashed #f0c171dd;

    @media (min-width: 500px) {
        flex-direction: row;
    }

    h1 {
        margin: 0;
        font-style: italic;
        text-shadow: 2px 2px 1px #f0c17180;
        text-decoration: underline;
    }

    nav {
        border: 1px solid #f0c171;
        height: min-content;
        font-weight: bold;
        background: #29241b;
        border-radius: 20px;
    }
`

export const Link = styled(ReactRouterLink)`
    display: block;
    color: inherit;
    display: flex;
    align-items: center;
    padding: 5px 20px;
    gap: 20px;
    font-size: 22px;

    svg {
        width: 30px;
        height: 30px;
    }
`
