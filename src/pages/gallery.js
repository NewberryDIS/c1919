import React from "react"
import Header from "../components/header"
import styled from "@emotion/styled"
import Hat from "../components/hat"

const Gallerycss = styled.div`
overflow-x: hidden;
color: transparent;
iframe {
        width: 100%;
        height: calc(100% - 50px);
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        bottom: 0;
    }

`

const Gallerypage = () => {
    const wndw = typeof document !== `undefined` ? 'a' : null
    var jsLintSucks = wndw !== null ? document.body.style.overflow="hidden" : ''
    return (
    <Gallerycss  scrolling="no" >
        <Hat />
        <Header />
        <iframe src="//publications.newberry.org/digital/chicago1919/past-event-images" title="Chicago 1919 gallery" />
    </Gallerycss>
)}

export default Gallerypage
