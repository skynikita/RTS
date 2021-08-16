import ReactDOM from 'react-dom';
//import GuestList from './state/GuestList'
//import UserSearch from "./state/UserSearch";
//import EventComponent from "./events/EventComponent";
//import UserSearchClass from "./state/UserSearchClass";
import UserSearch from "./ref/UserSearch";

const App = () => {
  return <div>
    <UserSearch />

  </div>
};


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

