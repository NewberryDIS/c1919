#!/bin/bash
# baseCreator
echo 'name: '
read -e Name
echo "import React from 'react'
import styled from '@emotion/styled'

const ${Name^} = () => (
    <div>$Name</div>
)

export default ${Name^}" > ./src/components/$Name.js