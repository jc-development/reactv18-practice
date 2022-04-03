import { FC, useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state: {count: number; }, action: { type: string; }) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };

    case 'decrement':
      return { count: state.count - 1 };

    default:
      throw new Error();
  }
}

const Counter: FC = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div style={{ padding: "2rem" }}>
      <span style={{ paddingRight: "2rem" }}>Count: { state.count }</span>
      <button 
        onClick={() => dispatch({ type: "decrement" })}
      >
        subtract
      </button>
      <button
        onClick={() => dispatch({ type: "increment" })}
      >
        add
      </button>
    </div>
  );
}

export default Counter;