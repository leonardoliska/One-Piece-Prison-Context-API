import WantedList from "../../components/WantedList"
import Header from "../../components/Header"

const Home = () => {
    return (
        <>
            <Header url={"/jail"} linkName="Cadeia" />
            <WantedList />
        </>
    )
}

export default Home
