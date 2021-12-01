import React from "react"
import { Content } from "./components/content/Content"
import { LeftBar } from "./components/leftbar/LeftBar"
import { Navbar } from "./components/navbar/Navbar"

const App = () => {
    return (
        <div className="container">
            <LeftBar />
            <Navbar />
            {/* <Content /> */}
        </div>
    )
}

export default App
