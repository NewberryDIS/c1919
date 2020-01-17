import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Buttoncss = styled.div`
    display: inline-block;
    float: right;
    padding: 10px 20px;
    background: rgb(237,28,36);
    
    font-family: 'Oswald', 'Century Gothic', sans-serif;
    font-size: 1.2em;
    margin-top: 1em;
    text-transform: uppercase;
    a {
        color: white;
        text-decoration: none;
    }
`

const Button = props => (
    <Buttoncss>
        <Link to={props.link} >
            {props.text}
        </Link>
    </Buttoncss>
)
export default Button
