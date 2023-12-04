import React from 'react'
import "../Web-css/Tech.css"
import {NavLink} from "react-router-dom"
const Tech = () => {
  return (
    <div>

        {/* title */}
 <div className="tech-titleimage">
<img src="https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg" className="tech-titleimage" alt="not-found"/>
<div className="popup">
    <h1>Come teach with us</h1>
    <p>Become an instructor and change lives — including your own</p>
    <button className="get-started-button">Get Started</button>
</div>
</div>

{/* many reasons to start */}
<h1>So Many Reasons to start</h1>
<div className="so-many-reason-div-parent">
    
    <div className="so-many-reason-div">
        <img src="https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg" alt="not found" className="so-many-reason-div-image"></img>
        <h3>Teach your way</h3>
        <p>Publish the course you want, in the way you want, and always have control of your own content.</p>
    </div>
    <div className="so-many-reason-div">
    <img src="https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg" alt="not found" className="so-many-reason-div-image"></img>
    <h3>Inspire learners</h3>
        <p>Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
    </div>
    <div className="so-many-reason-div">
    <img src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg" alt="not found" className="so-many-reason-div-image"></img>
    <h3>Get rewarded</h3>
        <p>Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
    </div>
</div>

{/* blue views */}
<div className="blue-views-parent-outer">
<div className="blue-views-parent">
    <div className="blue-views-text"><h1>62M</h1>
    <p>Students</p>
    </div>
    <div className="blue-views-text"><h1>75+</h1>
    <p>Languages</p>
    </div>
    <div className="blue-views-text"><h1>830M</h1>
    <p>Enrollments</p>
    </div>
    <div className="blue-views-text"><h1>180+</h1>
    <p>Countries</p>
    </div>
    <div className="blue-views-text"><h1>15,000+</h1>
    <p>Enterprise Costumers</p>
    </div>
    </div>
</div>

{/* how to begin */}

<div className="how-to-begin">
<h1>How to begin</h1>
<div className="navbar-faulty">
    <span className="underline">Place your curriculum</span>
    <span>Record your video</span>
    <span>Launch your course</span>

</div>
<hr></hr>


<div className="how-to-begin-contents">
<div className="how-to-begin-text">
    <p>You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.</p>
    <p>The way that you teach — what you bring to it — is up to you.</p>
    <h3>How we help you</h3>
    <p>We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.</p>
</div>
<img src="https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg" alt="not" className="how-to-begin-image"></img>

</div>

</div>

<div className="frank-div-parent">
    <div className="frank-div">
    <img src="https://s.udemycdn.com/teaching/instructors/en/frank-1x-v2.jpg" alt="not found" className="frank-div-image"></img>
    <div className="frank-div-text">
        <p className="last-div-text">“I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”</p>
       <div className="frank-div-detail">
       <h4>Frank Kane</h4>
        <p>Data Science & IT Certifications</p>
       </div>
   
    </div>
    </div>
</div>

<div className="bottom-div">
    <img src="https://s.udemycdn.com/teaching/support-1-v3.jpg" alt="not" className="bottom-div-left"/>
    <div className="bottom-div-center">
<h1>You won’t have to do it alone</h1>
<p className="last-div-text">Our <span>Instructor Support Team </span> is here to answer your questions and review your test video, while our <span> Teaching Center</span>
gives you plenty of resources to help you through the process. Plus, get the support of experienced instructors in our <span>online community</span>
</p>
<NavLink>Need more details before you start? Learn more.</NavLink>
    </div>
    <img src="https://s.udemycdn.com/teaching/support-2-v3.jpg" alt="not"  className="bottom-div-right"/>
</div>


<div className="last-div">
    <h1>Become an instructor today</h1>
    <p className="last-div-text">Join one of the world’s largest online learning marketplaces.</p>
    <div className="get-started-button-div">
    <button className="get-started-button">Get Started</button>
    </div>
</div>





















    </div>
  )
}

export default Tech