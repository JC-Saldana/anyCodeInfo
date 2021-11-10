import Login from "./components/Login/Login";
import { Ticket } from "./components/ticket/index";

function App() {
  return (
    <div className="App">
       <Ticket name="name"/>
       <hr/>
       <Login/>
    </div>
  );
}

export default App;
