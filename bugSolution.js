```javascript
//Improved reducer function with error handling
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload };
    case 'DECREMENT':
      return { ...state, count: state.count - action.payload };
    default:
      //Improved error handling
      console.error('Invalid action type:', action.type);
      return state; // or throw a more specific error
  }
}
```