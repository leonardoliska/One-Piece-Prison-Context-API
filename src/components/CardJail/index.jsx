import { useDispatch } from "react-redux"
import { GiBreakingChain } from "react-icons/gi"

import { changeCapturedThunk } from "../../store/modules/pirates/thunk"

import Container from "./styles"

const CardJail = ({ pirate }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        const captureState = false
        dispatch(changeCapturedThunk(pirate.id, captureState))
    }

    return (
        <Container>
            <img src={pirate.img} alt="" />
            <div></div>
            <div>
                <h3>{pirate.name}</h3>
                <p>฿ {new Intl.NumberFormat("de-DE").format(pirate.reward)}</p>
                <GiBreakingChain onClick={handleClick} />
            </div>
        </Container>
    )
}

export default CardJail
