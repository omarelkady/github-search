import React, { Component } from 'react'
import styled from 'styled-components'
import Card from './Card'

class CardList extends Component {
  render() {
    return (
      <Container>
        {this.props.items.map(item => (
          <Card
            key={item.id}
            link={item.html_url}
            title={item.name}
            description={item.description}
            image={item.owner.avatar_url}
          />
        ))}
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default CardList
