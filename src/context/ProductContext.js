//Note: in this example, we are going to migrage the reducer from the product and use context as well
//but context can be used as is without the need of reducers
import { createContext, useReducer } from "react";


import { defaultProduct, productReducer } from "../reducer/ProductReducer";

//create the context provider
const ProductContext = createContext();

export function ProductProvider({ children }) {
    //the productprovider has a prop for children meaning that it would be able to provide context to any child component

    //move the reducer function from the product to the productprovider
    const [state, dispatch] = useReducer(productReducer, defaultProduct);

    const handlerPlus = () => {
        dispatch({ type: "PLUS_COUNT" });
    }

    const handlerMinus = () => {
        dispatch({ type: "MINUS_COUNT" });
    }

    const handlerChangeName = (value) => {
        if (value.length > 100) {
            window.alert("Name no more than 100 characters")
        }
        else {
            dispatch({ type: "SET_NAME", name: value });
        };
    }

    const handlerChangePrice = (value) => {
        const i = value
        if (isNaN(i)) {
            window.alert("You must input a number!")
        }
        else if (i < 0) {
            window.alert("Price should always be a positive value!")
        }
        else if (Math.abs((Math.ceil(100 * i) - Math.floor(100 * i)) > 0.000001)) {  //check if 2 dp
            window.alert("Price should only have 2 decimal places!")
        }
        else {
            dispatch({ type: "SET_PRICE", price: value });
        };
    }

    //create a context that all components can use
    //context can also contain function, you can call them directly
    const context = {
        count: state.count,
        discount: state.discount,
        name: state.name,
        price: state.price,
        handlerPlus: handlerPlus,
        handlerMinus: handlerMinus,
        handlerChangeName: handlerChangeName,
        handlerChangePrice: handlerChangePrice
    }

    //create the context provider component
    return (
        <ProductContext.Provider value={context}>
            {children}
        </ProductContext.Provider>
    )

}

export default ProductContext;