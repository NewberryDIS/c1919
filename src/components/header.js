import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/core"
import logo from '../images/c1919logo.png'
import smogo from '../images/c1919logo-sm.png'

const Headercss = styled.div`
    overflow: hidden;
    width: 100%;
    background: rgb(214,232,242);
    height: 50px;
    position: sticky;
    top: 0;
    z-index: 10000;
    .hwrapper {
        width: 75%;
        margin: auto;
        display: flex;
    }
    .logosm img, .logolg img {
        height: 50px;
    }
    .headersection {
        text-align: center;
        line-height: 35px;
        margin: 7px auto;
        a {
            width: 100%;
            display: block;
            pointer: cursor;
            text-transform: uppercase;
            text-decoration: none;
            position: relative;
            .linktext {
                font-family: Oswald, "Century Gothic", sans-serif;
                font-weight: 600;
                font-size: 22px;
                color: rgba(117, 117, 117,1);
            }
            .star {
                position: relative;
                top: -2px;
                display: inline-block;
                color: rgba(255,0,0,1);
                padding: 0 4px 7px 0;
                font-size: 1.25rem;
            }
        }
    }
    @media only screen and (max-width: 1000px) {
        .hwrapper {
            width: 100%;
        }
    }
    @media only screen and (min-width: 751px) {
        .logolg {
            display: block;
        }
        .logosm {
            display: none;
        }
    }
    @media only screen and (max-width: 750px) {
        .logolg {
            display: none;
        }
        .logosm {
            display: block;
        }
    }
    @media only screen and (max-width: 575px) {
        .headersection {
            display: none;
        }
    }
`

const Header = () => {
    return (
        <Headercss>
            <Global
                styles={css`
                    html, body {
                        margin: 0;
                        padding: 0;
                    }
                    `}
                />
            <div className="hwrapper">
                <div className="logolg"><img src={logo} alt="Chicago 1919 logo" /></div>
                <div className="logosm"><img src={smogo} alt="Chicago 1919 logo" /></div>
                <div className="headersection"><Link to={'/events/'} ><span className="star">&#10038;</span><span className="linktext">events</span></Link></div>
                <div className="headersection"><Link to={'/resources'} ><span className="star">&#10038;</span><span className="linktext">resources</span></Link></div>
                <div className="headersection"><Link to={'/gallery'} ><span className="star">&#10038;</span><span className="linktext">gallery</span></Link></div>
                <div className="headersection"><Link to={'/about'} ><span className="star">&#10038;</span><span className="linktext">about</span></Link></div>
            </div>
        </Headercss>
    )
}

export default Header
