import { createContext, useState } from "react"

import defaulPiratesList from "./defaultPiratesList"

export const WantedPiratesContext = createContext([])

const localStorageList = JSON.parse(localStorage.getItem("@onepieceContextAPI: wantedPirates"))

export const WantedPiratesProvider = ({ children }) => {
    const [wantedPiratesList, setWantedPiratesList] = useState(localStorageList || defaulPiratesList)

    const changePirateFreedom = (pirateId, freedom) => {
        const newWantedPiratesList = wantedPiratesList.map((pirate) => {
            if (pirate.id === pirateId) {
                pirate.isFree = freedom
            }
            return pirate
        })

        setWantedPiratesList(newWantedPiratesList)
        localStorage.setItem("@onepieceContextAPI: wantedPirates", JSON.stringify(newWantedPiratesList))
    }

    return (
        <WantedPiratesContext.Provider value={{ wantedPiratesList, changePirateFreedom }}>
            {children}
        </WantedPiratesContext.Provider>
    )
}
