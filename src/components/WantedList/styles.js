import styled from "styled-components"

const Container = styled.main`
    width: min(90%, 1000px);
    margin: 30px auto;
    min-height: calc(100vh - 160px);
    background: #180f08e5;
    border-radius: 10px;
    border: 4px dashed #f0c171dd;
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    justify-content: center;
    gap: 20px;
    box-shadow: 0px 10px 27px 0px rgba(0, 0, 0, 0.75);
    padding: 20px;
`

export default Container
