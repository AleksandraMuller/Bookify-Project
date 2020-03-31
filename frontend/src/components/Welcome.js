import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { AddFavourite } from "./AddFavourite";
import { Logout } from "./Logout";
import { BuyLink } from "./BuyLink";
import { BookCard } from "./BookCard";

import { ErrorButton, ErrorContainer } from "../styles/styles_error";

import { handleSubmit } from "../services/books";

import {
  HeaderName,
  HeaderForm,
  Form,
  Input,
  OneCard,
  DetailsButton
} from "../styles/styles_Welcome";
import {
  BlueButton,
  Container,
  Header,
  ButtonContainer,
  CardContainer
} from "../styles/styles_reusables";

export const Welcome = () => {
  const booksArray = JSON.parse(window.sessionStorage.getItem("booksArray"));

  const [books, setBooks] = useState(booksArray);
  const [searchText, setSearchText] = useState("");
  const [message, setMessage] = useState(false);

  const history = useHistory();

  const name = useSelector(store => store.auth.name);
  const loggedIn = useSelector(store => store.auth.loggedIn);

  const removeLocalHistory = () => {
    setBooks([]);
    window.sessionStorage.removeItem("booksArray");
  };

  return (
    <Container>
      {loggedIn && (
        <div>
          <Header>
            <ButtonContainer>
              <Logout></Logout>
              <BlueButton onClick={removeLocalHistory}>Clear search</BlueButton>
            </ButtonContainer>
            <HeaderName onClick={() => history.push("/profile")}>
              Welcome {name}! <ion-icon name="person-circle-outline"></ion-icon>
            </HeaderName>
          </Header>{" "}
          <Form
            onSubmit={event =>
              handleSubmit(event, searchText, setBooks, setSearchText)
            }
          >
            <HeaderForm>Start exploring now:</HeaderForm>
            <Input
              placeholder="Search by title or author"
              value={searchText}
              onChange={event => setSearchText(event.target.value)}
            ></Input>
          </Form>
          <h3>{message}</h3>
        </div>
      )}

      <CardContainer>
        {loggedIn &&
          books !== null &&
          books.map(book => {
            return (
              <OneCard key={book.id}>
                <AddFavourite
                  bookId={book.id}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  image={
                    book.volumeInfo.imageLinks === undefined
                      ? null
                      : `${book.volumeInfo.imageLinks.thumbnail}`
                  }
                  favId={book.id}
                  buy={book.saleInfo.buyLink}
                ></AddFavourite>

                {book.saleInfo.buyLink && (
                  <BuyLink sales={book.saleInfo}></BuyLink>
                )}

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

      {!loggedIn && (
        <ErrorContainer>
          ERROR! No access permitted!{" "}
          <ErrorButton onClick={() => history.push("/")}>
            Back to Main Page
          </ErrorButton>
        </ErrorContainer>
      )}
    </Container>
  );
};
