import "./App.css";
import { io } from "socket.io-client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Join } from "./component/Join/Join";
import { Chat } from "./component/Chat/Chat";

const socket = io(`http://localhost:7000`);

function App() {
   return (
      <div className="App">
         <Router>
            <Route exact path="/" component={Join} />
            <Route path="/chat" component={Chat} />
         </Router>
      </div>
   );
}

export default App;
