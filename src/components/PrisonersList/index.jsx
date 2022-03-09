import CardPrisoner from "../CardPrisoner"
import { Container } from "./styles"
import { useContext } from "react"
import { CapturedPiratesContext } from "../../providers/capturedPiratesList"

export const Prisoners = () => {
    const { capturedPiratesList } = useContext(CapturedPiratesContext)

    const totalReward = new Intl.NumberFormat("de-DE").format(
        capturedPiratesList.reduce((total, current) => total + current.reward, 0)
    )

    return (
        <Container>
            <aside>
                <h2>Recompensa</h2>
                <span>฿ {totalReward}</span>
            </aside>
            <div />
            <main>
                {capturedPiratesList.map((pirate) => (
                    <CardPrisoner key={pirate.id} pirate={pirate} />
                ))}
            </main>
        </Container>
    )
}

export default Prisoners
