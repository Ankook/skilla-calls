

import React from 'react'
import { RootState } from "../../../app/store";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "../../../features/counter/counterSlice";
import { useGetPokemonByNameQuery } from '../../../api/pokemon/pokemon'

export function Counter() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  console.log(data);
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
    </div>
  )
}

