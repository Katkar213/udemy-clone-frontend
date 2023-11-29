// import React,{useState}from 'react'
// import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom"
// import Home from '../Components/Home'
// import Development from '../Components/Development'

// const Link = () => {

// const[toggle,setToggle]=useState(false)
// const handleMouseOver=()=>{
//   setToggle(!toggle)
// }

// const handleMouseOut=()=>{
//   setToggle(!toggle)
// }

//   const categories=["Development","Business","Finance and Accounting","It & Software","Design","Marketing","Life Style","Photography & Video","Music & Arts"]
//   const subcategories=[
//     {
//   cat:"Development",
//   subcat1:["web development","Data Science","Mobile Development"]
//   },
//   {
//     cat:"Business",
//     subcat1:["web development","Data Science","Mobile Development"]
//   },
//   {
//     cat:"Finance and Accounting",
//     subcat1:["Accounting and Bookkeeping"]
//   },
//   {
//     cat:"It & Software",
//     subcat1:["It Certification","Network & Security","Hardware","Operating system &Servers","Other IT & Software"]
//   },
//   {
//     cat:"Design",
//     subcat1:["web Design","Game Design","3D & Animation","Fashion Design","Other Design"]
//   },
//   {
//     cat:"Marketing",
//     subcat1:["Digital Marketing","Social Media Marketing","Public Relationship","Content Marketing","Product Marketing"]
//   },
//   {
//     cat:"Life Style",
//     subcat1:["Arts & Crafts","Beauty & Makeup","Food & Beverage","Pet Care & Training","Travel"]
//   },
//   {
//     cat:"Photography & Video",
//     subcat1:["Digital Photography","Photography","Video Design","Commercial Photography","Photography Tools"]
//   },
//   {
//     cat:"Music & Arts",
//     subcat1:["Instruments","Music Production","Vocal","Music Software","Music Techniques"]
//   }

//   ]

//   return (
//     <div >
//     <BrowserRouter>

//     <div className="Navbar">
//     <NavLink to="/"><img  src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="not found" className="Udemyimage"/></NavLink>

// <div className="categories-Parent">
//             <NavLink to="/categories" className="navlinknames categories" >Categories</NavLink>
            
//               <div className="categories-outer">
//                 <div className="categories1">
//                   {categories.map((item,index) => {
//                   console.log(subcategories[index].subcat1)  
//                     return (
                     
//                       <div key={item}>
//                         <NavLink className="subcategories1" to={`/${item}`.toLowerCase()} 
//                         onMouseOver={handleMouseOver}
//                         onMouseOut={handleMouseOut}>
//                           {item}  <span className="logo-arrow"></span>
//                           </NavLink>
                     
                      
//                       {/* <div className="submenu2"> */}
//                           <ul className={(toggle)?"submenu2":"hide"}>
//                             {subcategories[index].subcat1.map((subcatItem) => {
//                                 console.log(subcatItem)
//                                 return( <li>{subcatItem}</li>)
//                                })}
//                           </ul> 
//                           {/* </div> */}
//                           </div> 
//                     )
                    
//                   })}
//                 </div>
//               </div>
            
//           </div>
    
//     <div className="searchbar"><i className="fa-solid fa-magnifying-glass"></i>    <input type="text" className="searchbarinput" placeholder="search here"/></div>
    
//     <NavLink to="tech" className="navlinknames">Teach on Udemy</NavLink>
//     <NavLink to="cart" className="cart"><i className="fa-solid fa-cart-shopping"></i></NavLink>
    
//     <button className="btn loginbtn">Log in</button>
//     <button className="btn signupbtn">Sign up</button>
//     <i className="fa-solid fa-globe"></i>

//     </div>

//     <Routes>
//         <Route path="/"  element={<Home/>}/>
//         <Route path="/businesscategories"  element={""}></Route>
//         <Route path="/tech"  element={""}/>
//         <Route path="/cart"  element={""}/>
//         <Route path="/categories"  element={""}/>
//       <Route path="development" element={<Development/>}/>

//     </Routes>
    












//     <footer>
//       <div className="footer-upper-div">

//       <div className="footer-navlink-div-parent">
//         <div className="footer-navlink-div1">
//           <NavLink className="footer-navlinks">Udemy Business</NavLink>
//           <NavLink  className="footer-navlinks">Teach On Udemy</NavLink>
//           <NavLink  className="footer-navlinks"> Get the app</NavLink>
//           <NavLink  className="footer-navlinks">Abou Us</NavLink>
//           <NavLink  className="footer-navlinks">Contact Us</NavLink>
//         </div>
//         <div className="footer-navlink-div1">
//           <NavLink  className="footer-navlinks">Careers</NavLink>
//           <NavLink  className="footer-navlinks">Blog</NavLink>
//           <NavLink  className="footer-navlinks">Help and Support</NavLink>
//           <NavLink  className="footer-navlinks">Affiliated</NavLink>
//           <NavLink  className="footer-navlinks">Investors</NavLink>
//         </div>
//         <div className="footer-navlink-div1">
//         <NavLink  className="footer-navlinks">Terms</NavLink>
//         <NavLink  className="footer-navlinks">Privacy Policy</NavLink>
//         <NavLink  className="footer-navlinks">Cookie setting</NavLink>
//         <NavLink  className="footer-navlinks">Sitemap</NavLink>
//         <NavLink  className="footer-navlinks">Accesibility statement</NavLink>
//         </div>
//       </div>
//       <div className="footer-right-side-div">
//       <i className="fa-solid fa-globe globe"></i>
//       English
//       </div>
//       </div>
//       <div className="footer-bottom-div">
//       <img  src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="not found" className="Udemyimage Udemyimage-footer"/>
//       <p>2023 Udemy,Inc.</p>
//       </div>
//     </footer>




   
//     </BrowserRouter>

 
    
    
    
    
//     </div>
//   )
// }

// {/* <div className="categories-Parent" >
//     <NavLink to="/categories" className="navlinknames categories">Categories</NavLink>
//     <div className="categories-outer">
//     <div className="categories1">
    
//         {categories.map((item)=>{
//        return(
//        <NavLink className="subcategories1">{item}</NavLink>
//        )
       
//         })}
       
        
//     </div>
//     </div>
//     </div>  */}

// export default Link


// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
// import Home from '../Components/Home';
// import Development from '../Components/Development';

// const Link = () => {
//   const [hoveredCategory, setHoveredCategory] = useState(null);

//   const handleMouseOver = (category) => {
//     setHoveredCategory(category);
//   };

//   const handleMouseOut = () => {
//     setHoveredCategory(null);
//   };

//   const categories = [
//     'Development',
//     'Business',
//     'Finance and Accounting',
//     'It & Software',
//     'Design',
//     'Marketing',
//     'Life Style',
//     'Photography & Video',
//     'Music & Arts',
//   ];

//   const subcategories = [
//     {
//       cat: 'Development',
//       subcat1: ['web development', 'Data Science', 'Mobile Development'],
//     },
//     {
//       cat: 'Business',
//       subcat1: ['web development', 'Data Science', 'Mobile Development'],
//     },
//     {
//       cat: 'Finance and Accounting',
//       subcat1: ['Accounting and Bookkeeping'],
//     },
//     {
//       cat: 'It & Software',
//       subcat1: ['It Certification', 'Network & Security', 'Hardware', 'Operating system &Servers', 'Other IT & Software'],
//     },
//     {
//       cat: 'Design',
//       subcat1: ['web Design', 'Game Design', '3D & Animation', 'Fashion Design', 'Other Design'],
//     },
//     {
//       cat: 'Marketing',
//       subcat1: ['Digital Marketing', 'Social Media Marketing', 'Public Relationship', 'Content Marketing', 'Product Marketing'],
//     },
//     {
//       cat: 'Life Style',
//       subcat1: ['Arts & Crafts', 'Beauty & Makeup', 'Food & Beverage', 'Pet Care & Training', 'Travel'],
//     },
//     {
//       cat: 'Photography & Video',
//       subcat1: ['Digital Photography', 'Photography', 'Video Design', 'Commercial Photography', 'Photography Tools'],
//     },
//     {
//       cat: 'Music & Arts',
//       subcat1: ['Instruments', 'Music Production', 'Vocal', 'Music Software', 'Music Techniques'],
//     },
//   ];

//   return (
//     <div>
//       <BrowserRouter>
//         <div className="Navbar">
//           <NavLink to="/">
//             <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="not found" className="Udemyimage" />
//           </NavLink>

//           <div className="categories-Parent">
//             <NavLink to="/categories" className="navlinknames categories">
//               Categories
//             </NavLink>

//             <div className="categories-outer">
//               <div className="categories1">
//                 {categories.map((item, index) => {
//                   return (
//                     <>
//                     <div key={item} onMouseOver={() => handleMouseOver(item)} onMouseOut={handleMouseOut}>
//                       <NavLink className="subcategories1" to={`/${item}`.toLowerCase()}>
//                         {item} <span className="logo-arrow">></span>
//                       </NavLink>
//                       </div>
//                       {hoveredCategory === item && (
//                         <ul className="submenu2">
//                           {subcategories[index].subcat1.map((subcatItem) => (
//                             <li key={subcatItem}><NavLink to={`/${subcatItem}`.toLowerCase()}>{subcatItem}</NavLink></li>
//                           ))}
//                         </ul>
//                       )}
//                   </>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           <div className="searchbar">
//             <i className="fa-solid fa-magnifying-glass"></i> <input type="text" className="searchbarinput" placeholder="search here" />
//           </div>

//           <NavLink to="tech" className="navlinknames">
//             Teach on Udemy
//           </NavLink>
//           <NavLink to="cart" className="cart">
//             <i className="fa-solid fa-cart-shopping"></i>
//           </NavLink>

//           <button className="btn loginbtn">Log in</button>
//           <button className="btn signupbtn">Sign up</button>
//           <i className="fa-solid fa-globe"></i>
//         </div>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/businesscategories" element={''}></Route>
//           <Route path="/tech" element={''} />
//           <Route path="/cart" element={''} />
//           <Route path="/categories" element={''} />
//           <Route path="development" element={<Development />} />
//          <Route path=" web development" element={<Development />}/>

//         </Routes>

//         <footer>
//           <div className="footer-upper-div">
//             <div className="footer-navlink-div-parent">
//               <div className="footer-navlink-div1">
//                 <NavLink className="footer-navlinks">Udemy Business</NavLink>
//                 <NavLink className="footer-navlinks">Teach On Udemy</NavLink>
//                 <NavLink className="footer-navlinks"> Get the app</NavLink>
//                 <NavLink className="footer-navlinks">Abou Us</NavLink>
//                 <NavLink className="footer-navlinks">Contact Us</NavLink>
//               </div>
//               <div className="footer-navlink-div1">
//                 <NavLink className="footer-navlinks">Careers</NavLink>
//                 <NavLink className="footer-navlinks">Blog</NavLink>
//                 <NavLink className="footer-navlinks">Help and Support</NavLink>
//                 <NavLink className="footer-navlinks">Affiliated</NavLink>
//                 <NavLink className="footer-navlinks">Investors</NavLink>
//               </div>
//               <div className="footer-navlink-div1">
//                 <NavLink className="footer-navlinks">Terms</NavLink>
//                 <NavLink className="footer-navlinks">Privacy Policy</NavLink>
//                 <NavLink className="footer-navlinks">Cookie setting</NavLink>
//                 <NavLink className="footer-navlinks">Sitemap</NavLink>
//                 <NavLink className="footer-navlinks">Accesibility statement</NavLink>
//               </div>
//             </div>
//             <div className="footer-right-side-div">
//               <i className="fa-solid fa-globe globe"></i>
//               English
//             </div>
//           </div>
//           <div className="footer-bottom-div">
//             <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="not found" className="Udemyimage Udemyimage-footer" />
//             <p>2023 Udemy, Inc.</p>
//           </div>
//         </footer>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default Link;



import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from '../Components/Home';
import Development from '../Components/Development';
import '../App.css'; // Import your CSS file

const Link = () => {
  const categories = [
    'Development',
    'Business',
    'Finance and Accounting',
    'It & Software',
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
      cat: 'It & Software',
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
                    <NavLink className="subcategories1" to={`/${item}`.toLowerCase()}>
                      {item} <span className="logo-arrow"></span>
                    </NavLink>

                    <ul className="submenu2">
                      {subcategories[index].subcat1.map((subcatItem) => (
                        <li key={subcatItem}>{subcatItem}</li>
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

          <button className="btn loginbtn">Log in</button>
          <button className="btn signupbtn">Sign up</button>
          <i className="fa-solid fa-globe"></i>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/businesscategories" element={''}></Route>
          <Route path="/tech" element={''} />
          <Route path="/cart" element={''} />
          <Route path="/categories" element={''} />
          <Route path="development" element={<Development />} />
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
