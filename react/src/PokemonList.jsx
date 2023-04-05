import { useEffect, useState } from "react";

export const PokemonList = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [data, setData] = useState([]);

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
      })
  };

  useEffect(() => {
    async function load() {
      const data = await fetchData();
      setPokemons(data);
    }

    load();
  }, []);

  useEffect(() => {
    if(props.search === '') {
      setPokemons(data);
    } else {
      const p = data.filter((po) => po.name.french.includes(props.search));
      setPokemons(p);
    }
    
  }, [props.search]);

  return (
    <div className="row">
      {pokemons.map((p, i) => {
        return (
          <div key={i} className="card m-2 col-2">
            <img
              style={{ margin: "0 auto" }}
              height={75}
              width={75}
              src={p.image}
              alt={p.name}
            ></img>
            <div className="card-body">
              <h5 className="card-title">{p.name.french}</h5>
              <p>Type: {p.type[0]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
