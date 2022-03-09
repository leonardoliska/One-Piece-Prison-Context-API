import styled from "styled-components"

const Container = styled.div`
    border: none;
    display: flex;
    flex-direction: column;
    height: auto;

    ${({ isCaptured }) => isCaptured && "{filter: saturate(0)}"}

    img {
        height: 300px;
        border-radius: 8px 8px 0 0;
        border: 2px solid transparent;
        order: -1;
        border-bottom: 0;
        transition: 0.2s;
    }

    button:hover + img {
        ${({ isCaptured }) => !isCaptured && "{border: 2px solid #f0c171dd;border-bottom: 0;}"}
    }

    button {
        background: #180f08;
        border: 2px solid transparent;
        min-height: 30px;
        color: #f0f0f0;
        font-weight: bold;
        font-size: 18px;
        border-radius: 0 0 8px 8px;
        transition: 0.2s;

        :hover {
            ${({ isCaptured }) => !isCaptured && "{color: #180f08;background: #f0c171dd;cursor: pointer;}"}
        }
    }
`

export default Container
