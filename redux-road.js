const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200
};

const reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case "gather":
      return {
        supplies: state.supplies + 15,
        distance: state.distance,
        days: state.days + 1
      };
      break;
    case "travel":
      if (state.supplies < 0) {
        return state;
      } else {
        return {
          supplies: state.supplies - 20 * action.payload,
          distance: state.distance + 10 * action.payload,
          days: state.days + action.payload
        };
      }
      break;
    case "tippedWagon":
      return {
        supplies: state.supplies - 30,
        distance: state.distance,
        days: state.days + 1
      };
      break;
    case "sell":
      return {
        supplies: state.supplies - 20,
        cash: state.cash + 5
      };
      break;
    case "buy":
      return {
        supplies: state.supplies + 25,
        cash: state.cash - 15
      };
      break;
    case "theft":
      return {
        supplies: state.supplies,
        cash: state.cash / 2
      };
      break;
    default:
      return state;
  }
};

let wagon = reducer(undefined, {});
wagon = reducer(wagon, { type: "travel", payload: 1 });
wagon = reducer(wagon, { type: "gather" });
wagon = reducer(wagon, { type: "tippedWagon" });
wagon = reducer(wagon, { type: "travel", payload: 3 });
console.log(wagon);
