import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { auth } from "../reducers/auth";
import { Logout } from "./Logout";
import { BuyLink } from "./BuyLink";
import { BookCard } from "./BookCard";

import {
  Container,
  Header,
  HeaderName,
  HeaderForm,
  Form,
  Input,
  OneCard,
  CardContainer,
  DetailsButton
} from "../styles/styles_Welcome";
import { Button, ButtonContainer } from "../styles/styles_Logout";
import { Details } from "./Details";

export const Welcome = () => {
  const booksArray = JSON.parse(window.sessionStorage.getItem("booksArray"));

  const [books, setBooks] = useState(booksArray);
  const [searchText, setSearchText] = useState("");
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
    <Container>
      {loggedIn && token && (
        <div>
          <Header>
            <ButtonContainer>
              <Logout></Logout>
              <Button onClick={removeLocalHistory}>Clear search</Button>
            </ButtonContainer>
            <HeaderName>Welcome {name}! </HeaderName>
          </Header>{" "}
          <Form onSubmit={handleSubmit}>
            <HeaderForm>Start exploring now:</HeaderForm>
            <Input
              placeholder="Search by title"
              value={searchText}
              onChange={event => setSearchText(event.target.value)}
            ></Input>
          </Form>
          <h3>{message}</h3>
        </div>
      )}

      {!token && (
        <div>
          ERROR! NO access permitted!{" "}
          <button onClick={() => history.push("/")}>Back to Main Page</button>
        </div>
      )}
      <CardContainer>
        {token &&
          books !== null &&
          books.map(book => {
            return (
              <OneCard key={book.id}>
                <BuyLink sales={book.saleInfo.buyLink}></BuyLink>
                <BookCard
                  image={book.volumeInfo.imageLinks}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  categories={book.volumeInfo.categories}
                ></BookCard>

                <DetailsButton
                  onClick={() => history.push(`/details/${book.id}`)}
                >
                  Show details
                </DetailsButton>
              </OneCard>
            );
          })}
      </CardContainer>
    </Container>
  );
};
