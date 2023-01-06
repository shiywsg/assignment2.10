import { useState, useContext } from 'react';
//after creating the reducer file, we call the useReducer hook from react
//and the productReducer and defaultProduct from the reducer file
import styles from './Product.module.css'
import Card from './Card';
import ViewList from './ViewList';

//to use the context, need to import the ProductContext and useContext
import ProductContext from '../context/ProductContext';

function Product() {

  //create a constant
  const ctx = useContext(ProductContext);
  //ctx contains the values we have from the context object
  const [list, setList] = useState([]);
  const [sumTotal, setSumTotal] = useState(0);
  const [saveTotal, setSaveTotal] = useState(0);
    
  const handlerAddProduct = () => {
    console.log('handlerAddProduct: name, price: ', ctx.name, ctx.price);
    
    // Create new list item,replace state by ctx
    const newItem = {
      name: ctx.name,
      quantity: ctx.count,
      price: ctx.price,
      discount: ctx.discount,
      total: ctx.count * ctx.price * (100-ctx.discount)/100,
      yousave: ctx.count * ctx.price * ctx.discount / 100,
   } 
   
   // Copy previous list and append new item to its end
   const newList = [...list, newItem];
   console.log('  newList:', newList);
   setList(newList);

   // Add the item total to the running listTotal
   const saved = saveTotal + newItem.yousave;
   console.log('  Total save:', saveTotal);
   setSaveTotal(saved);

   const sum = sumTotal + newItem.total;
   console.log('  sumTotal:', sumTotal);
   setSumTotal(sum);
  }

  return (
    <div className={styles.container}>
      <Card handlerAddProduct={handlerAddProduct}/>  
 
      <ViewList list={list} sum={sumTotal} saved={saveTotal}/>
    </div>
  );
}
export default Product;
