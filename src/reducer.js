const initialStateSearch = {
  searchField: "",
};

export const setSearchField = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case "search/searchFieldChange":
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: true,
  robots: [],
  error: "",
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case "robots/requestPending":
      return Object.assign({}, state, { isPending: true });
    case "robots/requestSuccess":
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false,
      });
    case "robots/requestFailed":
      return Object.assign({}, state, {
        error: action.payload,
      });
    default:
      return state;
  }
};
