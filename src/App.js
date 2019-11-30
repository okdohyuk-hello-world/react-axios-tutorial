import React from 'react';
import PropTypes  from "prop-types";
import './app.css';


const foodILike = [
  {
    id: 1,
    name: "guksu",
    image:
    "https://post-phinf.pstatic.net/MjAxODAzMTJfMzcg/MDAxNTIwODE2MzIzMDky.ohBW46GZDFcB6b04P5RC5jlIfUqKPQK0J1lQ-d4EdXgg.1SZqEdGiBmuWKI-Q1hqz7XABc97-9z4kRVCopXBlrtwg.JPEG/Z16A3048sat2.jpg?type=w1200",
    rating: 10
  },
  {
    id: 2,
    name: "hamburg",
    image:
    "https://mblogthumb-phinf.pstatic.net/20151103_204/tdepidostv_1446534240529zXSVF_JPEG/%C7%DC%B9%F6%B0%C5_%C1%D6%B9%AE%C7%D2%B6%A7_%C6%C1_%285%29.jpg?type=w2",
    rating: 4.9
  },
  {
    id: 3,
    name: "chicken",
    image:
    "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2FSNUH%2Fea3136eda7e44fd4a423e78efff8e3ec.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "pizza",
    image: "http://www.pizzabig.co.kr/theme/basic/img/sub0201_img03.jpg",
    rating: 5.0
  }
]

function Food({ name, picture, rating }){
  return (
    <div className="menu">
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} height="100px" />
    </div>
  );
}

Food.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
    {foodILike.map(dish => (
      <Food 
      key={dish.id} 
      name={dish.name} 
      picture={dish.image} 
      rating={dish.rating}
      />
      ))}
  </div>
  );
}

export default App;
