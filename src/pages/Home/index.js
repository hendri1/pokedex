import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import InfiniteScroll from 'react-infinite-scroll-component'

import { MyCardList } from 'components/organisms'

import { PokemonGetListService } from 'services'

const Home = () => {
  const history = useHistory()

  const { register, handleSubmit } = useForm()
  const [pokemonList, setPokemonList] = useState([])
  const [content, setContent] = useState([])
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(20)

  function fetchMoreData () {
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
    // eslint-disable-next-line
  }, [limit, offset])

  useEffect(() => {
    const elem = []
    pokemonList.forEach((pokemon, index) => {
      const arrData = pokemon.url.split('/')
      const id = arrData[6]
      elem.push(
        <MyCardList.Card
          key={index}
          id={id}
          avatarSuffix={pokemon.name ? pokemon.name.charAt(0) : ''}
          labelName={pokemon.name}
          sourceImage={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          altImage={pokemon.name}
        />
      )
    })
    setContent(elem)
  }, [pokemonList])

  async function onSubmitSearch (data) {
    const name = data.name.toLowerCase()
    history.push(`/detail?name=${name}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitSearch)}>
        <input
          placeholder='search'
          name='name'
          ref={register()}
        />
        <button type='submit'>
          Search
        </button>
      </form>
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
