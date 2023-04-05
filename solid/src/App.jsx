import { Search } from "./Search";
import { PokemonList } from "./PokemonList";

function App() {
  // const [search, setSearch] = createSignal("");
  // const handleSearch = (search) => {
  //   setSearch(search);
  // };

  return (
    <div class="pl-2 pr-2" style="overflow-x: hidden">
      <nav class="navbar navbar-light bg-light p-2 fixed-top">
        <a class="navbar-brand" href="#">
          <img
            class="d-inline-block align-top mr-1"
            src="https://www.solidjs.com/assets/logo-123b04bc.svg"
            width="30"
            height="30"
            alt=""
          />
          Solid
        </a>
      </nav>
      <div style="margin-top: 4em">
        {/* <Search handleSearch={handleSearch} /> */}
        {/* <PokemonList search={search()} /> */}
        <Search />
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
