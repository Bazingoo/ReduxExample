import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
  number: 0
}

const reducer = (state=defaultState, action)=> {
  switch(action.type) {
    case "PLUS_ONE":
      return {...state, number: state.number+action.payLoad}
      case "MINUS_ONE":
      return {...state, number: state.number-action.payLoad}
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
 <Provider store={store}>
 <App />
 </Provider>,
  document.getElementById('root')
);