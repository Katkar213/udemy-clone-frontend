// import React, { useState, useEffect } from "react";
// import {
//     MDBBtn,
//     MDBCard,
//     MDBCardBody,
//     MDBCardImage,
//     MDBCol,
//     MDBContainer,
//     MDBIcon,
//     MDBInput,
//     MDBRow,
//     MDBTypography,
// } from "mdb-react-ui-kit";
// import "./Cart.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// export default function CartCheckout() {
//     const nav = useNavigate();
//     const [cartItems, setCartItems] = useState([]);
//     const [total, setTotal] = useState(0);
//     const userId = localStorage.getItem("userId");
//     //   console.log(userId);
//     useEffect(() => {
//         axios
//             .post("http://localhost:4005/cart/fetchCartByUser", { userId })
//             .then((res) => setCartItems(res.data))
//             .catch((err) => console.log(err));
//     }, []);

//     useEffect(() => {
//         let value = 0;
//         cartItems.map((d) => {
//             value += d.item.price;
//         });
//         setTotal(value);
//     }, [cartItems]);

//     const learn = cartItems.map((item) => item.item)
//     //Payment integration.....
//     console.log(learn)

//     const makePayment = async () => {

//         const stripe = await loadStripe(
//             "pk_test_51OF9HNSGSBjFGMDab3N5Rml5kzgrwMw9RYhJv6PXHz4cpymdUE1nikzSzy43a7v5y3vjMxcARZP3Sr58Rf3avGdM00mJ2RkzIR"
//         );
//         const body = {
//             AllData: cartItems,
//             Total: total,
//         };
//         const headers = {
//             "Content-Type": "application/json",
//         };
//         const response = await fetch(
//             "http://localhost:4005/out/create-checkout-session",
//             {
//                 method: "POST",
//                 headers: headers,
//                 body: JSON.stringify(body),
//             }
//         );
//         const session = await response.json();
//         const result = stripe.redirectToCheckout({
//             sessionId: session.id,
//         });
//         if (result.error) {
//             console.log(result.error);
//         }
//     };
//     //   useEffect(()=>{
//     //     axios.post("http://localhost:4005/api/postlearn",learn)
//     //    .then((res)=>console.log("Successfully"))
//     //     .catch((err)=>console.log(err))
//     // },[makePayment])

//     // useEffect(()=>{
//     //     axios.delete("http://localhost:4005/api/delete")
//     //     .then((res)=>console.log("Successfully"))
//     //     .catch((err)=>console.log(err))

//     // },[makePayment])
//     return (
//         <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
//             <MDBContainer className="h-100 py-5">
//                 <MDBRow className="justify-content-center align-items-center h-100">
//                     <MDBCol>
//                         <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
//                             <MDBCardBody className="text-black">
//                                 <MDBRow>
//                                     <MDBCol lg="7" className="px-5 py-4">
//                                         <MDBTypography
//                                             tag="h3"
//                                             className="mb-5 pt-2 text-center fw-bold text-uppercase"
//                                         >
//                                             Your products
//                                         </MDBTypography>

//                                         {cartItems.map((course) => (
//                                             <div className="d-flex align-items-center mb-5">
//                                                 <div className="flex-shrink-0">
//                                                     <MDBCardImage
//                                                         src={course.item.img}
//                                                         fluid
//                                                         style={{
//                                                             width: "23rem",
//                                                             height: "10rem",
//                                                             gap: "10px",
//                                                         }}
//                                                         alt="Generic placeholder image"
//                                                     />
//                                                 </div>

//                                                 <div className="flex-grow-1 ms-3">
//                                                     <a href="#!" className="float-end text-black">
//                                                         <MDBIcon fas icon="times" />
//                                                     </a>
//                                                     <MDBTypography tag="h5" className="text-primary">
//                                                         {course.item.title}
//                                                     </MDBTypography>
//                                                     <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
//                                                         {course.item.des}
//                                                     </MDBTypography>

//                                                     <div className="d-flex align-items-center">
//                                                         <p className="fw-bold mb-0 me-5 pe-3">
//                                                             {course.item.price}
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}

//                                         <hr
//                                             className="mb-4"
//                                             style={{
//                                                 height: "2px",
//                                                 backgroundColor: "#1266f1",
//                                                 opacity: 1,
//                                             }}
//                                         />

//                                         <div className="d-flex justify-content-between px-x">
//                                             <p className="fw-bold">Discount:</p>
//                                             <p className="fw-bold">95$</p>
//                                         </div>
//                                         <div
//                                             className="d-flex justify-content-between p-2 mb-2"
//                                             style={{ backgroundColor: "#e1f5fe" }}
//                                         >
//                                             <MDBTypography tag="h5" className="fw-bold mb-0">
//                                                 Total:
//                                             </MDBTypography>
//                                             <MDBTypography tag="h5" className="fw-bold mb-0">
//                                                 {total}
//                                             </MDBTypography>
//                                         </div>
//                                     </MDBCol>
//                                     <MDBCol lg="5" className="px-5 py-4">
//                                         <MDBTypography
//                                             tag="h5"
//                                             className="fw-bold mb-5"
//                                             style={{ position: "absolute", bottom: "0" }}
//                                         >
//                                             <div onClick={() => nav(-1)}>
//                                                 <MDBBtn block size="lg" onClick={makePayment}>
//                                                     Buy now
//                                                 </MDBBtn>
//                                                 <MDBIcon fas icon="angle-left me-2" />
//                                                 Back to shopping
//                                             </div>
//                                         </MDBTypography>
//                                     </MDBCol>
//                                 </MDBRow>
//                             </MDBCardBody>
//                         </MDBCard>
//                     </MDBCol>
//                 </MDBRow>
//             </MDBContainer>
//         </section>
//     );
// }


import React, { useState, useEffect } from "react";
import axios from "axios"
import "./Cart.css"
import {loadStripe} from "@stripe/stripe-js"
import { useDispatch } from 'react-redux';
import { Decrement } from "../Redux/Action";

const Cart = () => {
const dispatch=useDispatch();
const[data,setData]=useState([])

useEffect(()=>{
 axios.get("https://udemy-backend-tzzj.onrender.com/api/getcartdata")
 .then((res)=>{
setData(res.data)
// console.log(data)
 })
},[])


const handleremove=async(itemId)=>{
  
  
  
 
await axios.post("https://udemy-backend-tzzj.onrender.com/api/removeitem",({id:itemId}))
.then((res)=>console.log(res.data))

await axios.get("https://udemy-backend-tzzj.onrender.com/api/getcartdata").then((res)=>{
    setData(res.data)
   dispatch((Decrement()))
})
}
// const [sum, setSum] = useState();
//   useEffect(() => {
//     let value = 0;
//     data.map((item) => (value += item. latestprice));
//     setSum(value);
//   }, [data]);

// payment...


// const stripePayment = async()=>{
   
//   const stripe =await loadStripe("pk_test_51OFIp6SASTZsWUYjTKRxcD4xTAidUAj7os1f9uqt5pfPPcWFOaV5pmYsZVUUbpkehNtOXKX8vwRwVLdmUZfTWMfM00o8bJqo5J")

// const body ={
//   Cartitem:data,
//   Total:sum
// }
// const headers={
//   "Content-Type":"application/json"
// }
// const response = await fetch("http://localhost:4001/out/create-checkout-session",{
//         method:"POST",
//         headers:headers,
//         body:JSON.stringify(body)
// })
// await axios.post("http:localhost:4001/pushlearningdata",data)

// await axios.delete("http:localhost:4001/deletedata")
// const session= await response.json();

// const result =stripe.redirectToCheckout({
//   sessionId:session.id
// })
// if(result.error){
//   console.log(result.error)
// }
// }


const makePayment=async ()=>{
  
  const stripe =await loadStripe("pk_test_51OFIp6SASTZsWUYjTKRxcD4xTAidUAj7os1f9uqt5pfPPcWFOaV5pmYsZVUUbpkehNtOXKX8vwRwVLdmUZfTWMfM00o8bJqo5J")

  const body ={
    products:data
  }
  console.log(body)
  const headers={
    "Content-Type":"application/json"
  }
  const response = await fetch("https://udemy-backend-tzzj.onrender.com/checkout",{
          method:"POST",
          headers:headers,
          body:JSON.stringify(body)
  })
  await axios.post("https://udemy-backend-tzzj.onrender.com/api/pushlearningdata",data)

  await axios.delete("https://udemy-backend-tzzj.onrender.com/api/deletedata")
  const session= await response.json();

  const result =stripe.redirectToCheckout({
    sessionId:session.id
  })
  if(result.error){
    console.log(result.error)
  
 }
}

  return (
    <div>
        <h1>Cart</h1>
        <hr></hr>
        <div className=" wrapping">
        {data.map((item, index) => {
          return (

            <div className="outer" key={index}>
            <div className="wrapping-inner-parent" key={index} >
              <img src={item.image} alt="not found" className="images"></img>
              <h4 className="images-tile"> {item.imagetitle}</h4>
              <p>{item.field}</p>
              <p className="images-rating"><span>{item.Rating.slice(0, 3)}</span>{item.Rating.slice(3, 20)}</p>
              <div className="cart-images-div-prices">
                <p>{item.latestprice}</p><span className="commonui-dashed-price">{item.oldprice}</span>
                
              </div>
              {/* <button onClick={handleremove}>Delete</button> */}
            </div>
            <button onClick={()=>handleremove(item.id)} className="remove-btn">Remove</button>
                </div>
          )
        })}
      </div>
<hr></hr>
<button onClick={makePayment} className="buy-courses-button">Buy Courses</button>



    </div>
  )
}

export default Cart