import React, { createContext, useReducer } from 'react';

const ContextApi = createContext([]);

const ReducerApi = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      // console.log(`zmieniam: ${action.value}`);
      return [...state, action.value];
    }
    default: {
      console.log('wychodzę');
      return state;
    }
  }
};

// const ContextProvider = props => {
//   const [state, dispatch] = useReducer(ReducerApi, 0);
//   console.log('provider');
//   return (
//     <ContextApi.Provider value={{ state, dispatch }}>
//       {props.children}
//     </ContextApi.Provider>
//   );
// };

// let ContextConsumer = ContextApi.Consumer;

// export { ContextApi, ContextProvider, ContextConsumer };
