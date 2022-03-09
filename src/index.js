import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyle"
import { WantedPiratesProvider } from "./providers/wantedPiratesList"
import { CapturedPiratesProvider } from "./providers/capturedPiratesList"

ReactDOM.render(
    <React.StrictMode>
        <WantedPiratesProvider>
            <CapturedPiratesProvider>
                <BrowserRouter>
                    <GlobalStyle />
                    <App />
                </BrowserRouter>
            </CapturedPiratesProvider>
        </WantedPiratesProvider>
    </React.StrictMode>,
    document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
