import { For, createEffect, createSignal } from "solid-js";

import { search } from "./Search";

export const PokemonList = (props) => {
  const pokemons = () => data().filter((po) => po.name.french.includes(search())) || data();
  const [data, setData] = createSignal([]);

  const fetchData = async () => {
    return fetch(
      "https://raw.githubusercontent.com/jherr/fower-pokemon-vue/master/public/pokemon.json"
    )
      .then((x) => x.json())
      .then((data) => {
        data = data.map((p) => ({
          ...p,
          image: `https://raw.githubusercontent.com/jherr/fower-pokemon-vue/master/public/pokemon/${p.name.english.toLowerCase()}.jpg`,
        }));
        setData(data);
        return data;
      });
  };

  createEffect(() => {
    fetchData();
  });

  return (
    <div class="row">
      <For each={pokemons()}>
        {(p, i) => (
          <div key={i} class="card m-2 col-2">
            <img
              style="margin: 0 auto"
              height={75}
              width={75}
              src={p.image}
              alt={p.name}
            ></img>
            <div class="card-body">
              <h5 class="card-title">{p.name.french}</h5>
              <p>Type: {p.type[0]}</p>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};
