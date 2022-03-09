import styled from "styled-components"

const Container = styled.div`
    border: none;
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    img {
        border-radius: 8px 8px 0 0;
        border: 2px solid transparent;
        order: -1;
        border-bottom: 0;
        transition: 0.2s;
        object-fit: contain;
        height: 300px;

        @media (min-width: 768px) {
            height: 200px;
        }
    }

    img + div {
        flex: 0;
        padding: 0;
        width: 60%;
        padding: 10px;
        border-radius: 0;
        align-self: center;
        background: transparent;
        border-left: 4px dashed #f0c171;
        border-right: 4px dashed #f0c171;

        @media (min-width: 768px) {
            height: 120px;
            border-bottom: 4px dashed #f0c171;
            border-top: 4px dashed #f0c171;
            border-left: none;
            border-right: none;
        }
    }

    div {
        flex: 1;
        border-radius: 3px;
        background: #1c1912dd;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        gap: 10px;
        border: 1px solid #52493f;
        box-shadow: 0px 0px 17px 0px #f0c17118;
        position: relative;

        h3 {
            color: #f0c171;
            font-size: 35px;
            font-weight: bold;
            font-variant: small-caps;
            letter-spacing: 2px;
            text-shadow: 2px 2px 1px #f0c17180;
        }

        p {
            font-size: 20px;
            color: #f0c171;
            font-weight: bold;
            font-variant: small-caps;
            letter-spacing: 2px;
            text-shadow: 2px 2px 1px #f0c17180;
        }

        svg {
            position: absolute;
            right: 10px;
            top: 10px;
            height: 35px;
            width: 35px;
            border-radius: 5px;
            background: #101006dd;
            color: #f0c171;
            cursor: pointer;
            padding: 5px;
            border: 1px solid transparent;

            :hover {
                border-color: #f0c171;
            }
        }

        @media (min-width: 768px) {
            padding: 35px;

            p {
                font-size: 32px;
            }
            h3 {
                font-size: 50px;
            }
            svg {
                height: 40px;
                width: 40px;
                right: 25px;
                top: 25px;
            }
        }
    }
`

export default Container
