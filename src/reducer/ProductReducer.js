//Create a default state of Product
export const defaultProduct = {
    count: 1,
    discount: 0,
    name: "Banana",
    price: 2.99
}

//create productreducer function that whould take care of the state updates
export function productReducer(state, action){
    //needs the state and action to perform
    console.log("productReucer state and action", state, action);
    //switch case for eacth of the possible actions
    switch (action.type){
        case "PLUS_COUNT": {
            let newState = {...state}; //structure "pass by value"
            newState.count = state.count +1;
            if (newState.count >=5 ){
                newState.discount = 20;
            }
            return newState;    
        }
        //create minus count
        case "MINUS_COUNT": {
            let newState = {...state}; 
            if (state.count >=1 ) {
                newState.count = state.count -1;
            }
            if (newState.count <= 4 ){
                newState.discount = 0;
            }
            return newState;    
        }
        //SET_NAME need a value, so we also include the value in the action
        case "SET_NAME": {
            return {...state, name: action.name}
        }

        case "SET_PRICE": {
            return {...state, price: action.price}
        }

        default: {
            throw Error("productReducer: unknown action" + action.type);
        }
    }
}