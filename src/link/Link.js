
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from '../Components/Home';
import Development from '../Components/Development';
import WebDevelopment from '../Components/WebDevelopment';
import CommonUi from '../Components/CommonUi';
import LogIn from '../Components/UserAuthentication/Login';
import Register from '../Components/UserAuthentication/Register';
import '../App.css'; // Import your CSS file

const Link = () => {


  const categories = [
    'Development',
    'Business',
    'Finance and Accounting',
    'IT and Software',
    'Design',
    'Marketing',
    'Life Style',
    'Photography & Video',
    'Music & Arts',
  ];

  const subcategories = [
    {
      cat: 'Development',
      subcat1: ['web development', 'Data Science', 'Mobile Development'],
    },
    {
      cat: 'Business',
      subcat1: ['web development', 'Data Science', 'Mobile Development'],
    },
    {
      cat: 'Finance and Accounting',
      subcat1: ['Accounting and Bookkeeping'],
    },
    {
      cat: 'IT and Software',
      subcat1: ['It Certification', 'Network & Security', 'Hardware', 'Operating system &Servers', 'Other IT & Software'],
    },
    {
      cat: 'Design',
      subcat1: ['web Design', 'Game Design', '3D & Animation', 'Fashion Design', 'Other Design'],
    },
    {
      cat: 'Marketing',
      subcat1: ['Digital Marketing', 'Social Media Marketing', 'Public Relationship', 'Content Marketing', 'Product Marketing'],
    },
    {
      cat: 'Life Style',
      subcat1: ['Arts & Crafts', 'Beauty & Makeup', 'Food & Beverage', 'Pet Care & Training', 'Travel'],
    },
    {
      cat: 'Photography & Video',
      subcat1: ['Digital Photography', 'Photography', 'Video Design', 'Commercial Photography', 'Photography Tools'],
    },
    {
      cat: 'Music & Arts',
      subcat1: ['Instruments', 'Music Production', 'Vocal', 'Music Software', 'Music Techniques'],
    },
  ];

  const staticPopularTopics=[
    {
          id: "22",
          category: "Development-popular-topics",
            topic:"Python"
      },
      {
          id: "23",
          category: "Development-popular-topics",
            topic:"DataScience"
      },
      {
          id: "24",
          category: "Development-popular-topics",
            topic:"React Js"
      },
      {
          id: "25",
          category: "Development-popular-topics",
            topic:"Java"
      },
      {
          id: "26",
          category: "Development-popular-topics",
            topic:"C#(Programming language)"
      },
      {
          id: "27",
          category: "Development-popular-topics",
            topic:"Web Development"
      },
      {
          id: "28",
          category: "Development-popular-topics",
            topic:"JavaScript"
      },
      {
          id: "29",
          category: "Development-popular-topics",
            topic:"Unreal Engine"
      },
      {
          id: "30",
          category: "Development-popular-topics",
            topic:"Machine Learning"
      },
      {
          id: "31",
          category: "Development-popular-topics",
            topic:"Unity"
      },
  ]

  const staticRatings=[
    {
      id:"32",
      category: "Development",
      line:"⭐⭐⭐⭐⭐ 4.5 & up (10,000)",
      Duration:"0-1 Hours(2,515)"
  },
  {
      id:"33",
      category: "Development",
      line:"⭐⭐⭐⭐⭐ 4.0 & up (10,000)",
      Duration:"1-3 Hours(9,123)"
  },
  {
      id:"34",
      category: "Development",
      line:"⭐⭐⭐⭐⭐ 3.5 & up (10,000)",
      Duration:"3-6 Hours(7,909)"
  },
  {
      id:"35",
      category: "Development",
      line:"⭐⭐⭐⭐⭐ 3.0 & up (10,000)",
      Duration:"6-17 Hours(9,123)"
  },
  ]


  const Obj={
    // instructors: staticInstructors,
    popularTopics:staticPopularTopics,
    ratings:staticRatings
  }
  return (
    <div>
      <BrowserRouter>
        <div className="Navbar">
          <NavLink to="/">
            <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="not found" className="Udemyimage" />
          </NavLink>

          <div className="categories-Parent">
            <NavLink to="/categories" className="navlinknames categories">
              Categories
            </NavLink>

            <div className="categories-outer">
              <div className="categories1">
                {categories.map((item, index) => (
                  <>
                  <div key={item} className="category-container">
                    <NavLink className="subcategories1" to={`/commonui/${item}`} state={{ratings:staticRatings}}>
                      {item} <span className="logo-arrow"></span>
                    </NavLink>

                    <ul className="submenu2">
                      {subcategories[index].subcat1.map((subcatItem) => (
                       <NavLink to={`/commonui/${subcatItem}`} state={{ratings:staticRatings}}><li key={subcatItem} >{subcatItem}</li></NavLink> 
                      ))}
                    </ul>
                  </div>
                  </>))}
              </div>
            </div>
          </div>

          <div className="searchbar">
            <i className="fa-solid fa-magnifying-glass"></i> <input type="text" className="searchbarinput" placeholder="search here" />
          </div>

          <NavLink to="tech" className="navlinknames">
            Teach on Udemy
          </NavLink>
          <NavLink to="cart" className="cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>

<NavLink to="/login"><button className="btn loginbtn">Log in</button></NavLink>
<NavLink to="/register"><button className="btn signupbtn">Sign up</button></NavLink>
          
          
          <i className="fa-solid fa-globe"></i>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/businesscategories" element={''}></Route>
          <Route path="/login" element={<LogIn/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/commonui/:category" element={<CommonUi/>}/>
          {/* <Route path="/commonui/:category" element={<Development />} /> */}
          <Route path="web development" element={<WebDevelopment />} />
        </Routes>

        <footer>
          <div className="footer-upper-div">
            <div className="footer-navlink-div-parent">
              <div className="footer-navlink-div1">
                <NavLink className="footer-navlinks">Udemy Business</NavLink>
                <NavLink className="footer-navlinks">Teach On Udemy</NavLink>
                <NavLink className="footer-navlinks"> Get the app</NavLink>
                <NavLink className="footer-navlinks">Abou Us</NavLink>
                <NavLink className="footer-navlinks">Contact Us</NavLink>
              </div>
              <div className="footer-navlink-div1">
                <NavLink className="footer-navlinks">Careers</NavLink>
                <NavLink className="footer-navlinks">Blog</NavLink>
                <NavLink className="footer-navlinks">Help and Support</NavLink>
                <NavLink className="footer-navlinks">Affiliated</NavLink>
                <NavLink className="footer-navlinks">Investors</NavLink>
              </div>
              <div className="footer-navlink-div1">
                <NavLink className="footer-navlinks">Terms</NavLink>
                <NavLink className="footer-navlinks">Privacy Policy</NavLink>
                <NavLink className="footer-navlinks">Cookie setting</NavLink>
                <NavLink className="footer-navlinks">Sitemap</NavLink>
                <NavLink className="footer-navlinks">Accesibility statement</NavLink>
              </div>
            </div>
            <div className="footer-right-side-div">
              <i className="fa-solid fa-globe globe"></i>
              English
            </div>
          </div>
          <div className="footer-bottom-div">
            <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="not found" className="Udemyimage Udemyimage-footer" />
            <p>2023 Udemy, Inc.</p>
          </div>
        </footer>
      </BrowserRouter>
    </div>
  );
};

export default Link;
