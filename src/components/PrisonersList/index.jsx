import CardPrisoner from "../CardPrisoner"
import { Container } from "./styles"
import { useContext } from "react"
import { PiratesContext } from "../../providers/piratesList"

export const Prisoners = () => {
    const { piratesList } = useContext(PiratesContext)

    const prisonersList = piratesList.filter((pirate) => !pirate.isFree)

    const totalReward = new Intl.NumberFormat("de-DE").format(
        prisonersList.reduce((total, current) => total + current.reward, 0)
    )

    return (
        <Container>
            <aside>
                <h2>Recompensa</h2>
                <span>฿ {totalReward}</span>
            </aside>
            <div />
            <main>
                {prisonersList.map((pirate) => (
                    <CardPrisoner key={pirate.id} pirate={pirate} />
                ))}
            </main>
        </Container>
    )
}

export default Prisoners
