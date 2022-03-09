import { createContext, useState } from "react"

import defaultPiratesList from "./defaultPiratesList"

export const PiratesContext = createContext([])

export const PiratesProvider = ({ children }) => {
    const [piratesList, setPiratesList] = useState(defaultPiratesList)

    const handlePirateFreedom = (pirateId, hasFreedom) => {
        const newPiratesList = piratesList.map((pirate) => {
            if (pirate.id === pirateId) {
                pirate.isFree = hasFreedom
            }
            return pirate
        })

        setPiratesList(newPiratesList)
    }

    return <PiratesContext.Provider value={{ piratesList, handlePirateFreedom }}>{children}</PiratesContext.Provider>
}
