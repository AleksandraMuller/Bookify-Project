import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { Review } from "./Review";
import { auth } from "reducers/auth";
import { Profile } from "./Profile";

export const Details = () => {
  const [details, setDetails] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [authorFiltered, setAuthorFiltered] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const { bookId } = useParams();
  const token = useSelector(store => store.auth.accessToken);
  const name = useSelector(store => store.auth.name);
  const loggedIn = useSelector(store => store.auth.loggedIn);

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
    fetch("http://localhost:8080/review")
      .then(res => res.json())
      .then(json => {
        json.map(j => {
          const filtered = json.filter(j => bookId === j.id);
          setFiltered(filtered);
          console.log(filtered);

          // const filterByAuthorName = filtered.filter(
          //   n => n.authorName === name
          // );
          // if (filterByAuthorName) {
          //   dispatch(auth.actions.setValidate());
          // }

          // console.log(test);
          // console.log(name);
        });
      });
    // setLoading(false);
  }, [bookId]);

  const addReview = event => {
    event.preventDefault();

    fetch("http://localhost:8080/review", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        review: reviews,
        id: bookId,
        description: details.volumeInfo.description,
        title: details.volumeInfo.title,
        authors: details.volumeInfo.authors,
        authorName: name
      })
    })
      .then(res => res.json())
      .then(json => {
        const newReviews = [...filtered, json];
        setFiltered(newReviews);
      });
  };

  //LOG OUT
  const handleLogOut = () => {
    dispatch(auth.actions.setLoggedOut());
    history.push("/login");
  };

  return (
    <section className="details-section">
      {loading && !error && token && (
        <h2 className="loading">Loading details...</h2>
      )}
      {error && token && <h2 className="loading">Book not found</h2>}
      {!error && !loading && token && (
        <div>
          <h3>You are logged in as {name}</h3>
          <button onClick={handleLogOut}>Log out</button>
          <button onClick={() => history.push("/profile")}>
            Go to my profile
          </button>
          <h2>{details.volumeInfo.title}</h2>
          <h4>{details.volumeInfo.authors}</h4>
          <button onClick={() => history.push("/welcome")}>Back</button>

          <input onChange={e => setReviews(e.target.value)}></input>
          <button onClick={addReview}>Add Review</button>
          <ul>
            {filtered.map(review => {
              return (
                <div>
                  <Review
                    id={review._id}
                    name={review.authorName}
                    review={review.review}
                    time={moment(review.createdAt).fromNow()}
                    // reviewId={review._id}
                    // authorFiltered={authorFiltered}
                    // reviews={filtered}
                    // setFiltered={setFiltered}
                  ></Review>
                  {/* {!loggedIn && <Profile reviewId={review._id}></Profile>} */}
                </div>
              );
            })}
          </ul>
        </div>
      )}
      {!token && (
        <div>
          ERROR! NO access permitted!{" "}
          <button onClick={() => history.push("/")}>Back to Main Page</button>
        </div>
      )}
    </section>
  );
};
