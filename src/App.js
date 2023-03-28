import React,{useState, useReducer} from 'react'
import logo from './logo.svg';
import './App.css';
import productReducer from './reducers/productReducer';

function App() {
  const intialState = [
    {
    title: "Hogwart's Legacy",
    publisher: "Warner Bros.",
    genre: "Adventure",
    price: 59.99
    },
    {
      title: "Destiny 2",
      publisher: "Bungie",
      genre: "FPS",
      price: 29.99
    },
    {
      title: "The Last of Us",
      publisher: "Sony",
      genre: "Adventure",
      price: 69.99
    },
    {
      title: "Total War: Warhammer III",
      publisher: "Sega",
      genre: "Strategy",
      price: 49.99
    }
]

const [productState, dispatch] = useReducer(productReducer, intialState)


  return (
    <div className="App">
      <h1>Video Game Products</h1>

    </div>
  );
}

export default App;
