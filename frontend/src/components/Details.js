import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";

import {
  ButtonProfile,
  HeaderReview,
  InputReview,
  ButtonReview,
  Form
} from "../styles/styles_Details";
import { Container, Header, HeaderName } from "../styles/styles_Welcome";
import { ButtonContainer } from "../styles/styles_Logout";
import { BlueButton } from "../styles/styles_reusables";

import { Review } from "./Review";
import { Logout } from "./Logout";
import { DetailsCard } from "./DetailsCard";

const URL = "http://localhost:8080/review";

export const Details = () => {
  const [details, setDetails] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [userReview, setUserReview] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const history = useHistory();

  const { bookId } = useParams();
  const token = useSelector(store => store.auth.accessToken);
  const name = useSelector(store => store.auth.name);

  const fetchData = async () => {
    const resp = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${bookId}`
    );
    const json = await resp.json();
    if (json.status_code === 34) {
      setError(true);
    } else {
      setDetails({ ...json });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // setLoading(true);
    fetch(`${URL}?bookId=${bookId}`)
      .then(res => res.json())
      .then(json => {
        setReviews(json);
      });
    // setLoading(false);
  }, [bookId]);

  const addReview = event => {
    event.preventDefault();

    fetch(`${URL}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        review: userReview,
        id: bookId,
        description: details.volumeInfo.description,
        title: details.volumeInfo.title,
        authors: details.volumeInfo.authors,
        authorName: name
      })
    })
      .then(res => res.json())
      .then(json => {
        const newReviews = [...reviews, json];
        setReviews(
          newReviews.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
        );
        setUserReview("");
      });
  };

  return (
    <Container className="details-section">
      {loading && !error && token && (
        <h2 className="loading">Loading details...</h2>
      )}
      {error && token && <h2 className="loading">Book not found</h2>}
      {!error && !loading && token && (
        <div>
          <Header>
            <ButtonContainer>
              <Logout></Logout>
              <BlueButton onClick={() => history.push("/welcome")}>
                Back
              </BlueButton>
            </ButtonContainer>
            {/* <HeaderName>You are logged in as {name}! </HeaderName> */}
            <ButtonProfile onClick={() => history.push("/profile")}>
              {name}, go to your profile
            </ButtonProfile>
          </Header>
          <DetailsCard
            title={details.volumeInfo.title}
            authors={details.volumeInfo.authors}
            image={details.volumeInfo.imageLinks}
            categories={details.volumeInfo.categories}
            description={details.volumeInfo.description}
            published={details.volumeInfo.publishedDate}
            price={details.saleInfo.retailPrice}
            cart={details.saleInfo}
            publisher={details.volumeInfo.publisher}
            pages={details.volumeInfo.pageCount}
          ></DetailsCard>
          <HeaderReview>Leave your review here 👇</HeaderReview>
          <Form onSubmit={addReview}>
            <InputReview
              placeholder="Add a review.."
              type="textarea"
              value={userReview}
              onChange={e => setUserReview(e.target.value)}
            ></InputReview>
            <ButtonReview onClick={addReview}>Add review 😊</ButtonReview>
          </Form>
          <>
            {reviews.map(review => {
              return (
                <Review
                  id={review._id}
                  reviewId={review._id}
                  name={review.authorName}
                  review={review.review}
                  time={moment(review.createdAt).fromNow()}
                ></Review>
              );
            })}
          </>
        </div>
      )}
      {!token && (
        <div>
          ERROR! NO access permitted!{" "}
          <button onClick={() => history.push("/")}>Back to Main Page</button>
        </div>
      )}
    </Container>
  );
};
