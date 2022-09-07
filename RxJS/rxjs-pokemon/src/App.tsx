import { useEffect, useState, useMemo } from 'react'
import { PokemonProvider, Pokemon, usePokemon } from "./store"
import { useObservableState } from "observable-hooks"
import { BehaviorSubject, combineLatestWith, map } from 'rxjs';
import './App.css';

const Deck = () => {
  // useObservableState create un estado directamente con el valor del observable
  const { deck$ } = usePokemon()
  const deck = useObservableState(deck$, [])
  return <div>
    <h4>Deck</h4>
    {deck.length}
    {deck.map(p => (
      <div key={p.id} style={{ display: "flex" }}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} alt={p.name} />
        <div>
          <div>{p.name}</div>
        </div>
      </div>
    ))}
  </div>
}

const Search = () => {
  const { pokemon$, selected$ } = usePokemon()
  const search$ = useMemo(() => new BehaviorSubject(""), [])

  /*  Si no se usase el hook useObservableState 
  const [pokemon, setPokemon] = useState<Pokemon[]>([]) */
 
  const [filteredPokemon] = useObservableState(() =>
    pokemon$.pipe(
      combineLatestWith(search$),
      map(([pokemon, search]) =>
        pokemon.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      )
    ), [])

  /*  Si no se usase el hook useObservableState 
  useEffect(() => {
    const sub = pokemon$.subscribe(setPokemon)
    return () => sub.unsubscribe()
  }, []) */


  return (
    <div>
      <input type="text"
        value={search$.value}
        onChange={e => search$.next(e.target.value)}
      />
      <div>
        {filteredPokemon.length}
        {filteredPokemon.map((p) => (
          <div key={p.name}>
            <input type="checkbox"
              checked={p.selected}
              onChange={() => {
                console.log(selected$.value)
                if (selected$.value.includes(p.id)) {
                  console.log("removed")
                  selected$.next(selected$.value.filter((id) => id !== p.id))
                } else {
                  console.log("added")
                  selected$.next([...selected$.value, p.id])
                }
              }} />
            <strong>{p.name}</strong> - {p.power}
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <PokemonProvider>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr"
        }}
      >
        <Search />
        <Deck />
      </div>
    </PokemonProvider>
  );
}

export default App;
