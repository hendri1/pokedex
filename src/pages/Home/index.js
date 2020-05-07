import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { MyCardList } from 'components/organisms'

import { PokemonGetListService } from 'services'

const Home = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [content, setContent] = useState([])
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(20)

  const fetchMoreData = () => {
    setOffset(offset + limit)
    setLimit(limit)
  }

  useEffect(() => {
    let subscribePokemon = true
    async function getPokemonList () {
      const payload = {
        offset: offset,
        limit: limit
      }
      const response = await PokemonGetListService(payload)
      if (subscribePokemon) setPokemonList([...pokemonList, ...response.results])
    }

    getPokemonList()

    return () => {
      subscribePokemon = false
    }
  }, [offset])

  useEffect(() => {
    console.log(pokemonList)
    const elem = []
    pokemonList.forEach((pokemon, index) => {
      const arrData = pokemon.url.split('/')
      const id = arrData[6]
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
      <InfiniteScroll
        dataLength={pokemonList.length}
        next={fetchMoreData}
        hasMore
        loader={<h4>Loading...</h4>}
      >
        <MyCardList>
          {content}
        </MyCardList>
      </InfiniteScroll>
    </div>
  )
}

export default Home
