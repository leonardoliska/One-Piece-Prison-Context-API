import Container from "./styles"
import { GiBreakingChain } from "react-icons/gi"
import { useContext } from "react"
import { PiratesContext } from "../../providers/piratesList"

const CardPrisoner = ({ pirate }) => {
    const { handlePirateFreedom } = useContext(PiratesContext)
    const handleClick = () => handlePirateFreedom(pirate.id, true)

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

export default CardPrisoner
