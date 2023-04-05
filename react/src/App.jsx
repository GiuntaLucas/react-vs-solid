import { useState } from "react";
import { PokemonList } from "./PokemonList";
import { Search } from "./Search";


function App() {
  const [search, setSearch] = useState('');
  const handleSearch = (search) => {
    setSearch(search);
  }

  return (
    <div className="pl-2 pr-2" style={{overflowX: 'hidden'}}>
      <nav className="navbar navbar-light bg-light p-2 fixed-top">
        <a className="navbar-brand" href="#">
          <img
            className="d-inline-block align-top mr-1"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            width="30"
            height="30"
            alt=""
          />
          React
        </a>
      </nav>
      <div style={{marginTop: '4em'}}>
        <Search handleSearch={handleSearch} />
        <PokemonList search={search} />
      </div>
    </div>
  );
}

export default App;
