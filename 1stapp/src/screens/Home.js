// import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import Cardd from '../components/Cardd'





// export default function Home() {
//   const [search, setsearch] = useState('');
//   const [foodcat, setfoodcat] = useState([]);
//   const [fooditem, setfooditem] = useState([]);
//   const loadata = async () => {
//     let response = await fetch("http://localhost:4000/api/fooddata", {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     response = await response.json();
//     setfooditem(response[0]);
//     setfoodcat(response[1]);
//     // console.log(response[0],response[1]);

//   }
  
//   useEffect(()=>{
//     loadata()
//   },[])

//   return (
//     <div>
//       <div><Navbar /></div>
//       <div><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
//   <div className="carousel-inner" id='ankit'>
//   <div className="carousel-caption d-none d-md-block" style={{zIndex:"5"}}>
//   <div className="d-flex justify-content-centre">
//       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
//       <button className="btn btn-outline-success text-dark bg-warning" type="submit">Search</button>
//     </div>
//     </div>
//     <div className="carousel-item active">
//       <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src="https://source.unsplash.com/random/900x700/?barbeque"className="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div></div>
//       <div className='container'>
//         {
//           foodcat !== []
//             ?
//             foodcat.map((data) => {
//               return (<div className='row mb-4'>
//                 <div key={data._id} className='fs-4 m-3'>{data.CategoryName}</div>
//                 <hr />
//                 {fooditem !== [] ? fooditem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map(filteritems => {
//                   return(
//                     <div key={filteritems._id} className='col-12 col-md-6 col-lg-3'>
//                      <Cardd fooditem={filteritems} options={filteritems.options[0]} />
//                       </div>
//                   )
//                  }):<div>No such data found</div>}

//               </div>
//               )

//             }) : <div>''''''''</div>

//         }

     



//       </div>
//       <div><Footer /></div>


//     </div>
//   )
// }
import React from 'react'
import Delete from '@material-ui/icons/Delete'
import { useCart, useDispatchCart } from '../components/ContextReducer';
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }
  // const handleRemove = (index)=>{
  //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    // console.log(data,localStorage.getItem("userEmail"),new Date())
    let response = await fetch("http://localhost:5000/api/auth/orderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    console.log("JSON RESPONSE:::::", response.status)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div>

      {console.log(data)}
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td ><button type="button" className="btn p-0"><Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>



    </div>
  )
}


