
import {useEffect,useState} from "react"
import "../Components/Cart/Cart.css"
import axios from "axios"
const MyLearning = () => {

const[data,setData]=useState([])

useEffect(()=>{
    axios.get("http://localhost:4001/api/getlearningdata")
    .then((res)=>setData(res.data))
    // console.log(data)
})

  return (

    <div>
    <h1>My learnings:{data.length}</h1>
    <hr></hr>
    <div className=" wrapping">
    {data.map((item, index) => {
      return (

        <div className="outer">
        <div className="wrapping-inner-parent img-parent" key={index} >
          <img src={item.image} alt="not found" className="images"></img>
          <h4 className="images-tile"> {item.imagetitle}</h4>
          <p>{item.field}</p>
          <p className="images-rating"><span>{item.Rating.slice(0, 3)}</span>{item.Rating.slice(3, 20)}</p>
          <div className="images-div-prices">
           <p>Watch Now</p>
            
          </div>
          {/* <button onClick={handleremove}>Delete</button> */}
        </div>
        
            </div>
      )
    })}
  </div>

</div>

   
  )
}

export default MyLearning