const defaultState = {
  login: false,
};

const reducer = (state = defaultState, action) => {
  // change code below this line
  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN',
  };
};

// Not at all comfortable with Redux.  I've used it here and there but not enough to keep up with the tutorials.  They feel vague and underdetailed compared to the React tutorials.
