import React from 'react'
import styled from '@emotion/styled'
import Button from './button'
import eventsimg from '../images/eventsimg.png'

const Eventscss = styled.div`
   
    margin: auto;
    margin-top: 50px;
    height: 100%;
    width: 75%;
    .eventswrapper {
        display: flex;
        flex-direction: column;
    .textimg {
        flex: 1;
        img {
            padding: 10px;
            margin: 0 10px 10px 10px;
            float: left;
            width: 50%;
            margin: 0 3vw;
        }
        .eventstext {
            padding: 10px;
            margin: 0 3vw;
            font-size: 1.5rem;
            line-height: 1.75rem;
            font-family: 'Special Elite', sans-serif;
            flex: 1;
        }
    }
    .bottombutton {
        flex-shrink: 0;
        flex-basis: 50px;
    }
}
`

const Events = () => (
    <Eventscss id="events">
        <div className="eventswrapper">
            <div className="textimg">
                <img src={eventsimg} alt="" />
                <p className="eventstext">
                    At the heart of Chicago 1919 were 11 dynamic public programs designed to engage audiences and encourage them to examine the mechanisms through which segregation and inequality have been created, solidified, and reinforced over the past 100 years. Each program focused on a specific expression of institutionalized racism, from policing and education to housing and the media. Chicago 1919 events addressed difficult history and brought Chicagoans together in recognition and reconciliation, to imagine possible ways forward.
                </p>
            </div>
            <span className="bottombutton">
                <Button link='events' text='view all events' />
            </span>
        </div>
    </Eventscss>
)

export default Events
