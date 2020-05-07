import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { MyLabel, MyButton } from 'components/atoms'
import { MyCard } from 'components/molecules'

import { PokemonGetService } from 'services'

const Home = () => {
  const history = useHistory()
  const route = useLocation()

  const location = route.search
  const params = new URLSearchParams(location)
  const id = params.get('id')
  const name = params.get('name')

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    let subscribePokemon = true
    async function getPokemon () {
      const payload = id || name
      const response = await PokemonGetService(payload)
      if (subscribePokemon) setPokemon(response)
    }

    getPokemon()

    return () => {
      subscribePokemon = false
    }
    // eslint-disable-next-line
  }, [1])

  function goBack () {
    history.push('/')
  }

  function renderAbilites () {
    if (!pokemon.abilities) return <p>-</p>

    const elem = []
    pokemon.abilities.forEach((item, index) => {
      elem.push(
        <p key={index}>- {item.ability.name}</p>
      )
    })

    return elem
  }

  function renderTypes () {
    if (!pokemon.types) return <p>-</p>

    const elem = []
    pokemon.types.forEach((item, index) => {
      elem.push(
        <p key={index}>- {item.type.name}</p>
      )
    })

    return elem
  }

  function renderStats () {
    if (!pokemon.stats) return <p>-</p>

    const elem = []
    pokemon.stats.forEach((item, index) => {
      elem.push(
        <p key={index}>- {item.stat.name} : {item.base_stat}</p>
      )
    })

    return elem
  }

  return (
    <div>
      <MyCard
        avatarSuffix={pokemon.name ? pokemon.name.charAt(0) : ''}
        labelName={pokemon.name}
        sourceImage={pokemon.sprites ? pokemon.sprites.front_default : ''}
        altImage={pokemon.name}
        full
      >
        <MyCard.Content>
          <MyLabel
            title='Abilites'
            bold
          />
          {renderAbilites()}
          <MyLabel
            title='Types'
            bold
          />
          {renderTypes()}
          <MyLabel
            title='Stats'
            bold
          />
          {renderStats()}
        </MyCard.Content>
      </MyCard>
      <MyButton
        title='Back'
        onClick={goBack}
      />
    </div>
  )
}

export default Home
