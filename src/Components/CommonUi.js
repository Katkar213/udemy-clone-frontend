import React, { useState, useEffect } from 'react'
import axios from "axios"
import "../Web-css/CommonUi.css"
import { IoFilterOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { FaRegSquare } from "react-icons/fa";
import { NavLink, useParams, useLocation } from "react-router-dom"

const PopularTopics = [
  {
    category: "Development",
    content: ["Python", "DataScience", "React Js", "Java", "C#(Programming language)", "Web Development", "JavaScript", "Unreal Engine", "Machine Learning", "Unity"],
  },
  {
    category: "Business",
    content: ["PMI Project Management Professional(PMP)", "Project Management", "Data Modeling", "Business Analysis", "Real Estate Investing", "Microsoft Power BI", "SQl", "PMI PMBOK", "Data Analysis", "Product Management"],
  },
  {
    category: "Finance & Accounting",
    content: ["Stock Trading", "Financial Analysis", "Accounting", "Investing", "Forex Trading", "Technical Analysis (finance)", "Cryptocurrency", "Financial Modeling", "Algorithmic Trading", "Options Trading"],
  },
  {
    category: "IT & Software",
    content: ["AWS Certified Cloud Practitioner", "Ethical Hackin", "CompTIA A+", "AWS Certified Solutions Architect - Associate", "Amazon AWS", "CompTIA Security+", "Linux", "Kubernetes", "ChatGPT", "Information Security"],
  },
  {
    category: "Design",
    content: ["Blender", "Graphic Design", "User Experience Design", "Adobe Photoshop", "3D Modeling", "Figma", "Adobe Illustrator", "Drawing", "AutoCAD", "Canva"],
  },
  {
    category: "Marketing",
    content: ["Digital Marketing", "Social Media Marketing", "Facebook Ads", "Marketing Strategy", "Search Engine Optimization (SEO)", "Google Ads (Adwords)", "Instagram Marketing", "Copywriting", "ChatGPT", "Facebook Marketing"],
  },
  {
    category: "Life Style",
    content: ["Reiki", "Energy Healing", "Chess", "Watercolor Painting", "Watercolor Painting", "Watercolor Painting", "Hypnotherapy", "Spiritual Healing", "Astrology", "Painting"],
  },
  {
    category: "Photography & Video",
    content: ["Photography", "Adobe Premiere", "DaVinci Resolve", "iPhone Photography", "Video Editing", "Video Production", "Adobe Lightroom", "Adobe After Effects", "Adobe Photoshop", "Filmmaking"],
  },
  {
    category: "Music & Arts",
    content: ["Guitar", "Music Production", "Singing", "Piano", "Music Theory", "Music Composition", "FL Studio", "DJ", "Logic Pro", "Songwriting"],
  },
  {
    category: "Health & Fitness",
    content: ["Yoga", "Nutrition", "CBT Cognitive Behavioral Therapy", "Meditation", "Massage", "Fitness", "Herbalism", "Qi Gong", "Pilates", "Holistic Medicine"],
  }
];


const CommonUi = () => {
  const params = useParams()
  // console.log(params)
  const location = useLocation();
  // console.log(location)
  const state = location.state.ratings;
  console.log(state)
  const [data, setData] = useState([])
  const [newdata, setNewData] = useState([])
  const [popularTopics2,setPopularTopics2] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://udemy-backend-tzzj.onrender.com/api/alldata');
        setData(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = data.filter((item) => item.category === params.category);
    // console.log(filteredData)
    setNewData(filteredData);

  }, [data,params.category]);
  useEffect(() => {
    const populartopicsData = PopularTopics.filter((item) => item.category === params.category)
    // const populartopicsData2 = populartopicsData.content
     setPopularTopics2(populartopicsData)
    // console.log(PopularTopics)
  }, [newdata,params.category]);

  console.log(params)
  return (
    <div className="parent">


      {/* titles...*/}


      <div className="titels-parent">


        <div className="titels">
          <h1>{params.category} Courses</h1>
          <h2>Courses to get you started</h2>
        </div>


      </div>


      {/* small navbar... */}
      <div className="small-navbar">
        <p className="underline-p">Most Popular</p>
        <p>New</p>
        <p>Trending</p>

      </div>
      <hr></hr>

      {/* first images div... */}
      <div className="images-div-parent">
        {newdata.slice(0, 5).map((item, index) => {
          return (

            <div className="images-div" key={index} >
              <img src={item.image} alt="not found" className="images-div-image"></img>
              <h4 className="images-div-title"> {item.imagetitle}</h4>
              <p>{item.field}</p>
              <p className="ratings"><span>{item.Rating.slice(0, 3)}</span>{item.Rating.slice(3, 20)}</p>
              <div className="images-div-prices">
                <p>{item.latestprice}</p><span className="commonui-dashed-price">{item.oldprice}</span>
              </div>
            </div>

          )
        })}
      </div>

      {/* popular topics... */}
      <div className="popular-instructor-heading"><h2>Popular Topics</h2></div>
      <div className="popular-topics-div-parent">
        {popularTopics2.map((item, index) => {
          // console.log(item.content)
          return (
            <div className="popular-topics-div" key={index}>
              <h3>{item.content[index]}</h3>
            </div>
          )

        })}
      </div>



      {/*popular Instructors...*/}
      {/* <div className="popular-instructor-heading"><h2>Popular Instructors</h2></div>
      <div className="instructor-parent">
        {props.value3.instructor.map((item, index) => {
          return (
            <div className="instructor-div-inner" key={index}>

              <div className="instructor-div-image">
                <img src={item.image} alt="not found" ></img>
              </div>
              <div className="instructor-div-text">
                <h4> {item.name}</h4>
                <p>{item.field}</p>
                <p className="spl-font"><span className="span1">{item.rating.slice(0, 3)}</span>{item.rating.slice(3, 21)}</p>
                <p className="spl-font"><span>{item.students.slice(0, 9)}</span>{item.students.slice(9, 17)}</p>
                <p className="spl-font"><span>{item.courses.slice(0, 2)}</span>{item.courses.slice(2, 10)}</p>
              </div>

            </div>
          )
        })}
      </div> */}

      {/* all courses min8*/}
      <div className="popular-instructor-heading all-development-courses-heading"><h2>All Development Courses</h2></div>
      <div className="development-courses-notification">
        <i className="fa-solid fa-circle-exclamation"></i>
        <h3>Not sure? All courses have a 30-day money-back guarantee</h3>
      </div>
      <div className="filter-results">
        <div className="filter-sortby">
          <div className="filter-div"><IoFilterOutline className="filter-symbol" />Filter</div>
          <div className="sort-results"><h5 className="spl-font">sort by  <IoIosArrowDown className="down-arrow" /> </h5>Most Popular</div>
        </div>
        <div className="results"><p>10,000 results</p></div>
      </div>

      {/* <hr></hr> */}
      <div className="bottom-div-parent">

        <div className="bottom-div-parent-left">
          <div className="bottom-div-left1">
            <div className="bottom-div-left-heading"><h2>Ratings  <IoIosArrowUp className="down-arrow" /></h2></div>
            <div>
              {state.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="bottom-left-div-ratings"> < FaRegCircle className="hollow-circle" />    {item.line}</p>
                  </div>
                )

              })}
            </div>
          </div>

          <div className="bottom-div-left1">
            <div className="bottom-div-left-heading"><h2>Video Duration  <IoIosArrowUp className="down-arrow" /></h2></div>
            <div>
              {state.map((item, index) => {
                return (
                  <div key={index}>
                    <p className="bottom-left-div-ratings"> <  FaRegSquare className="hollow-circle" />    {item.Duration}</p>
                  </div>
                )

              })}
            </div>
            <NavLink className="show-more">Show more   <IoIosArrowDown className="down-arrow" /></NavLink>
          </div>

          <div className="left-div-shortcut">
            <h3>Topic  <IoIosArrowDown className="down-arrow" /></h3>
          </div>
          <div className="left-div-shortcut">
            <h3>Subcategory <IoIosArrowDown className="down-arrow" /></h3>
          </div>
          <div className="left-div-shortcut">
            <h3>Level  <IoIosArrowDown className="down-arrow" /></h3>
          </div>
          <div className="left-div-shortcut">
            <h3>Language  <IoIosArrowDown className="down-arrow" /></h3>
          </div>
          <div className="left-div-shortcut">
            <h3>Price  <IoIosArrowDown className="down-arrow" /></h3>
          </div>
          <div className="left-div-shortcut">
            <h3>Features  <IoIosArrowDown className="down-arrow" /></h3>
          </div>
          <div className="left-div-shortcut">
            <h3>Subtitles <IoIosArrowDown className="down-arrow" /></h3>
          </div>



        </div>

        <div className="bottom-div-parent-right">
          {newdata.slice(5, 8).map((item, index) => {
            return (
              <>
                <div className="bottom-right-div">

                  <img src={item.image} alt="not found" className="bottom-right-div-images" />

                  <div className="bottom-right-div-text">
                    <div className="imagetitle-des-price">
                      <div>
                        <h4 className="images-div-title"> {item.imagetitle}</h4>
                        <p>{item.description}</p>
                      </div>
                      <div className="bottom-right-div-images-price">
                        <p>{item.latestprice}</p><span className="commonui-dashed-price">{item.oldprice}</span>
                      </div>
                    </div>
                    <p>{item.field}</p>
                    <p className="ratings"><span>{item.Rating.slice(0, 3)}</span>{item.Rating.slice(3, 20)}</p>
                  </div>
                </div>
                <hr></hr>
              </>
            )
          })}


          <div className="bottom-right-div-sponsors">
            <div className="bottom-right-div-sponsors-div1 div">
              <h3>Top companies trust Udemy</h3>
              <p>Get your team access to Udemy's top 25,000+ courses</p>
            </div>
            <div className="bottom-right-div-sponsors-div2 div">
              <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg" alt="not found"></img>
              <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg" alt="not found"></img>
              <img src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg" alt="not found"></img>
              <img src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg" alt="not found"></img>
              <img src="	https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg" alt="not found"></img>
            </div>
            <div className="bottom-right-div-sponsors-div3 div">
              <button className="try-udemy-business-btn">Try Udemy Business</button>
            </div>
          </div>

          {newdata.slice(8, 14).map((item, index) => {
            return (
              <>
                <div className="bottom-right-div">

                  <img src={item.image} alt="not found" className="bottom-right-div-images" />

                  <div className="bottom-right-div-text">
                    <div className="imagetitle-des-price">
                      <div>
                        <h4 className="images-div-title"> {item.imagetitle}</h4>
                        <p>{item.teacher}</p>
                        <p>{item.description}</p>
                      </div>
                      <div className="bottom-right-div-images-price">
                        <p>{item.latestprice}</p><span className="commonui-dashed-price">{item.oldprice}</span>
                      </div>
                    </div>
                    <p>{item.field}</p>
                    <p className="ratings"><span>{item.Rating.slice(0, 3)}</span>{item.Rating.slice(3, 20)}</p>
                  </div>
                </div>
                <hr></hr>
              </>
            )
          })}


        </div>



      </div>



















    </div>



  )
}

export default CommonUi