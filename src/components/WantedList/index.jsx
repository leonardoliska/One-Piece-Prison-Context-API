import Container from "./styles"

import CardHome from "../../components/CardHome"
import { useSelector } from "react-redux"

const WantedList = () => {
    const { pirates } = useSelector((state) => state)

    return (
        <Container>
            {pirates.map((pirate) => (
                <CardHome key={pirate.id} pirate={pirate} />
            ))}
        </Container>
    )
}

export default WantedList
