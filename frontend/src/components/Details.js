import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";

import { DetailsReview } from "./DetailsReview";
import { Logout } from "./Logout";
import { DetailsCard } from "./DetailsCard";

import { fetchData } from "../services/books";
import { fetchReviews, addReview } from "../services/reviews";
import { AddReview } from "./AddReview";

import {
  ButtonProfile,
  HeaderReview,
  InputReview,
  Form
} from "../styles/styles_Details";

import {
  Container,
  BlueButton,
  Header,
  ButtonContainer
} from "../styles/styles_reusables";

const URL = "https://bookify-project.herokuapp.com/review";
// const URL = "http://localhost:8080/review";

export const Details = () => {
  const [details, setDetails] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [userReview, setUserReview] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const history = useHistory();

  const { bookId } = useParams();
  const loggedIn = useSelector(store => store.auth.loggedIn);
  const name = useSelector(store => store.auth.name);

  useEffect(() => {
    fetchData(bookId, setError, setDetails, setLoading);
  }, []);

  useEffect(() => {
    fetchReviews(bookId, setReviews);
  }, [bookId]);

  return (
    <Container className="details-section">
      {loading && !error && loggedIn && (
        <h2 className="loading">Loading details...</h2>
      )}
      {error && loggedIn && <h2 className="loading">Book not found</h2>}
      {!error && !loading && loggedIn && (
        <div>
          <Header>
            <ButtonContainer>
              <Logout></Logout>
              <BlueButton onClick={() => history.push("/welcome")}>
                Back
              </BlueButton>
            </ButtonContainer>
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
          <HeaderReview>
            Leave your review here{" "}
            <span role="img" aria-labelledby="look down hand">
              👇
            </span>
          </HeaderReview>
          <Form onSubmit={addReview}>
            <InputReview
              placeholder="Add a review.."
              type="textarea"
              value={userReview}
              onChange={e => setUserReview(e.target.value)}
            ></InputReview>
            <AddReview
              title={details.volumeInfo.title}
              authors={details.volumeInfo.authors.join(", ")}
              description={details.volumeInfo.description}
              setReviews={setReviews}
              setUserReview={setUserReview}
              reviews={reviews}
              bookId={bookId}
              userReview={userReview}
            ></AddReview>
          </Form>
          <>
            {reviews.map(review => {
              return (
                <DetailsReview
                  id={review._id}
                  reviewId={review._id}
                  name={review.authorName}
                  review={review.review}
                  time={moment(review.createdAt).fromNow()}
                ></DetailsReview>
              );
            })}
          </>
        </div>
      )}
      {!loggedIn && (
        <div>
          ERROR! NO access permitted!{" "}
          <button onClick={() => history.push("/")}>Back to Main Page</button>
        </div>
      )}
    </Container>
  );
};
