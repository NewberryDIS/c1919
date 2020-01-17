import React from 'react'
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
        line-height: 1.5;
        font-family: 'Special Elite', 'Georgia', serif;
    }
    strong {
        font-size: 2em;
    }
    .aboutiframe {
        display: block;
        margin: auto;
    }
`

const About = () => (
    <Aboutcss id="about">
        <div className="aboutwrapper">
            <p className="abouttext">
                <strong>Chicago's 1919 race riots</strong> barely register in the city’s current consciousness, yet they were a significant turning point in shaping the racial divides we see today. The Newberry Library and 13 partners have organized Chicago 1919: Confronting the Race Riots, a year-long initiative engaging in public conversations about the legacy of the most violent week in Chicago history.
            </p>
            <p className="abouttext">
                Chicago 1919 is guided by the belief that the 1919 race riots can serve as a lens for understanding Chicago today. Racial tensions related to policing, migration, and housing all came to a head in 1919. By reflecting on the past 100 years, Chicagoans may see how our current racial divisions evolved from the race riots, as the marginalization of African Americans in Chicago became institutionalized through increasingly sophisticated forms of discrimination.
            </p>
            <p className="abouttext">
                People across Chicago are invited to share in our collective reckoning with a little-known yet tremendously consequential chapter in the city’s history.
            </p>
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
)

export default About
