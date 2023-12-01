import React, { useState, useEffect } from 'react'
import axios from "axios"
import "../Web-css/CommonUi.css"
import { IoFilterOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { FaRegSquare } from "react-icons/fa";
import { NavLink, useParams, useLocation } from "react-router-dom"




const Popularinstutor = [
  {
    image: "https://img-c.udemycdn.com/user/75x75/4897424_a25c_11.jpg",
    name: "TIA Education, Andrew Ramdayal",
    field: "PMI Project Management Professional (PMP), PMI PMBOK",
    rating: "4.7⭐Instructor Rating",
    students: "310,635",
    courses: "18 courses",
    category: "Business"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/75004102_f8b0_2.jpg",
    name: "Maven Analytics",
    field: "Business Intelligence, Microsoft Power BI",
    rating: "4.7⭐Instructor Rating",
    students: "1,121,614",
    courses: "38courses",
    category: "Business"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/8280056_7887_3.jpg",
    name: "365 Careers",
    field: "Data Analysis, Agile",
    rating: "4.7⭐Instructor Rating",
    students: "2,623,082",
    courses: "106 courses",
    category: "Business"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/8912846_1a61.jpg",
    name: "Joseph Phillips",
    field: "PMI PMBOK, PMI Project Management Professional (PMP)",
    rating: "4.7⭐Instructor Rating",
    students: "766,529",
    courses: "38courses",
    category: "Business"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/8280056_7887_3.jpg",
    name: "365 Careers",
    field: "Data Analysis, Agile",
    rating: "4.7⭐Instructor Rating",
    students: "2,623,082",
    courses: "108courses",
    category: "Finance & Accounting"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/33900490_19da_2.jpg",
    name: "Mohsen Hassan",
    field: "Stock Trading, Financial Trading",
    rating: "4.6⭐Instructor Rating",
    students: "373,818",
    courses: "11courses",
    category: "Finance & Accounting"
  },
  {
    image: "ttps://img-c.udemycdn.com/user/75x75/10634862_fb77.jpg",
    name: "Steve Ballinger, MBA",
    field: "Stock Trading, Investing",
    rating: 4.5,
    students: "605,848",
    courses: "68courses",
    category: "Finance & Accounting"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/14942868_3ed6_38.jpg",
    name: "Chris Haroun | 1.4 Million Students",
    field: "Investing, Finance Fundamentals",
    rating: "4.6⭐Instructor Rating",
    students: "1,406,078",
    courses: "76courses",
    category: "Finance & Accounting"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/16122994_284f_18.jpg",
    name: "Stephane Maarek | AWS Certified Cloud Practitioner",
    field: "Amazon AWS, AWS Certified Cloud Practitioner",
    rating: "4.7⭐Instructor Rating",
    students: "2,276,158",
    courses: "64courses",
    category: "IT & Software"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/27592028_e3fb_6.jpg",
    name: "Jason Dion • 1 Million+ Enrollments Worldwide",
    field: "CompTIA Security+, CompTIA A+",
    rating: "4.6⭐Instructor Rating",
    students: "938,858",
    courses: "60courses",
    category: "IT & Software"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/31303958_8529_3.jpg",
    name: "Mumshad Mannambeth",
    field: "Kubernetes, Certified Kubernetes Administrator (CKA)",
    rating: "4.6⭐Instructor Rating",
    students: "929,236",
    courses: "18 courses",
    category: "IT & Software"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/58935_f800_5.jpg",
    name: "Scott Duffy  • 1.000.000+ Students",
    field: "Microsoft Azure, AZ-900: Microsoft Azure Fundamentals",
    rating: "4.6⭐Instructor Rating",
    students: "1,055,033",
    courses: "60 courses",
    category: "IT & Software"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/11614232_b0fc.jpg",
    name: "Daniel Walter Scott",
    field: "User Experience Design, Figma",
    rating: "4.7⭐Instructor Rating",
    students: "696,429",
    courses: "34 courses",
    category: "Design"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/16146540_ef4c_15.jpg",
    name: "Lindsay Marsh",
    field: "Graphic Design, Adobe Illustrator",
    rating: "4.6⭐Instructor Rating",
    students: "367,114",
    courses: 13,
    category: "Design"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/38516954_b11c_3.jpg",
    name: "Andrei Neagoie",
    field: "User Experience Design, Mobile App Design",
    rating: "4.6⭐Instructor Rating",
    students: "1,123,305",
    courses: 25,
    category: "Design"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/33027212_4271_10.jpg",
    name: "GameDev.tv Team",
    field: "Blender, Game Development Fundamentals",
    rating: "4.7⭐Instructor Rating",
    students: "1,090,600",
    courses: "52courses",
    category: "Design"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/36921905_7a32_6.jpg",
    name: "Robin & Jesper",
    field: "Digital Marketing, Social Media Marketing",
    rating: "4.6⭐Instructor Rating",
    students: "320,368",
    courses: "24courses",
    category: "Marketing"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/37939456_be61_5.jpg",
    name: "Joshua George",
    field: "Search Engine Optimization (SEO), Link Building",
    rating: "4.7⭐Instructor Rating",
    students: "137,081",
    courses: "22courses",
    category: "Marketing"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/4116740_b790_2.jpg",
    name: "Alex Genadinik",
    field: "Search Engine Optimization (SEO), SEO Audit",
    rating: 4.5,
    students: "759,588",
    courses: "197courses",
    category: "Marketing"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/10508972_337e_4.jpg",
    name: "COURSE ENVY",
    field: "Marketing Strategy, Facebook Marketing",
    rating: 4.4,
    students: "522,970",
    courses: "29courses",
    category: "Marketing"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/34229724_ec2e_3.jpg",
    name: "Graham Nicholls",
    field: "Neuro-Linguistic Programming, EFT (Emotional Freedom Techniques)",
    rating: "4.7⭐Instructor Rating",
    students: "136,812",
    courses: "37courses",
    category: "Life Style"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/27988174_e5c2.jpg",
    name: "Brent Eviston",
    field: "Drawing, Sketching",
    rating: 4.8,
    students: "110,700",
    courses: "12courses",
    category: "Life Style"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/779778_4469_3.jpg",
    name: "Lisa Powers",
    field: "Reiki, Teacher Training",
    rating: 4.8,
    students: "226,687",
    courses: "5courses",
    category: "Life Style"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/23121946_3025_4.jpg",
    name: "Melissa Crowhurst",
    field: "Energy Healing, Spiritual Healing",
    rating: 4.8,
    students: "199,278",
    courses: "21courses",
    category: "Life Style"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/317821_3cb5_10.jpg",
    name: "Phil Ebiner",
    field: "Photography, Digital Photography",
    rating: "4.6⭐Instructor Rating",
    students: "2,862,770",
    courses: "222courses",
    category: "Photography & Video"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/15601054_5545_28.jpg",
    name: "Louay Zambarakji",
    field: "Video Editing, Color Grading",
    rating: "4.7⭐Instructor Rating",
    students: "420,091",
    courses: "18 courses",
    category: "Photography & Video"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/130091392_74a0_2.jpg",
    name: "Dan Britain",
    field: "Video Editing, ChatGPT",
    rating: 4.5,
    students: "165,755",
    courses: "10 courses",
    category: "Photography & Video"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/37232048_8e49.jpg",
    name: "Dale McManus",
    field: "Photography, Landscape Photography",
    rating: "4.6⭐Instructor Rating",
    students: "136,039",
    courses: "5courses",
    category: "Photography & Video"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/913001_767b_4.jpg",
    name: "Jason Allen",
    field: "Music Theory, Ableton Live",
    rating: "4.6⭐Instructor Rating",
    students: "283,539",
    courses: "117courses",
    category: "Music & Arts"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/23566298_e66f_4.jpg",
    name: "Tomas George",
    field: "Music Production, Music Mixing",
    rating: "4.6⭐Instructor Rating",
    students: "327,888",
    courses: "40courses",
    category: "Music & Arts"
  },
  {
    image: "ttps://img-c.udemycdn.com/user/75x75/5753906_1b3f_4.jpg",
    name: "Robin Hall",
    field: "Piano, Keyboard Instrument",
    rating: "4.7⭐Instructor Rating",
    students: "413,402",
    courses: "5courses",
    category: "Music & Arts"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/603974_a5c2_4.jpg",
    name: "Erich Andreas",
    field: "Guitar, Acoustic Guitar",
    rating: "4.7⭐Instructor Rating",
    students: "405,813",
    courses: "20courses",
    category: "Music & Arts"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/7240640_bf4c_2.jpg",
    name: "Mark Perren-Jones",
    field: "Massage, Sports Massage",
    rating: "4.7⭐Instructor Rating",
    students: "221,529",
    courses: "77courses",
    category: "Health & Fitness"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/21674826_0b4e_2.jpg",
    name: "Bodsphere - Health and Wellness",
    field: "Yoga, Pranayama",
    rating: 4.8,
    students: "28,840",
    courses: "9courses",
    category: "Health & Fitness"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/61192080_163c_4.jpg",
    name: "Michael Eric Everson",
    field: "Massage, Sports Massage",
    rating: "4.7⭐Instructor Rating",
    students: "20,556",
    courses: "28courses",
    category: "Health & Fitness"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/26801218_cefd_3.jpg",
    name: "Felix Harder",
    field: "Fitness, Nutrition",
    rating: "4.6⭐Instructor Rating",
    students: "212,337",
    courses: "37courses",
    category: "Health & Fitness"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/133884918_c87f.jpg",
    name: "Linguae Learning",
    field: "Spanish Language, French Language",
    rating: "4.6⭐Instructor Rating",
    students: "402,978",
    courses: "32courses",
    category: "Teaching & Academic"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/633228_a6b9_12.jpg",
    name: "Krista King",
    field: "Calculus, Probability",
    rating: "4.7⭐Instructor Rating",
    students: "241,048",
    courses: "20courses",
    category: "Teaching & Academic"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/403134_2c7a_5.jpg",
    name: "Keino Campbell, Esq.",
    field: "IELTS, TOEFL",
    rating: "4.6⭐Instructor Rating",
    students: "398,752",
    courses: "12courses",
    category: "Teaching & Academic"
  },
  {
    image: "https://img-c.udemycdn.com/user/75x75/16912784_49c6_3.jpg",
    name: "Sandra 11Percent",
    field: "German Language, Presentation Skills",
    rating: "4.7⭐Instructor Rating",
    students: "110,054",
    courses: "7courses",
    category: "Teaching & Academic"
  }
]

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