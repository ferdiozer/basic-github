import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = (props) => {
  const { searchUsers, clearUsers, users, user } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [search, setSearch] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) setAlert("Please enter something", "danger");
    else {
      searchUsers(search);
      // setSearch("");
    }
    // console.log({ searchUsers, clearUsers, users, user, search })
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          autoComplete={"off"}
          name="search"
          id="search"
          placeholder="Search..."
          value={search}
          onKeyPress={(e) => {
            if (e.key == 'Enter') {
              setSearch(search)
            }
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>

      {!!users.length && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          {" "}
          Clear{" "}
        </button>
      )}
    </div>
  );
};

export default Search;
