let instance;
const state = {};

class globalState {
  constructor() {
    if (!instance) {
      instance = this;
    }
  }

  readStateProperty(property) {
    return state[property];
  }
  writeStateProperty(property, value) {
    state[property] = value;
  }
}

let stateUtilityInstance = Object.freeze(new globalState());

export default stateUtilityInstance;
