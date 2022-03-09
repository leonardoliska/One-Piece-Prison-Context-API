import { Prisoners } from "../../components/PrisonersList"
import Header from "../../components/Header"

const Jail = () => {
    return (
        <>
            <Header url={"/"} linkName="Voltar" />
            <Prisoners />
        </>
    )
}

export default Jail
