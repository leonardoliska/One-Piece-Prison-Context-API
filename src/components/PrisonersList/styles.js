import styled from "styled-components"

export const Container = styled.div`
    padding: 0 5%;

    aside {
        margin: 30px auto 0;
        background: #180f08e5;
        border-radius: 10px;
        border: 4px dashed #f0c171dd;
        gap: 20px;
        box-shadow: 0px 10px 27px 0px rgba(0, 0, 0, 0.75);
        padding: 20px;
        color: #f0c171;
        display: flex;
        justify-content: center;
        column-gap: 10%;
        row-gap: 10px;
        flex-wrap: wrap;
        align-items: center;
        max-height: 300px;

        h2 {
            font-size: 30px;
        }

        span {
            font-size: 23px;
            font-weight: bold;
            font-style: italic;
        }
    }

    aside + div {
        height: 30px;
        border: 4px dashed #f0c171dd;
        border-bottom: none;
        border-top: none;
        width: 80%;
        margin: auto;
    }

    main {
        margin: 0 auto 30px;
        background: #180f08e5;
        border-radius: 10px;
        border: 4px dashed #f0c171dd;
        gap: 20px;
        box-shadow: 0px 10px 27px 0px rgba(0, 0, 0, 0.75);
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fit, 250px);
        justify-content: center;

        @media (min-width: 768px) {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }

    @media (min-width: 1024px) {
        display: flex;
        margin-top: 30px;

        aside {
            width: calc(30% - 30px);
            order: 3;
            margin: 0;
            flex-direction: column;
            justify-content: space-evenly;
            text-align: center;
        }
        aside + div {
            order: 2;
            width: 30px;
            border: none;
        }
        main {
            width: 70%;
            order: 1;
            margin: 0 0 30px 0;
        }
    }
`
