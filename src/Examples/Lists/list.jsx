import React from 'react';

const foods = [
    'sugar',
    'cheese',
    'tomatoes',
    'kachamak',
    'shopska salad'
  ];
  
  function FoodItem({ foodName }) {
    return <div>{foodName}</div>;
  }
  
  function GroceryList({ foods }) {
    return (
      <ul>
        {
          foods.map(food => <FoodItem foodName={food} />)
        }
      </ul>
    );
  }
  
  const App = () => {
    return (
      <GroceryList foods={foods} />
    );
  };
  