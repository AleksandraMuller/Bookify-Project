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
