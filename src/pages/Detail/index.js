import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { MyButton } from 'components/atoms'
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

  return (
    <div>
      <MyCard
        avatarSuffix={pokemon.name ? pokemon.name.charAt(0) : ''}
        labelName={pokemon.name}
        sourceImage={pokemon.sprites ? pokemon.sprites.front_default : ''}
        altImage={pokemon.name}
        full
      />
      <MyButton
        title='Back'
        onClick={goBack}
      />
    </div>
  )
}

export default Home
