import React from 'react'
import styled from '@emotion/styled'
import Button from './button'
import featimg from '../images/featimg.png'

const Eventscss = styled.div`
background: rgb(214,232,242);

padding-top: 50px;
height: 100%;
width: 100%;
.featurewrapper {
    margin: auto;
        width: 75%;
        display: flex;
        flex-direction: column;
    .textimg {
        flex: 1;
        img {
            // padding: 10px;
            float: left;
            width: 50%;
            margin: 0 3vw;
            border: 1px solid black;
        }
        .featuretext {
            padding: 10px;
            margin: 0 3vw;
            font-size: 1.5rem;
            line-height: 1.75rem;
            flex: 1;
            h3, h4 {

                font-family: 'Oswald', sans-serif;
            }
                    a  {
                        color: black;
                        font-weight: bold;
                        text-decoration: none;
                        &:hover {
                            color: rgb(127,127,127) 
                        }
                    }
p{

    font-family: 'Georgia', serif;
}
        }
    }
    .bottombutton {
        flex-shrink: 0;
        flex-basis: 50px;
    }
}
`

const Events = () => (
    <Eventscss id="featuredresource">
        <div className="featurewrapper">
            <div className="textimg">
                <img src={featimg} alt="" />
                <div className="featuretext">
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
    </Eventscss>
)

export default Events
