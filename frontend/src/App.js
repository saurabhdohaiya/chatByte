import {Route} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";

import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component= {Homepage} exact />
      <Route path="/chats" component={ChatPage}/>
    </div>
  );
}

export default App;
