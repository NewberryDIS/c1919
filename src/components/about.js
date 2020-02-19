import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import Button from './button'

const Aboutcss = styled.div`
background: rgb(214,232,242);
    display: flex;
    .aboutwrapper {
        max-width: 75%;
        margin: auto;
    }
    .abouttext {
        font-size: 1.5em;
        line-height: 1.5em;
        font-family: 'Special Elite', 'Georgia', serif;
    }
    strong {
        font-size: 2em;
        padding-right: 7px;
        // vertical-align: text-bottom;
    }
    .aboutiframe {
        display: block;
        margin: auto;
    }
    .switcher {
        position: fixed;
        top: 50px;
        left: 5px;
        border: 1px solid black;
        background: #ccc;
        color: black;
        .switch {
            border: 1px solid black;
            background: rgba(255,255,255,0.5);
            color: black;
            cursor: pointer;
            transition: background 0.2s;
            &:hover {
                background: rgba(255,255,255,1);
            }
        }
    }
`
const origtext = <Fragment><p className="abouttext">
        <strong>Chicago's 1919 race riots</strong>  barely register in the city’s current consciousness, yet they were a significant turning point in shaping the racial divides we see today. The Newberry Library and 13 partners have organized Chicago 1919: Confronting the Race Riots, a year-long initiative engaging in public conversations about the legacy of the most violent week in Chicago history.
        </p>
        <p className="abouttext">
        Chicago 1919 is guided by the belief that the 1919 race riots can serve as a lens for understanding Chicago today. Racial tensions related to policing, migration, and housing all came to a head in 1919. By reflecting on the past 100 years, Chicagoans may see how our current racial divisions evolved from the race riots, as the marginalization of African Americans in Chicago became institutionalized through increasingly sophisticated forms of discrimination.
        </p>
        <p className="abouttext">
        People across Chicago are invited to share in our collective reckoning with a little-known yet tremendously consequential chapter in the city’s history.
        </p>
    </Fragment>
const priortext = <Fragment><p className="abouttext">
        <strong>Prior to 2019,</strong> Chicago’s 1919 race riots barely registered in the city’s current consciousness, yet they proved a significant turning point in shaping the racial divides we see today. In 2019, the Newberry Library and 13 partners organized Chicago 1919: Confronting the Race Riots, a year-long initiative engaging in public conversations about the legacy of the most violent week in Chicago history.
        </p>
        <p className="abouttext">
        Chicago 1919 was guided by the belief that the 1919 race riots can serve as a lens for understanding Chicago today. Racial tensions related to policing, migration, and housing all came to a head in 1919. By reflecting on the past 100 years, Chicagoans may see how our current racial divisions evolved from the race riots, as the marginalization of African Americans in Chicago became institutionalized through increasingly sophisticated forms of discrimination.
        </p>
        <p className="abouttext">
        Throughout the year, people across Chicago came together to share in our collective reckoning with a little-known yet tremendously consequential chapter in the city’s history.
        </p>
    </Fragment>
const rearrtext = <Fragment><p className="abouttext">
        <strong>Chicago's 1919 race riots,</strong> prior to 2019, barely registered in the city’s current consciousness, yet they proved a significant turning point in shaping the racial divides we see today. In 2019, the Newberry Library and 13 partners organized Chicago 1919: Confronting the Race Riots, a year-long initiative engaging in public conversations about the legacy of the most violent week in Chicago history.
        </p>
        <p className="abouttext">
        Chicago 1919 was guided by the belief that the 1919 race riots can serve as a lens for understanding Chicago today. Racial tensions related to policing, migration, and housing all came to a head in 1919. By reflecting on the past 100 years, Chicagoans may see how our current racial divisions evolved from the race riots, as the marginalization of African Americans in Chicago became institutionalized through increasingly sophisticated forms of discrimination.
        </p>
        <p className="abouttext">
        Throughout the year, people across Chicago came together to share in our collective reckoning with a little-known yet tremendously consequential chapter in the city’s history.
        </p>
    </Fragment>
const cameltext = <Fragment><p className="abouttext">
        Prior to 2019, <strong>Chicago’s 1919 race riots</strong> barely registered in the city’s current consciousness, yet they proved a significant turning point in shaping the racial divides we see today. In 2019, the Newberry Library and 13 partners organized Chicago 1919: Confronting the Race Riots, a year-long initiative engaging in public conversations about the legacy of the most violent week in Chicago history.
        </p>
        <p className="abouttext">
        Chicago 1919 was guided by the belief that the 1919 race riots can serve as a lens for understanding Chicago today. Racial tensions related to policing, migration, and housing all came to a head in 1919. By reflecting on the past 100 years, Chicagoans may see how our current racial divisions evolved from the race riots, as the marginalization of African Americans in Chicago became institutionalized through increasingly sophisticated forms of discrimination.
        </p>
        <p className="abouttext">
        Throughout the year, people across Chicago came together to share in our collective reckoning with a little-known yet tremendously consequential chapter in the city’s history.
        </p>
    </Fragment>
const nopriortext = <Fragment><p className="abouttext">
        <strong>Chicago’s 1919 race riots</strong> barely registered in the city’s current consciousness, yet they proved a significant turning point in shaping the racial divides we see today. In 2019, the Newberry Library and 13 partners organized Chicago 1919: Confronting the Race Riots, a year-long initiative engaging in public conversations about the legacy of the most violent week in Chicago history.
        </p>
        <p className="abouttext">
        Chicago 1919 was guided by the belief that the 1919 race riots can serve as a lens for understanding Chicago today. Racial tensions related to policing, migration, and housing all came to a head in 1919. By reflecting on the past 100 years, Chicagoans may see how our current racial divisions evolved from the race riots, as the marginalization of African Americans in Chicago became institutionalized through increasingly sophisticated forms of discrimination.
        </p>
        <p className="abouttext">
        Throughout the year, people across Chicago came together to share in our collective reckoning with a little-known yet tremendously consequential chapter in the city’s history.
        </p>
    </Fragment>
const About = () => {
    // const [flipper, setFlipper] = useState(0)
    // const textArray = [[origtext, 'original'], [priortext, 'emph prior'], [rearrtext, 'rearranged'], [cameltext, 'camel'], [nopriortext, 'no prior']]
    // const buttons = textArray.map((i, index) => <button className="switch" onClick={() => setFlipper(index)}>{i[1]}</button>)
    return (
    <Aboutcss id="about">
        <div className="aboutwrapper">
            {/* <div className="switcher">
                {buttons}
            </div> */}
                {nopriortext}
            <iframe 
                className="aboutiframe"
                width="560"
                height="315" 
                src="https://www.youtube.com/embed/a5iMG90XyTw" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            <Button link='about' text='more about this project'>
            </Button>
        </div>
    </Aboutcss>
)}

export default About
