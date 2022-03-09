import { createContext, useState } from "react"

export const CapturedPiratesContext = createContext([])

const localStorageList = JSON.parse(localStorage.getItem("@onepieceContextAPI: capturedPirates"))

export const CapturedPiratesProvider = ({ children }) => {
    const [capturedPiratesList, setCapturedPiratesList] = useState(localStorageList || [])

    const arrestPirate = (pirate) => {
        const newCapturedPiratesList = [...capturedPiratesList, pirate]

        setCapturedPiratesList(newCapturedPiratesList)

        localStorage.setItem("@onepieceContextAPI: capturedPirates", JSON.stringify(newCapturedPiratesList))
    }

    const releasePirate = (pirateID) => {
        const newCapturedPiratesList = capturedPiratesList.filter((pirate) => pirate.id !== pirateID)

        setCapturedPiratesList(newCapturedPiratesList)

        localStorage.setItem("@onepieceContextAPI: capturedPirates", JSON.stringify(newCapturedPiratesList))
    }

    return (
        <CapturedPiratesContext.Provider value={{ capturedPiratesList, arrestPirate, releasePirate }}>
            {children}
        </CapturedPiratesContext.Provider>
    )
}
