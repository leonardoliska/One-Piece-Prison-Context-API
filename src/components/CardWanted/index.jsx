import Container from "./styles"
import { useContext } from "react"
import { CapturedPiratesContext } from "../../providers/capturedPiratesList"
import { WantedPiratesContext } from "../../providers/wantedPiratesList"

const CardWanted = ({ pirate }) => {
    const { changePirateFreedom } = useContext(WantedPiratesContext)
    const { arrestPirate } = useContext(CapturedPiratesContext)

    const handleClick = () => {
        if (pirate.isFree) {
            const freedom = false
            changePirateFreedom(pirate.id, freedom)
            arrestPirate(pirate)
        }
    }

    return (
        <Container isFree={pirate.isFree} onClick={handleClick}>
            <button>Capturar</button>
            <img src={pirate.img} alt={pirate.name} />
        </Container>
    )
}

export default CardWanted
