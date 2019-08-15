import C from '../actions/actionTypes';

const posts = (state = [], action) => {
  switch (action.type) {
    case C.INCREMENT_LIKES :
      console.log(C.INCREMENT_LIKES);
      const i = action.index;
      return [
        ...state.slice(0, i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1),
      ]

    default:
      return state;
  }
  
}

export default posts;