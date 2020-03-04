import React, { useState, useEffect } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import moment from "moment";

export const Details = () => {
  const [details, setDetails] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const location = useLocation();
  const history = useHistory();
  // const dispatch = useDispatch();

  const { bookId } = useParams();

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
    fetch("http://localhost:8080/comment")
      .then(res => res.json())
      .then(json => {
        json.map(j => {
          const filtered = json.filter(j => bookId === j.id);
          setFiltered(filtered);
          console.log(filtered);
        });
        console.log(bookId);
      });
    // setLoading(false);
  }, []);

  const addComment = event => {
    event.preventDefault();

    fetch("http://localhost:8080/comment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        comment: comments,
        id: bookId,
        description: details.volumeInfo.description,
        title: details.volumeInfo.title,
        authors: details.volumeInfo.authors
      })
    })
      .then(res => res.json())
      .then(json => {
        const newComments = [...filtered, json];
        setFiltered(newComments);
      });
  };

  //LOG OUT
  const handleLogOut = () => {
    window.localStorage.removeItem("accessToken");
    history.push("/login");
  };

  return (
    <section className="details-section">
      {loading && !error && <h2 className="loading">Loading details...</h2>}
      {error && <h2 className="loading">Book not found</h2>}
      {!error & !loading && (
        <div>
          <h2>{details.volumeInfo.title}</h2>
          <h4>{details.volumeInfo.authors}</h4>
          <button onClick={() => history.push("/welcome")}>Back</button>
          <button onClick={handleLogOut}>Log out</button>

          <input onChange={e => setComments(e.target.value)}></input>
          <button onClick={addComment}>Add Comment</button>
          <ul>
            {filtered.map(comment => {
              return (
                <div key={comment._id}>
                  <p>Comment: {comment.comment}</p>
                  <p className="time">{moment(comment.createdAt).fromNow()}</p>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
};
