import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { auth } from "../reducers/auth";

export const Welcome = () => {
  const booksArray = JSON.parse(window.sessionStorage.getItem("booksArray"));

  const [books, setBooks] = useState(booksArray);
  const [searchText, setSearchText] = useState("");
  const [start, setStart] = useState(false);
  const [message, setMessage] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const token = useSelector(store => store.auth.accessToken);
  const userId = useSelector(store => store.auth.userId);
  const name = useSelector(store => store.auth.name);
  const loggedIn = useSelector(store => store.auth.loggedIn);

  console.log(loggedIn);

  const myStorage = window.localStorage;
  const mySessions = window.sessionStorage;
  console.log(myStorage);
  console.log(mySessions);

  // localStorage.setItem("accessToken", JSON.stringify(token));

  // useEffect(() => {
  //   fetch("http://localhost:3001/secrets", {
  //     method: "GET",
  //     headers: { Authorization: localStorage.getItem("accessToken") }
  //   })
  //     .then(res => {
  //       if (!res.ok) {
  //         // !TODO: Handle status 401 and show error message.
  //       }
  //       return res.json();
  //       // console.log(res.json);
  //     })
  //     .then(json => {
  //       setMessage(json.secret);
  //     });
  // }, []);

  // document.cookie(token);
  // sessionStorage.setItem("username", JSON.stringify(name));

  // console.log(JSON.stringify(name));

  //LOG OUT
  const handleLogOut = () => {
    history.push("/login");
    dispatch(auth.actions.setLoggedOut());
    // window.localStorage.removeItem("accessToken");
    //IMPROVE !!!!!!!
  };

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
  // console.log(token);
  // //Authorization of the logged in user via accessToken and sending out the secret
  // useEffect(() => {
  //   if (userId) {
  //     fetch("http://localhost:8080/secrets", {
  //       method: "GET",
  //       headers: { Authorization: token }
  //     })
  //       .then(res => {
  //         if (!res.ok) {
  //           console.log("Failed");
  //           // !TODO: Handle status 401 and show error message.
  //         }
  //         return res.json();
  //         // console.log(res.json);
  //       })
  //       .then(json => {
  //         console.log(json);

  //         setMessage(json.secret);
  //       });
  //   }
  // }, [userId]);

  // console.log(token);

  // window.localStorage.setItem("accessToken", JSON.stringify(token));
  // window.localStorage.getItem("accessToken");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search"
          value={searchText}
          onChange={event => setSearchText(event.target.value)}
        ></input>
      </form>

      <h2>Welcome {name} </h2>

      <button onClick={handleLogOut}>Log out</button>
      <h3>{message}</h3>

      <button onClick={removeLocalHistory}>Clear search</button>

      {books !== null &&
        books.map(book => {
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
              <button onClick={() => history.push(`/details/${book.id}`)}>
                Show details
              </button>
            </div>
          );
        })}
    </div>
  );
};
