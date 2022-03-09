import Container from "./styles"
import { GiBreakingChain } from "react-icons/gi"
import { useContext } from "react"
import { CapturedPiratesContext } from "../../providers/capturedPiratesList"
import { WantedPiratesContext } from "../../providers/wantedPiratesList"

const CardPrisoner = ({ pirate }) => {
    const { changePirateFreedom } = useContext(WantedPiratesContext)
    const { releasePirate } = useContext(CapturedPiratesContext)

    const handleClick = () => {
        const freedom = true
        changePirateFreedom(pirate.id, freedom)
        releasePirate(pirate.id)
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

export default CardPrisoner
