import { changeCaptured } from "./action"

export const changeCapturedThunk = (pirateId, captureState) => (dispatch, getState) => {
    const { pirates } = getState()

    const selectedPirate = pirates.find((pirate) => pirate.id === pirateId)

    dispatch(changeCaptured(selectedPirate.id, captureState))

    localStorage.setItem("@onepiece: pirates", JSON.stringify(pirates))
}
