import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from "axios"
import "../Components/Cart/Cart.css"
const SearchProduct = () => {
const data=useLocation().state
const[data2,setData2]=useState()

const handleCart=async(item)=>{
  const existdata=data2.find((items)=>items.id===item.id)
  console.log(data2)
   console.log(existdata)
   if(existdata){
     alert("data exist");
   }
   else{
     await axios.post("https://udemy-backend-tzzj.onrender.com/api/addToCart",item)
    
   }
   axios.get("https://udemy-backend-tzzj.onrender.com/api/getcartdata")
   .then((res)=>{
  setData2(res.data)})
 
 }
  return (
    <div>
    <h1>Search results:{data.length}</h1>
    <hr></hr>
    <div className=" wrapping">
    {data.map((item, index) => {
      return (

        <div className="outer">
        <div className="wrapping-inner-parent img-parent" key={index} >
          <img src={item.image} alt="not found" className="images"></img>
          <h4 className="images-tile"> {item.imagetitle}</h4>
          <p>{item.field}</p>
          {/* <p className="images-rating"><span>{item.Rating.slice(0, 3)}</span>{item.Rating.slice(3, 20)}</p> */}
          <div className="images-div-prices">
           <p>Watch Now</p>
            
          </div>
          {/* <button onClick={handleremove}>Delete</button> */}
        </div>
        <div className="addtocart-btn"><button className="addtocart" onClick={()=>handleCart(item)}>Add to cart</button></div>
            </div>
            
      )
    })}
  </div>

</div>

  )
}

export default SearchProduct