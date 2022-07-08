const { createStore } = require("redux");
const increment = "INCREMENT";
const decrement = "decrement";

const counterState = {
  count: 0,
};

const counterAction = () => {
  return {
    type: increment,
  };
};
const counterAction2 = () => {
  return {
    type: decrement,
  };
};

const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case increment:
      return {
        count: state.count + 1,
      };
    case decrement:
      return {
        count: state.count - 1,
      };
    default:
      state;
  }
};

const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(counterAction());
store.dispatch(counterAction());
store.dispatch(counterAction());
store.dispatch(counterAction2());
