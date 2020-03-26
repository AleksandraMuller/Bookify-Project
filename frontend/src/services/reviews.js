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

export const addReview = (book, setReviews, setUserReview, reviews, event) => {
  event.preventDefault();
  fetch(`https://bookify-project.herokuapp.com/review`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      review: book.userReview,
      id: book.bookId,
      description: book.description,
      title: book.title,
      authors: book.authors,
      authorName: book.name
    })
  })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      const newReviews = [...reviews, json];
      setReviews(
        newReviews.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
      );
      setUserReview("");
    });
};
