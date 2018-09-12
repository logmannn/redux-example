import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      // because we are using a fake data source we are
      //   going to push onto current data.
      //   in theory we would like to refetch
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
