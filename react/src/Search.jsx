export const Search = (props) => {
  const handleChange = (e) => {
    props.handleSearch(e.target.value)
  }
  return (
    <>
    <input
      type="text"
      className="form-control"
      id="search"
      placeholder="Search"
      onChange={handleChange}
    />
    </>
    
  );
};
