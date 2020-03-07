import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { auth } from "../reducers/auth";
import { Logout } from "./Logout";
import { BuyLink } from "./BuyLink";

export const Welcome = () => {
  // I'd also save/restore the searchText, to give the user more context of why those book results and not others.
  const booksArray = JSON.parse(window.sessionStorage.getItem("booksArray"));

  const [books, setBooks] = useState(booksArray);
  const [searchText, setSearchText] = useState("");
  const [start, setStart] = useState(false);
  const [message, setMessage] = useState(false);

  const history = useHistory();

  const token = useSelector(store => store.auth.accessToken);

  const name = useSelector(store => store.auth.name);
  const loggedIn = useSelector(store => store.auth.loggedIn);

  console.log(loggedIn);

  const handleSubmit = event => {
    event.preventDefault();

    fetch(
      `https://www.googleapis.com/books/v1/volumes?maxResults=40&q=${searchText}`
    )
      .then(res => res.json())
      .then(json => {
        setBooks(json.items);
        sessionStorage.setItem("booksArray", JSON.stringify(json.items));
        setSearchText("");
        setStart(true);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const removeLocalHistory = () => {
    setBooks([]);
    window.sessionStorage.removeItem("booksArray");
    //IMPROVE!!!!
  };

  return (
    <div>
      {loggedIn && token && (
        <div>
          {" "}
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Search"
              value={searchText}
              onChange={event => setSearchText(event.target.value)}
            ></input>
          </form>
          <h2>Welcome {name} </h2>
          <Logout></Logout>
          <h3>{message}</h3>
          <button onClick={removeLocalHistory}>Clear search</button>
        </div>
      )}

      {!token && (
        <div>
          ERROR! NO access permitted!{" "}
          <button onClick={() => history.push("/")}>Back to Main Page</button>
        </div>
      )}

      {token &&
        books !== null &&
        books.map(book => {
          // I'd extract this to it's own Book Component, and reuse this in other pages.
          return (
            <div key={book.id}>
              <img
                src={
                  book.volumeInfo.imageLinks === undefined
                    ? null
                    : `${book.volumeInfo.imageLinks.thumbnail}`
                }
              />

              <h2>"{book.volumeInfo.title}"</h2>
              <h3>
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(", ")
                  : "Not provided"}
              </h3>
              <div>{book.volumeInfo.categories}</div>
              <BuyLink sales={book.saleInfo.buyLink}></BuyLink>
              <button onClick={() => history.push(`/details/${book.id}`)}>
                Show details
              </button>
            </div>
          );
        })}
    </div>
  );
};
