export const setSearchField = (text) => ({
  type: "search/searchFieldChange",
  payload: text,
});

export const requestRobots = () => (dispatch) => {
  dispatch({ type: "robots/requestPending" });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((robots) =>
      dispatch({ type: "robots/requestSuccess", payload: robots })
    )
    .catch((error) =>
      dispatch({ type: "robots/requestFailed", payload: error })
    );
};
