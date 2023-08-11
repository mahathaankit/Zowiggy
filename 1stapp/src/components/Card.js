// import React,{useEffect, useRef, useState}from 'react'
// import { useDispatchedCart, useCart } from './Context';
// export default function Cardd(props) {
//   let dispatches=useDispatchedCart();
//   let data=useCart();
//     let options=props.options;
//     let Price=Object.keys(options);
//     const priceref=useRef();
//     const [qty, setqty] = useState(1)
//     const [amount, setamount] = useState("")
   
//     const cart=async()=>{
//         await dispatches({type:"ADD",id:props.fooditem._id,name:props.fooditem.name,price:finalprize,qty:qty,amount:amount})
//         console.log(data);
//     }
//     let finalprize=qty*parseInt(options[amount]);
//     useEffect(()=>{
//         setamount(priceref.current.value)
//     })
//   return (
//     <div className="card mt-5" style={{"width":"18rem","maxHeight":"360px"}}>
//     <img src={props.fooditem.img} class="card-img-top" alt="..." style={{height:"120px",objectFit:"fill"}}/>
//     <div className="card-body">
//       <h5 className="card-title">{props.fooditem.name}</h5>
    
//       <div className="container w-100">
//             <select className="m-2 h-100 bg-warning"  onChange={(e)=>setqty(e.target.value)}>

//                 {Array.from(Array(10), (e, i) => {
//                     return (
//                         <option key={i + 1} value={i + 1}>{i + 1}</option>
//                     )
//                 })}

//             </select>
//             <select className="m-2 h-100  bg-warning rounded " ref={priceref} onChange={(e)=>setqty(e.target.value)} >
//               {Price.map((data)=>{
//                 return <option value={data} key={data}>{data}</option>
//               })}
//             </select>
//             <div className="d-inline h-100 fs-6">
//             ₹{finalprize}/-
//             </div>
//         </div>
//         <hr />
//         <button className={'btn btn-warning text-white justify-content-centre'} onClick={cart}>Add to Cart</button>
//     </div>
//   </div>
//   )
// }
// import React, { useEffect, useRef, useState } from 'react';
// import { useDispatchedCart, useCart } from './Contexts';
// import { useNavigate } from 'react-router-dom'

// export default function Cardd(props) {
//   const dispatches = useDispatchedCart();
//   let navigate = useNavigate()
//   const data = useCart();
//   const options = props.options;
//   const Price = Object.keys(options);
//   let fooditem=props.item;
//   const priceref = useRef();
//   const [qty, setqty] = useState(1);
//   const [amount, setamount] = useState('');
//   const handleClick = () => {
//     if (!localStorage.getItem("token")) {
//       navigate("/login")
//     }
//   }
//   const handleQty = (e) => {
//     setqty(e.target.value);
//   }
//   const handleOptions = (e) => {
//     setamount(e.target.value);
//   }

//   const cart = async () => {
//     let food = []
//     for (const item of data) {
//       if (item.id === fooditem._id) {
//         food = item;

//         break;
//       }
//     }
//     console.log(food)
//     console.log(new Date())
//     if (food !== []) {
//       if (food.amount === amount) {
//         await dispatches({ type: "UPDATE", id: fooditem._id, price:finalprize, qty: qty })
//         return
//       }
//       else if (food.amount !== amount) {
//       await dispatches({type:"ADD",id:props.fooditem._id,name:props.fooditem.name,price:finalprize,qty:qty,amount:amount})
//         console.log("amount different so simply ADD one more to the list")
//         return
//       }
//       return
//     }

//     await dispatches({
//       type: 'ADD',
//       id: props.fooditem._id,
//       name: props.fooditem.name,
//       price: finalprize,
//       qty: qty,
//       amount: amount
//     });
//     console.log(data);
//   };

//   const finalprize = qty * parseInt(options[amount]);

//   useEffect(() => {
//     setamount(priceref.current.value);
//   }, []);

//   return (
//     <div className="card mt-5" style={{ width: '18rem', maxHeight: '360px' }}>
//       <img src={props.fooditem.img} className="card-img-top" alt="..." style={{ height: '120px', objectFit: 'fill' }} />
//       <div className="card-body">
//         <h5 className="card-title">{props.fooditem.name}</h5>
//         <div className="container w-100">
//           <select className="m-2 h-100 bg-warning" onChange={handleQty} onClick={handleClick} >
//             {Array.from(Array(10), (e, i) => {
//               return (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               );
//             })}
//           </select>
//           <select className="m-2 h-100 bg-warning rounded" ref={priceref}onClick={handleClick} onChange={handleOptions}>
//             {Price.map((data) => {
//               return (
//                 <option value={data} key={data}>
//                   {data}
//                 </option>
//               );
//             })}
//           </select>
//           <div className="d-inline h-100 fs-6">₹{finalprize}/-</div>
//         </div>
//         <hr />
//         <button className="btn btn-warning text-white justify-content-center" onClick={cart}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatchCart, useCart } from './ContextReducer'
// import { Dropdown, DropdownButton } from 'react-bootstrap';
export default function Card(props) {
  let data = useCart();

  let navigate = useNavigate()
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  const priceRef = useRef();
  // const [btnEnable, setBtnEnable] = useState(false);
  // let totval = 0
  // let price = Object.values(options).map((value) => {
  //   return parseInt(value, 10);
  // });
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.item;
  const dispatch = useDispatchCart();
  const handleClick = () => {
    if (!localStorage.getItem("token")) {
      navigate("/login")
    }
  }
  const handleQty = (e) => {
    setQty(e.target.value);
  }
  const handleOptions = (e) => {
    setSize(e.target.value);
  }
  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })


    // setBtnEnable(true)

  }

  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  // useEffect(()=>{
  // checkBtn();
  //   },[data])

  let finalPrice = qty * parseInt(options[size]);   //This is where Price is changing
  // totval += finalPrice;
  // console.log(totval)
  return (
    <div>

      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <img src={props.ImgSrc} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          {/* <p className="card-text">This is some random text. This is description.</p> */}
          <div className='container w-100 p-0' style={{ height: "38px" }}>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} onClick={handleClick} onChange={handleQty}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} ref={priceRef} onClick={handleClick} onChange={handleOptions}>
              {priceOptions.map((i) => {
                return <option key={i} value={i}>{i}</option>
              })}
            </select>
            <div className=' d-inline ms-2 h-100 w-20 fs-5' >
              ₹{finalPrice}/-
            </div>
          </div>
          <hr></hr>
          <button className={`btn btn-success justify-center ms-2 `} onClick={handleAddToCart}>Add to Cart</button>
          {/* <button className={`btn btn-danger justify-center ms-2 ${btnEnable ? "" : "disabled"}`} onClick={handleRemoveCart}>Remove</button> */}
        </div>
      </div>
    </div>
  )
}
//