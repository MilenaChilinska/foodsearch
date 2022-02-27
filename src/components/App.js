import React, { useState } from "react";
import "./App.css";
import ItemsList from "./ItemsList";
import Alert from "./Alert";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [alert, setAlert] = useState("");

  const appID = "5901d976";
  const appKey = "a742d201083c6e6699ba43d551cb3a8e";
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("?");
    fetch(URL)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw new Error("Blad");
      })
      .then((data) => {
        if (query !== "") {
          console.log(data.hits);
          setItems(data.hits);
          setQuery("");
          setAlert("");
          if(!data.hits.length) {
            setAlert("ni ma");
          }
        } else {
          setAlert("Please fill the form");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    // console.log(e.target.value)
    setQuery(e.target.value);
  };
  return (
    <div className="body">
      <h1>What's for dinner?</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        {alert && <Alert alert={alert} />}
        <input
          value={query}
          onChange={handleChange}
          type="text"
          placeholder="Search food ..."
          autoComplete="off"
        />
        <input type="submit" />
      </form>

      {/* <ItemList items={items}/> */}
      <ItemsList items={items} />
    </div>
  );
}

export default App;
