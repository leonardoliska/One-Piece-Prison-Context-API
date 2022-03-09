import Container from "./styles"
import CardWanted from "../../components/CardWanted"
import { useContext } from "react"
import { PiratesContext } from "../../providers/piratesList"

const WantedList = () => {
    const { piratesList } = useContext(PiratesContext)

    return (
        <Container>
            {piratesList.map((pirate) => (
                <CardWanted key={pirate.id} pirate={pirate} />
            ))}
        </Container>
    )
}

export default WantedList
