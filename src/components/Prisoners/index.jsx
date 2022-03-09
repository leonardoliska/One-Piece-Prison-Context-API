import { Container, PrisonersContainer, RewardContainer } from "./styles"

import CardJail from "../CardJail"

import { useSelector } from "react-redux"

export const Prisoners = () => {
    const { pirates } = useSelector((state) => state)

    const capturedPirates = pirates.filter((pirate) => pirate.isCaptured)

    const totalReward = new Intl.NumberFormat("de-DE").format(
        capturedPirates.reduce((total, current) => total + current.reward, 0)
    )

    return (
        <Container>
            <aside>
                <h2>Recompensa</h2>
                <span>฿ {totalReward}</span>
            </aside>
            <div />
            <main>
                {capturedPirates.map((pirate) => (
                    <CardJail key={pirate.id} pirate={pirate} />
                ))}
            </main>
        </Container>
    )
}

export default Prisoners
