import React from 'react'
import styled from "@emotion/styled"
import bg from '../images/jumbobg.jpg'

const Jumbocss = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: calc(100vh - 60px);

    background-image: linear-gradient(to top, rgba(0,0,0, 0.9),rgba(0,0,0,0) 48%, rgba(0,0,0,0)),
    url(${bg});
background-size: cover;
background-position: center;
    .jumbospacer, .jumbowrapper {
        flex: 1;
    }
    .mainarea {
        width: 60%;
        margin: auto;
        text-align: center;
        text-shadow: 2px 2px 2px #020000;
        color: white;
        font-family:Oswald, sans-serif;
        h1 {
            margin: 10px auto;
            font-weight: 400;
            font-size: 4rem;
            // line-height:: 4rem;
        }
        h2 {
            margin: 10px auto;
            // line-height: 2.5rem;
            font-weight: 400;
            font-size: 2.5rem;
        }
        a{
            color: white;
            display: block;
            margin: auto;
            padding: 20px 50px;
            background: transparent;
            border: 2px solid white;
            border-radius: 10px;
            text-transform: uppercase;
            font-size: 1.3em;
            cursor: pointer;
            margin-top: 30px;
            text-decoration: none;
            font-family: 'Oswald', 'Century Gothic', sans-serif;
            max-width: 100px;
        }
    }
    .jumbosection {
        flex: 1;
    }
    .caption {
        display: flex;
        justify-content: flex-end;
        font-family: 'Special Elite', 'Cambria', serif;
        color: white;
        font-size: 0.9em;
        text-align: right;
        padding: 40px 15px 15px 15px;
        span {
            width: 50%;
        }
    }

    @media only screen and (max-width: 1000px) {
        .mainarea {
            width: 100%;
        }
    }
`

const Jumbotron = () => (
    <Jumbocss>
        <div className="jumbospacer"></div>
        <div className="jumbowrapper">
            <div className="jumbosection mainarea">
                <h1>
                    Chicago 1919: Confronting the Race Riots
                </h1>
                <h2>
                    A Series of Community Conversations
                </h2>
                <a href="#about">
                    Explore
                </a>
            </div>
            <div className="jumbosection caption">

            <span >During Chicago's 1919 Race Riots, African American veterans defended their communities from attacks by whites, while the state militia eventually quelled violence. Chicago Tribune Archives/TNS.</span>
            </div>
        </div>
    </Jumbocss>
)

export default Jumbotron