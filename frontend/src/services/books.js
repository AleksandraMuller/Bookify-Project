export const fetchData = async (bookId, setError, setDetails, setLoading) => {
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

export const handleSubmit = (event, searchText, setBooks, setSearchText) => {
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
