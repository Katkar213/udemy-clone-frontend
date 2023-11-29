import React,{useState,useEffect} from 'react'
import CommonUi from './CommonUi'
import axios from "axios"

const Development = () => {
  const [data,setData]=useState([])
  const[newdata,setNewData]=useState([])
  const[smallnav,setSmallNav]=useState([])
  const[instructor,setInstructor]=useState([])
  const[populartopics,setPopularTopics]=useState([])
  const[developmentratings,setDevelopmentRatings]=useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4001/api/alldata');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  },[]);
  // console.log(data)



  useEffect(() => {
    const filteredData = data.filter((item) => item.category === 'Development-title');
    setNewData(filteredData);
  }, [data]);

  useEffect(() => {
    const filteredData = data.filter((item) => item.category === 'Development');
    setSmallNav(filteredData);
  }, [data]);

  useEffect(() => {
    const filteredData = data.filter((item) => item.category === 'Development-instructors');
    setInstructor(filteredData);
  }, [data]);

  useEffect(() => {
    const filteredData = data.filter((item) => item.category === 'Development-popular-topics');
    setPopularTopics(filteredData);
  }, [data]);

  useEffect(() => {
    const filteredData = data.filter((item) => item.category === 'Development-ratings');
    setDevelopmentRatings(filteredData);
  }, [data]);

  const Obj={
    instructor:instructor,
    popularTopics:populartopics,
    developmentratings:developmentratings
  }

  return (
    <>     
         <CommonUi value={newdata} value2={smallnav} value3={Obj}/> 
     
   </>
  )
}

export default Development