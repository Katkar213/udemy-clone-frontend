import React from 'react'
import "../Components/Home.css"
import {NavLink} from "react-router-dom"
const Home = () => {
  return (
    <div>
        <div className="mainimage"><img src="https://img-c.udemycdn.com/notices/web_carousel_slide/image_responsive/3cb2dd4f-0371-4567-b937-69558b86aeef.jpg" alt="not found"/>
        <div className="mainimage-text">
            <h1>Cyber Monday?Meet tommorow's skills</h1>
            <p>Change your future with courses from just ₹389.Deal ends tommorow </p>
            
            </div></div>
    
    <div className="homepage-sponsors">
        <p classNam="homepage-sponsors-title">Trusted by over 15,000 companies and millions of learners around the world</p>
        <div className="homepage-sponsors-icons">
<ul>
    <li><img src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg "className="homepage-sponsors-images" alt="not found"/></li>
    <li><img src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg" className="homepage-sponsors-images" alt="not found"/></li>
    <li><img src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg" className="homepage-sponsors-images" alt="not found"/></li>
    <li><img src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg" className="homepage-sponsors-images" alt="not found"/></li>
    <li><img src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg" className="homepage-sponsors-images" alt="not found"/></li>
    <li><img src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg" className="homepage-sponsors-images" alt="not found"/></li>
    <li><img src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg" className="homepage-sponsors-images" alt="not found"/></li>
    <li><img src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg" className="homepage-sponsors-images" alt="not found"/></li>
</ul>
        </div>
    </div>

    <diV className="selectionofcourses">
    <h1>A broad selection of courses</h1>
    <p>Choose from over 210,000 online video courses with new additions published every month</p>
    </diV>

    <diV className="selectionofcourses-navlinks">
      <p>Python</p>
      <p>Excel</p>
      <p>Web Devlopment</p>
      <p>JavaScript</p>
      <p>Data Science</p>
      <p>Amazon AWS</p>
      <p>Drawing</p>
    </diV>

    <div className="home-careeropportunities">
{/* career opportunity 4 divs... 1*/}

      <div className="home-careeropportunities-text">
   <h1>Expand your career opportunities with Python</h1>
   <p className="home-careeropportunities-description">Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to</p>
   <button className="explorepython-btn">Explore Python</button>
   </div>

   <div className="home-careeropportunities-4div">
    <div className="home-careeropportunities-div" >
      <img className="home-careeropportunities-div-image" src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg" alt="not found"/>
      <div> <h4>The Complete Python Bootcamp From Zero to Hero in Python...</h4></div>
     <p>JOse Portilla</p>
     <p>Ratings</p>
     <div className="home-careeropportunities-div-price">
     <p>₹389</p><span className="dashed-price">₹3199</span>
     </div>
    </div>

    <div className="home-careeropportunities-div" >
    <img className="home-careeropportunities-div-image" src="https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg" alt="not found"/>
      <div> <h4>The Complete Python Bootcamp From Zero to Hero in Python...</h4></div>
     <p>JOse Portilla</p>
     <p>Ratings</p>
     <div className="home-careeropportunities-div-price">
     <p>₹389</p><span className="dashed-price">₹3199</span>
     </div>
    </div>

    <div className="home-careeropportunities-div" >
    <img className="home-careeropportunities-div-image" src="https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg" alt="not found"/>
      <div> <h4>The Complete Python Bootcamp From Zero to Hero in Python...</h4></div>
     <p>JOse Portilla</p>
     <p>Ratings</p>
     <div className="home-careeropportunities-div-price">
     <p>₹389</p><span className="dashed-price">₹3199</span>
     </div>
    </div>

    <div className="home-careeropportunities-div" >
    <img className="home-careeropportunities-div-image" src="https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg" alt="not found"/>
      <div> <h4>The Complete Python Bootcamp From Zero to Hero in Python...</h4></div>
     <p>JOse Portilla</p>
     <p>Ratings</p>
     <div className="home-careeropportunities-div-price">
     <p>₹389</p><span className="dashed-price">₹3199</span>
     </div>
    </div>
   </div>
   </div>

   {/* home page comments................. */}
   <div className="home-Comments-outerdiv">
   <div className="home-Comments-heading"><h3>How learners like you are achieving their goals </h3></div>
    <div className="home-Comments-parent">
     
<div className="home-Comments">
  {/* comment main content... */}
  <div className="comments-main-content">
  <img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="not found" className="commas"></img>
  <p>I am proud to say that after a few months of taking this course...<span>I passed my exam and am now an AWS Certified Cloud Practitioner!</span>
  This content was exactly what the CCP exam covered.</p>
 <div className="name-shortform"><div className="name-shortform-logo" >WA</div><span>Will A</span></div>
 </div>
 <hr></hr>
 <div className="home-Comments-links">
 <div className="home-Comments-links-logo"><i className="fa-solid fa-circle-play "></i></div> 
  <div className="home-Comments-links-text">[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</div>
 </div >
  </div>

  <div className="home-Comments">
  <div className="comments-main-content">
  <img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="not found" className="commas"></img>
  <p>This course helped me <span>freshen up on my product manager skills and land a job at Facebook!</span>
  Thanks guys :)</p>
  <div className="name-shortform"><div className="name-shortform-logo" >WA</div><span>Will A</span></div>
  </div>
 <hr></hr>
 <div className="home-Comments-links">
 <div className="home-Comments-links-logo"><i className="fa-solid fa-circle-play "></i></div> 
  <div className="home-Comments-links-text">Become a Product Manager | Learn the Skills & Get the Job</div>
 </div >
  </div>

  <div className="home-Comments">
  <div className="comments-main-content">
  <img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="not found" className="commas"></img>
  <p>I am proud to say that after a few months of taking this course...<span>I passed my exam and am now an AWS Certified Cloud Practitioner!</span>
  This content was exactly what the CCP exam covered.</p>
  <div className="name-shortform"><div className="name-shortform-logo" >WA</div><span>Will A</span></div>
  </div>
 <hr></hr>
 <div className="home-Comments-links">
 <div className="home-Comments-links-logo"><i className="fa-solid fa-circle-play "></i></div> 
  <div className="home-Comments-links-text">Leadership: Practical Leadership Skills</div>
 </div >
  </div>

  <div className="home-Comments">
  <div className="comments-main-content">
  <img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="not found" className="commas"></img>
  <p>I am proud to say that after a few months of taking this course...<span>I passed my exam and am now an AWS Certified Cloud Practitioner!</span>
  This content was exactly what the CCP exam covered.</p>
  <div className="name-shortform"><div className="name-shortform-logo" >WA</div><span>Will A</span></div>
  </div>
 <hr></hr>
{/* <div/> */}
 <div className="home-Comments-links">
 <div className="home-Comments-links-logo"><i className="fa-solid fa-circle-play "></i></div> 
  <div className="home-Comments-links-text">[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</div>
 </div >
  
</div>

</div>
</div>


<div className="home-careeropportunities2">
{/* career opportunity 4 divs... 2*/}
   <h2>Learners are viewing</h2>

   <div className="home-careeropportunities-4div">
    <div className="home-careeropportunities-div" >
      <img className="home-careeropportunities-div-image" src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg" alt="not found"/>
      <div> <h4>The Complete Python Bootcamp From Zero to Hero in Python...</h4></div>
     <p>JOse Portilla</p>
     <p>Ratings</p>
     <div className="home-careeropportunities-div-price">
     <p>₹389</p><span className="dashed-price">₹3199</span>
     </div>
    </div>

    <div className="home-careeropportunities-div" >
    <img className="home-careeropportunities-div-image" src="https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg" alt="not found"/>
      <div> <h4>The Complete Python Bootcamp From Zero to Hero in Python...</h4></div>
     <p>JOse Portilla</p>
     <p>Ratings</p>
     <div className="home-careeropportunities-div-price">
     <p>₹389</p><span className="dashed-price">₹3199</span>
     </div>
    </div>

    <div className="home-careeropportunities-div" >
    <img className="home-careeropportunities-div-image" src="https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg" alt="not found"/>
      <div> <h4>The Complete Python Bootcamp From Zero to Hero in Python...</h4></div>
     <p>JOse Portilla</p>
     <p>Ratings</p>
     <div className="home-careeropportunities-div-price">
     <p>₹389</p><span className="dashed-price">₹3199</span>
     </div>
    </div>

    <div className="home-careeropportunities-div" >
    <img className="home-careeropportunities-div-image" src="https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg" alt="not found"/>
      <div> <h4>The Complete Python Bootcamp From Zero to Hero in Python...</h4></div>
     <p>JOse Portilla</p>
     <p>Ratings</p>
     <div className="home-careeropportunities-div-price">
     <p>₹389</p><span className="dashed-price">₹3199</span>
     </div>
    </div>
   </div>
   </div>

{/* Top Categories... */}
<div className="top-categories-heading"><h3>Top Categories</h3></div>
<div className="top-categories">

<div className="top-categories-div" >
  <img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" alt="not found" className="top-categories-image"></img>
  <h3 className="top-categories-div-caption">Design</h3>
</div>
<div className="top-categories-div" >
<img src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" alt="not found" className="top-categories-image"></img>
  <h3 className="top-categories-div-caption">Development</h3>
</div>
<div className="top-categories-div" >
<img src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg" alt="not found" className="top-categories-image"></img>
  <h3 className="top-categories-div-caption">Marketing</h3>
</div>
<div className="top-categories-div" >
<img src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg" alt="not found" className="top-categories-image"></img>
  <h3 className="top-categories-div-caption">It and Software</h3>
</div>
<div className="top-categories-div" >
<img src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg" alt="not found" className="top-categories-image"></img>
  <h3 className="top-categories-div-caption">Personal Development</h3>
</div>
<div className="top-categories-div" >
<img src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg" alt="not found" className="top-categories-image"></img>
  <h3 className="top-categories-div-caption">Business</h3>
</div>
<div className="top-categories-div" >
<img src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg" alt="not found" className="top-categories-image"></img>
  <h3 className="top-categories-div-caption">Photography</h3>
</div>
<div className="top-categories-div" >
<img src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg" alt="not found" className="top-categories-image"></img>
  <h3 className="top-categories-div-caption">Music</h3>
</div>

</div>

<div className="feature-topics-by-categories">
  <h2>Featured Topics By Categories</h2>
  <div className="feature-topics-by-categories-text-parent">
    <div className="feature-topics-by-categories-text">
      <h3>Development</h3>

      <div>
        <NavLink className="feature-topics-by-categories-links">Python</NavLink>
        <p>36,354,994 learners</p>
      </div>
      <div>
        <NavLink className="feature-topics-by-categories-links">Web Development</NavLink>
        <p>11,415,615 learners</p>
      </div>

      <div>
      <NavLink className="feature-topics-by-categories-links">Machine Learning</NavLink>
        <p>7,070,015 learners</p>
      </div>
    </div>

    <div className="feature-topics-by-categories-text">
      <h3>Business</h3>
      <div>
        <NavLink className="feature-topics-by-categories-links">Financial Analysis</NavLink>
        <p>36,354,994 learners</p>
      </div>
      <div>
        <NavLink className="feature-topics-by-categories-links">SQL</NavLink>
        <p>11,415,615 learners</p>
      </div>

      <div>
      <NavLink className="feature-topics-by-categories-links">PMP</NavLink>
        <p>7,070,015 learners</p>
      </div>
    </div>

    <div className="feature-topics-by-categories-text">
      <h3>It and Software</h3>
      <div>
        <NavLink className="feature-topics-by-categories-links">Amazon AWS</NavLink>
        <p>36,354,994 learners</p>
      </div>
      <div>
        <NavLink className="feature-topics-by-categories-links">Ethical Hacking</NavLink>
        <p>11,415,615 learners</p>
      </div>

      <div>
      <NavLink className="feature-topics-by-categories-links">Cyber Security</NavLink>
        <p>7,070,015 learners</p>
      </div>
    </div>

    <div className="feature-topics-by-categories-text">
      <h3>Design</h3>
      <div>
        <NavLink className="feature-topics-by-categories-links">Photoshop</NavLink>
        <p>10,909,736 learners</p>
      </div>
      <div>
        <NavLink className="feature-topics-by-categories-links">Graphic Design</NavLink>
        <p>3,381,052 learners</p>
      </div>

      <div>
      <NavLink className="feature-topics-by-categories-links">Drawing</NavLink>
        <p>2,410,849 learners</p>
      </div>
    </div>

  </div>

<div className="explore-more-btn-div"> 
<button className="explore-more-btn">Explore more topics</button>
</div>
</div>


{/* udemy business... */}

<div className="udemy-business-parent"> 

<div  className="udemy-business-leftdiv">
<div  className="udemy-business-leftdiv-1">
  <img alt="not found" className="Udemyimage1" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"></img>
  <p className="business">business</p>
</div>
<div  className="udemy-business-leftdiv-2">
  <h1 >UpSkill your team with Udemy Business</h1>
</div>
<ul  className="udemy-business-leftdiv-3">
    <li>Unlimited access to 25,000+ top Udemy courses, anytime, anywhere</li>
    <li>International course collection in 14 languages</li>
    <li>Top certifications in tech and business</li>
</ul>
<div  className="udemy-business-leftdiv-4">
  <button className="get-udemy-business-btn">Get Udemy Business</button>
  <button className="learn-more-btn">Learn More</button>
</div>
</div>

<div className="udemy-business-rightdiv">
  <img src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_1200x1200.jpg" alt="not found"/>
</div>
</div>
<div className="principal-div-outer-container">
<div className="principal-div-parent">
  <div className="principal-div-leftside">
    <img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="not found" className="commas"></img>
    <p>Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its <span>data scientists, with highly relevant and in-demand tech skills</span>
    that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.</p>
  <NavLink className="feature-topics-by-categories-links">Read full story</NavLink>
  
  </div>
  <div className="principal-div-rightside">
   <img src="https://s.udemycdn.com/home/ub-case-studies/James_Hemgen.jpeg" className="principal-image" alt="not found"></img>
   <h3>Jim Hemgen</h3>
   <p className="grey-color-p">Principal</p>
   <p>Booz Allen Hamilton</p>
  </div>
</div>
</div>

<div className="instructor-div">
 <img src="https://s.udemycdn.com/home/non-student-cta/instructor-mobile-v3.jpg" alt="not found" className="instructor-div-leftside"/>

<div className="instructor-div-rightside">
  <h2>Become an instructor</h2>
  <p>Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</p>
  <button className="start-teaching-today-btn">Start teaching today</button>
</div>

</div>



    </div>
  )
}

export default Home