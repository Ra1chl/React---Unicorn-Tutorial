import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Formular from "./components/Fotrmular";

function App() {
  const [count, setCount] = useState(0);
  let items = ["New York", "San Francisco", "Tokyo", "Berlin", "London"];
  const handleItemSelect = (item) => {
    console.log(item);
  };
  return (
    <>
      <Message></Message>
      <Formular />
      <ListGroup
        items={items}
        heading="Cities"
        onItemSelect={handleItemSelect}
      ></ListGroup>
    </>
  );
}

export default App;
