import { Container, Link } from "./styles"
import { GiPirateFlag } from "react-icons/gi"

const Header = ({ url, linkName }) => (
    <Container>
        <h1>ONE PIECE</h1>
        <nav>
            <Link to={url}>
                <GiPirateFlag />
                {linkName}
            </Link>
        </nav>
    </Container>
)

export default Header
