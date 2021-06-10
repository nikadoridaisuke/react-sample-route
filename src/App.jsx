import { useState } from "react";
import  { BrowserRouter, Link } from "react-router-dom";
import { Modal } from "./modal/Modal";
import { Router } from "./router/Router";

function App() {
  const [showModal, setShowModal] = useState(false);

  const onClickOpenModal = () => {
    setShowModal(true);
  }

  return (
    <BrowserRouter >
      <div className="App">
        <Link to="/">Home</Link>
        <br/>
        <Link to="/page1">Page1</Link>
        <br/>
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
      <button onClick={() => {onClickOpenModal()}}>click</button>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
    </BrowserRouter>
  );
}

export default App;
