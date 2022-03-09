import Container from "./styles"
import CardWanted from "../../components/CardWanted"
import { useContext } from "react"
import { WantedPiratesContext } from "../../providers/wantedPiratesList"

const WantedList = () => {
    const { wantedPiratesList } = useContext(WantedPiratesContext)

    return (
        <Container>
            {wantedPiratesList.map((pirate) => (
                <CardWanted key={pirate.id} pirate={pirate} />
            ))}
        </Container>
    )
}

export default WantedList
