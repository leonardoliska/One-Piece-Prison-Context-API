import { CHANGE_CAPTURED } from "./actionTypes"

export const changeCaptured = (selectedPirateId, captureState) => ({
    type: CHANGE_CAPTURED,
    selectedPirateId,
    captureState,
})
