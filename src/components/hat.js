import React from "react"
import { Helmet } from 'react-helmet'
import { Global, css } from "@emotion/core"

const Hat = () => (
    <Helmet>
        <Global
        styles={css`
            html, body {
                margin: 0;
                padding: 0;
            }
            `}
        />
        <meta charSet="utf-8" />
        <title>Chicago 1919</title>
        <link rel="stylesheet" href="../components/layout.css" />
    </Helmet>
)
export default Hat