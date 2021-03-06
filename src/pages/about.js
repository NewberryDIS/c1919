import React from "react"
import Header from "../components/header"
import styled from "@emotion/styled"
import Hat from "../components/hat"

const Aboutcss = styled.div`
// overflow-x: hidden;
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

const Aboutpage = () => {
    const wndw = typeof document !== `undefined` ? 'a' : null
    var jsLintSucks = wndw !== null ? document.body.style.overflow="hidden" : ''
    return (
    <Aboutcss  scrolling="no" >
        <Hat />
        <Header />
        <iframe src="//scalar.usc.edu/works/chicago-1919/about" title="About the Chicago 1919 project" />
    </Aboutcss>
)}

export default Aboutpage
