import { createContext, useState } from "react"

import defaultPiratesList from "./defaultPiratesList"

export const PiratesContext = createContext([])

const localStorageList = JSON.parse(localStorage.getItem("@onepieceContextAPI: pirates"))

export const PiratesProvider = ({ children }) => {
    const [piratesList, setPiratesList] = useState(localStorageList || defaultPiratesList)

    const handlePirateFreedom = (pirateId, hasFreedom) => {
        const newPiratesList = piratesList.map((pirate) => {
            if (pirate.id === pirateId) {
                pirate.isFree = hasFreedom
            }
            return pirate
        })

        setPiratesList(newPiratesList)
        localStorage.setItem("@onepieceContextAPI: pirates", JSON.stringify(newPiratesList))
    }

    return <PiratesContext.Provider value={{ piratesList, handlePirateFreedom }}>{children}</PiratesContext.Provider>
}
