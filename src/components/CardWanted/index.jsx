import Container from "./styles"
import { useContext } from "react"
import { PiratesContext } from "../../providers/piratesList"

const CardWanted = ({ pirate }) => {
    const { handlePirateFreedom } = useContext(PiratesContext)

    const handleClick = () => handlePirateFreedom(pirate.id, false)

    return (
        <Container isFree={pirate.isFree} onClick={handleClick}>
            <button>Capturar</button>
            <img src={pirate.img} alt={pirate.name} />
        </Container>
    )
}

export default CardWanted
