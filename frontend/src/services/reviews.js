export const getReviews = (name, setReviews) => {
  fetch(`https://bookify-project.herokuapp.com/profile?username=${name}`)
    .then(res => res.json())
    .then(json => {
      setReviews(json);
    });
};

export const handleDelete = reviewId => {
  fetch(`https://bookify-project.herokuapp.com/${reviewId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(() => {
      window.location.reload();
    });
};

export const fetchReviews = (bookId, setReviews) => {
  fetch(`https://bookify-project.herokuapp.com/review?bookId=${bookId}`)
    .then(res => res.json())
    .then(json => {
      setReviews(json);
    });
};

// const URL = "https://bookify-project.herokuapp.com/like";
