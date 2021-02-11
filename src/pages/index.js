import React from "react"
import Header from "../components/header"
import Body from "../components/body"
import Hat from "../components/hat"

const IndexPage = () => (
    <div>
        <Hat />
        <Header />
        <Body scrolling="yes"/>
    </div>
)

export default IndexPage
