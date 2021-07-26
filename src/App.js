import "./App.css";
import Accordion from "./components/Accordion";
import React, { useState } from "react";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Transalte";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "what is react?",
    content: "rect asdsa sadddd you know",
  },
  {
    title: "what is react? asds 2",
    content: "rect asdsa sadddd you know 2",
  },
  {
    title: "what is react 3 ?",
    content: "rect asdsa sadddd you know 33",
  },
];

const options = [
  {
    label: "Color Red",
    value: "red",
  },
  {
    label: "Color Green",
    value: "green",
  },
  {
    label: "some blue",
    value: "blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="App">
      <h1>widgets</h1>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
          label="Select a color"
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
