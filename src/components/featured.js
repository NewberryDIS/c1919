import React from 'react'
import styled from '@emotion/styled'
import Button from './button'
import featimg from '../images/featimg.png'

const Featcss = styled.div`

width: 100%;
display: flex;
position: relative;
background: rgb(214,232,242);
.featwrapper-vflex {
    flex-direction: column;
    max-width: 75%;
    margin: auto;
}
.featwrapper-vflex, .featwrapper-hflex {
    display: flex;
    justify-content: center;
    align-content: center;
}
.featwrapper-hflex {
    img {
        flex: 1;
        margin: 25px 25px 25px 0;
        border: 1px solid black;
        overflow: hidden;
    }
    .feattext { 
        a {
            color: black;
            &:hover {
                color: rgb(127,127,127) 
            }
        }
        margin: 3vw;
        position: relative;
        font-family: 'Oswald', sans-serif;
        h3, h4 {
            margin: 0;
        }
        h4 {
            font-size: 1.5em;
            text-transform: uppercase;
            font-weight: normal;
        }
        h3 {
            font-size: 2em;
            color: black;
            font-weight: bold;
            text-decoration: none;
            a  {
                color: black;
                font-weight: bold;
                text-decoration: none;
            }
        }
        p {
            font-family: 'Georgia', serif;
            display: block;
            margin: 20px 0;
            font-size: 1.35rem;
            a {
                font-family: 'Cambria', serif;
                color: black;
                font-weight: bold;
                text-decoration: none;
            }
        }
    }
}
.bottombutton {
    flex-shrink: 0;
    flex-basis: 50px;
}
`

const Featured = () => (
    <Featcss id="featured">
        <div className="featwrapper-vflex">
            <div className="featwrapper-hflex">
                <a href="https://uchicago.maps.arcgis.com/apps/webappviewer/index.html?id=64e5689e591d465ea783d8730fef17d4" target="_blank" rel="noopener noreferrer">
                    <img src={featimg} alt="Map of Chicago with icons overlaid and legend, a preview of the Mapping the 1919 Chicago Riot resource" />
                </a>
                <div className="feattext">
                    <h4>
                        Highlighted Digital Resource
                    </h4>
                    <h3>
                        <a href="https://uchicago.maps.arcgis.com/apps/webappviewer/index.html?id=64e5689e591d465ea783d8730fef17d4">
                            Mapping the 1919 Chicago Riot
                        </a>
                    </h3>
                    <p>
                        From July 27th to August 3rd, 1919, thousands of black and white Chicagoans fought each other in the streets, resulting in 38 deaths (23 African American and 15 white) and over 500 injuries (two-thirds of them African American). This interactive map shows how the riot was concentrated on the periphery of African American neighborhoods on Chicago’s South Side, as the city’s residential “color line” was both defended and created through inter-racial violence. 
                    </p>
                    <p>
                        View <a href="https://uchicago.maps.arcgis.com/apps/webappviewer/index.html?id=64e5689e591d465ea783d8730fef17d4" target="_blank" rel="noopener noreferrer">Mapping the 1919 Chicago Riot</a>
                    </p>
                </div>
            </div>
            <span className="bottombutton">
                <Button link='resources' text='view all resources' />
            </span>
        </div>
    </Featcss>
)

export default Featured
