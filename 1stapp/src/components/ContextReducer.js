// import React, { createContext, useContext, useReducer } from 'react'
// const dispatchedcontext=createContext();
// const cartcontext=createContext();


// const reducer=(state,action)=>{
//     switch(action.type){
//         case"ADD":{
//             return[...state,{id:action.id,name:action.name,img:action.img,qty:action.qty,amount:action.amount,price:action.price}]

            

           
//         }
//     }

// }

// export const cartprovider=({children})=> {
//     const[state,dispatch]=useReducer(reducer,[]);
//   return (
//     <dispatchedcontext.Provider value={dispatch}>
//         <cartcontext.Provider value={state}>
//             {children}
//         </cartcontext.Provider>
//     </dispatchedcontext.Provider>
//   )
// }
// export const usecart = () => useContext(cartcontext);
// export const dispatchedcart = () => useContext(dispatchedcontext);
// export const usedcart=()=>{
//     useContext(cartcontext);
// }
// export const dispatchedcart=()=>{
//     useContext(dispatchedcontext);
// export default dispatchedcart;
// }
// import React, { createContext, useContext, useReducer } from 'react';

// const dispatchedContext = createContext();
// const cartContext = createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD': {
//       return [
//         ...state,
//         {
//           id: action.id,
//           name: action.name,
//           img: action.img,
//           qty: action.qty,
//           amount: action.amount,
//           price: action.price
//         }
//       ];
//     }
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, []);

//   return (
//     <dispatchedContext.Provider value={dispatch}>
//       <cartContext.Provider value={state}>{children}</cartContext.Provider>
//     </dispatchedContext.Provider>
//   );
// };

// export const useCart = () => useContext(cartContext);
// export const dispatchedCart = () => useContext(dispatchedContext);
// import React, { createContext, useContext, useReducer } from 'react';

// const DispatchedContext = createContext();
// const CartContext = createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       return [...state, {
//         id: action.id,
//         name: action.name,
//         img: action.img,
//         qty: action.qty,
//         amount: action.amount,
//         price: action.price
//       }];
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, []);

//   return (
//     <DispatchedContext.Provider value={dispatch}>
//       <CartContext.Provider value={state}>
//         {children}
//       </CartContext.Provider>
//     </DispatchedContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
// export const useDispatchedCart = () => useContext(DispatchedContext);

// import React,{createContext,useContext,useReducer} from 'react'


// const DispatchedContext = createContext();
// const CartContext = createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       return [...state, {
//         id: action.id,
//         name: action.name,
//         img: action.img,
//         qty: action.qty,
//         amount: action.amount,
//         price: action.price
//       }];
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, []);

//   return (
//     <DispatchedContext.Provider value={dispatch}>
//       <CartContext.Provider value={state}>
//         {children}
//       </CartContext.Provider>
//     </DispatchedContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
// import React, { createContext, useContext, useReducer } from 'react';

// const DispatchedContext = createContext();
// const CartContext = createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD':
//       return [
//         ...state,
//         {
//           id: action.id,
//           name: action.name,
//           img: action.img,
//           qty: action.qty,
//           amount: action.amount,
//           price: action.price
//         }
//       ]
//       case "REMOVE":
//         let newArr = [...state]
//         newArr.splice(action.index, 1)
//         return newArr;
//         case "DROP":
//           let empArray = []
//           return empArray
//       case "UPDATE":
//           let arr = [...state]
//           arr.find((food, index) => {
//             if (food.id === action.id) {
//                 console.log(food.qty, parseInt(action.qty), action.price + food.price)
//                 arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
//             }
//             return arr
//         })
//         return arr
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, []);

//   return (
//     <DispatchedContext.Provider value={dispatch}>
//       <CartContext.Provider value={state}>{children}</CartContext.Provider>
//     </DispatchedContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
// export const useDispatchedCart = () => useContext(DispatchedContext);

// export const useDispatchedCart = () => useContext(DispatchedContext);
import React, { useReducer, useContext, createContext } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img }]
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;
        case "DROP":
            let empArray = []
            return empArray
        case "UPDATE":
            let arr = [...state]
            arr.find((food, index) => {
                if (food.id === action.id) {
                    console.log(food.qty, parseInt(action.qty), action.price + food.price)
                    arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                }
                return arr
            })
            return arr
        default:
            console.log("Error in Reducer");
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);