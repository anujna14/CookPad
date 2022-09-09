import { createStore } from "redux";

const initialState = {
  favourites: [],
  totalCount: 0,
};
const FavouriteReducer = (state = initialState, action) => {
  if (action.type === "ADD_FAV") {
    return {
      ...state,
      favourites: [...state.favourites, action.payload],
      totalCount: state.totalCount + 1
    };
  }
  if (action.type === "REMOVE_FAV") {
    const removeItem = state.favourites.filter((fav) => fav.id !== action.id);
    return {
      ...state,
      favourites: removeItem,
      totalCount: state.totalCount - 1
    };
  }

  return state;
};

const store = createStore(FavouriteReducer);

export default store;
