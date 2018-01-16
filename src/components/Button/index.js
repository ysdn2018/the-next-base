import React from 'react'
import styled from 'styled-components'
import GridBlock from '../GridBlock'

// styled components
const Container = styled.button`
  outline: none;
  background-color: transparent;
  border: 1px solid black;

  &:active {
    background-color: black;
    color: white;
  }

  width: 100%;
  height: 100%;
`

const Text = styled.p`

`

// component
export default function Button(props) {
  return (
    <GridBlock {...props}>
      <Container>
        <Text>{props.text}</Text>
      </Container>
    </GridBlock>
  )
}
