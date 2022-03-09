import Container from "./styles"

import { useDispatch } from "react-redux"

import { changeCapturedThunk } from "../../store/modules/pirates/thunk"

const CardHome = ({ pirate }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        const captureState = true

        dispatch(changeCapturedThunk(pirate.id, captureState))
    }

    return (
        <Container isCaptured={pirate.isCaptured}>
            <button onClick={handleClick}>Capturar</button>
            <img src={pirate.img} alt={pirate.name} />
        </Container>
    )
}

export default CardHome
