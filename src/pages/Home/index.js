import React, { useState, useEffect } from 'react'
// import { MyCard } from 'components/molecules'
import { MyCardList } from 'components/organisms'

import { PokemonGetListService } from 'services'

const Home = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [content, setContent] = useState([])

  useEffect(() => {
    let subscribePokemon = true

    async function getPokemonList () {
      const payload = {}
      const response = await PokemonGetListService(payload)
      if (subscribePokemon) setPokemonList(response.results)
    }

    getPokemonList()

    return () => {
      subscribePokemon = false
    }
  }, [])

  useEffect(() => {
    const elem = []
    pokemonList.forEach((pokemon, index) => {
      const id = pokemon.url.substr(pokemon.url.length - 2, 1)
      console.log(id)
      elem.push(
        <MyCardList.Card
          key={index}
          avatarSuffix={pokemon.name ? pokemon.name.charAt(0) : ''}
          labelName={pokemon.name}
          sourceImage={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
      )
    })
    setContent(elem)
  }, [pokemonList])

  return (
    <div>
      <MyCardList>
        {content}
      </MyCardList>
    </div>
  )
}

export default Home
