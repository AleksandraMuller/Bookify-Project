export const addFavourite = book => {
  fetch(`https://bookify-project.herokuapp.com/like`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: book.favId,
      title: book.title,
      authors: book.authors,
      image: book.image,
      username: book.name,
      buy: book.buy
    })
  })
    .then(res => res.json())
    .then(json => {
      console.log(json);
    });
  alert("Added to your favourites ❤️❤️❤️");
};

export const deleteFavourite = favId => {
  fetch(`https://bookify-project.herokuapp.com/fav/${favId}`, {
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

export const getFavourites = (name, setFavourites) => {
  fetch(`https://bookify-project.herokuapp.com/like?username=${name}`)
    .then(res => res.json())
    .then(json => {
      setFavourites(json);
      console.log(json);
    });
};
