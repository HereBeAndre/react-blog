// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case "GET_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
