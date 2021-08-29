import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";
import { getUserByUsername } from "../../Api";

const Search = (props) => {
    const { searchUsers, clearUsers, users, user } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);
    const [search, setSearch] = useState("");


    const onSubmit = (e) => {
        e.preventDefault();

        if (!search.trim()) setAlert("Please enter something", "danger");
        else {
            sendApi(search);
            setSearch("");
        }
        // console.log({ searchUsers, clearUsers, users, user, search })
    };

    const sendApi = async (username) => {
        getUserByUsername(username).then(user => {
            console.log({ user, props })
            props.history.push(`/user/${username}`)
        }).catch(err => {
            console.log(err)
            setAlert(`${search} not found !!`, "danger");
        })
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input
                    type="text"
                    autoComplete={"off"}
                    name="search"
                    id="search"
                    placeholder="@username"
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
