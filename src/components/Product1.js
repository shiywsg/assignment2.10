import { useReducer, useState } from 'react';
//after creating the reducer file, we call the useReducer hook from react
//and the productReducer and defaultProduct from the reducer file
import styles from './Product.module.css'
import Card from './Card';
import ViewList from './ViewList';

import { productReducer, defaultProduct } from '../reducer/ProductReducer';

function Product() {
  //remove all the states that are related to defaultproduct
  //const [count, setCount] = useState(1);
  //const [discount, setDiscount] = useState(0);
  //const [name, setName] = useState('Banana');
  //const [price, setPrice] = useState(2.99);

  //use the useReducer hook to replace the state.
  //the const looks similar to state variable
  const [state, dispatch] = useReducer(productReducer, defaultProduct);

  const [list, setList] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);
  
  //remove all the logic of the handler functions and replace it with a dispatch
  const handlerPlus = () => {
    dispatch({type: "PLUS_COUNT"});
  };

  const handlerMinus = () => {
    dispatch({type: "MINUS_COUNT"});
  };

  const handlerChangeName = (value) => {
    dispatch({type: "SET_NAME", name: value});
  };

  const handlerChangePrice = (value) => {
    dispatch({type: "SET_PRICE", price: value});;
  };

  //replace all the former reference of the states to use of the state varible
  //name -> state.name

  const handlerAddProduct = () => {
    console.log('handlerAddProduct: name, price: ', state.name, state.price);
    
    // Create new list item
    const newItem = {
      name: state.name,
      quantity: state.count,
      price: state.price,
      discount: state.discount,
      total: state.count * state.price * (100-state.discount)/100,
   } 
   
   // Copy previous list and append new item to its end
   const newList = [...list, newItem];
   console.log('  newList:', newList);
   setList(newList);

   // Add the item total to the running listTotal
   const sum = sumTotal + newItem.total;
   console.log('  sumTotal:', sumTotal);
   setSumTotal(sum);
  }

  return (
    <div className={styles.container}>
      <Card
        name={state.name}
        count={state.count}
        price={state.price}
        discount={state.discount}
        handlerMinus={handlerMinus}
        handlerPlus={handlerPlus}
        handlerChangeName={handlerChangeName}
        handlerChangePrice={handlerChangePrice}
        handlerAddProduct={handlerAddProduct}
      />
      <ViewList list={list} sum={sumTotal} />
    </div>
  );
}
export default Product;
