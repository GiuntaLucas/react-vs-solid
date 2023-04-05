import { createSignal } from "solid-js";

export const [search, setSearch] = createSignal('');

export const Search = (props) => {

  const handleChange = (e) => {
    setSearch(e.target.value)
    // props.handleSearch(e.target.value)
  }
  return (
    <>
    <input
      type="text"
      class="form-control"
      id="search"
      placeholder="Search"
      onKeyUp={handleChange}
    />
    </>
    
  );
};
