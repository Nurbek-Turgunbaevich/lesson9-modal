import { useState } from "react";
import "./App.css";
import Modal from "./Modal";
import Button from "./Button";

import Form from "./Form";

function App() {
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);

  function showForm() {
    setState((prew) => !prew);
  }
  function showForm2() {
    setState2((prew2) => !prew2);
  }
  return (
    <div className="App">
      {state && (
        <Modal blockModal={showForm}>
          <h1>SOCCESS</h1>
        </Modal>
      )}


      {
        state2 && <Form blockModal={showForm2} ><h1>ERROR</h1></Form>
      }
      
      <Button onClick={showForm}>Modal</Button>

<br/>
      <Button onClick={showForm2}>Modal2</Button>

      
    </div>
  );
}

export default App;
