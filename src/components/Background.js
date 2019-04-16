import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import styled from 'styled-components'

const Container = animated(styled.div`
  &::after {
    background-image: url(${props => props.bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`)

const Background = props => {
  const [index, set] = useState(0)
  const transitions = useTransition(props.bgAll[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(
    () =>
      void setInterval(
        () => set(state => (state + 1) % props.bgAll.length),
        15000
      ),
    []
  )

  return transitions.map(({ item, props, key }) => (
    <Container key={key} id="bg" bg={item.fluid.src} />
  ))
}

export default Background
