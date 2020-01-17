import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import logo from '../images/c1919logo.png'
import Jumbotron from './jumbotron'
import About from './about'
import Events from './events'
import Featured from './featured'
import Twittersection from './twittersection'
import Footer from './footer'

const Bodycss = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
`

const Body = () => {
    return (
        <Bodycss>
            <Jumbotron />
            <About />
            <Events />
            <Featured />
            <Twittersection />
            <Footer />
        </Bodycss>
    )
}

export default Body
