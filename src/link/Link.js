
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from '../Components/Home';
import Tech from '../Components/Tech';
// import Development from '../Components/Development';
import WebDevelopment from '../Components/WebDevelopment';
import { IoIosArrowForward } from "react-icons/io";
import CommonUi from '../Components/CommonUi';
import LogIn from '../Components/UserAuthentication/Login';
import Register from '../Components/UserAuthentication/Register';
import '../App.css'; // Import your CSS file

const Link = () => {

  const businessPopular_instutor = [
    {
      id: "15",
      category: "Development",
      subcategory: "Development-instructors",
      image: "https://img-c.udemycdn.com/user/75x75/31334738_a13c_3.jpg",
      name: "Dr.Angela Yu",
      field: "Python,DataScience",
      students: "2,414,937 ",
      rating: "4.7 ⭐Instructor Rating",
      courses: "7 courses"

  },
  {
      id: "16",
      category: "Development",
      subcategory: "Development-instructors",
      image: "https://img-c.udemycdn.com/user/75x75/31926668_94e7_6.jpg",
      name: "Academind by Maximilian Schwarzmüller",
      field: "React Js,React Hooks",
      students: "2,706,147 ",
      rating: "4.6 ⭐Instructor Rating",
      courses: "46 courses"

  },
  {
      id: "17",
      category: "Development",
      subcategory: "Development-instructors",
      image: "https://img-c.udemycdn.com/user/75x75/7799204_2091_5.jpg",
      name: "Jonas Schmedtmann",
      field: "React Js,JavaScript",
      students: "1,830,241 ",
      rating: "4.7 ⭐Instructor Rating",
      courses: "7 courses"

  },
  {
      id: "18",
      category: "Development",
      subcategory: "Development-instructors",
      image: "https://img-c.udemycdn.com/user/75x75/9685726_67e7_4.jpg",
      name: "Jose Poetilla",
      field: "python,Data Science",
      students: "3,625,658 ",
      rating: "4.6 ⭐Instructor Rating",
      courses: "75 courses"
  },

  {
    id: "50",
    category: "Web-Development",
    image: "https://img-c.udemycdn.com/user/75x75/7799204_2091_5.jpg",
    name: "Jonas Schmedtmann",
    field: "React Js,JavaScript",
    students: "1,830,241 ",
    rating: "4.7 ⭐Instructor Rating",
    courses: "7 courses"

  },
  {
    id: "51",
    category: "Web-Development",
    image: "https://img-c.udemycdn.com/user/75x75/31926668_94e7_6.jpg",
    name: "Academind by Maximilian Schwarzmüller",
    field: "React Js,React Hooks",
    students: "2,744,310 ",
    rating: "4.6⭐ Instructor Rating",
    courses: "60 courses"

  },
  {
    id: "52",
    category: "Web-Development",
    image: "https://img-c.udemycdn.com/user/75x75/31926668_94e7_6.jpg",
    name: "Academind by Maximilian Schwarzmüller",
    field: "Angular,Next.Js",
    students: "2,709,147 ",
    rating: "4.6 ⭐Instructor Rating",
    courses: "46 courses"

  },

  {
    id: "53",
    category: "Web-Development",
    image: "https://img-c.udemycdn.com/user/75x75/5487312_0554.jpg",
    name: "Stephen Grider",
    field: "React JS,Node.Js",
    students: "1,336,235",
    rating: "4.6 ⭐Instructor Rating",
    courses: "35 courses"
  },
  
  {
    id: "50",
    category: "Data Science",
    image: "https://img-c.udemycdn.com/user/75x75/2364054_83cd_5.jpg",
    name: "Kirill Eremenko",
    field: "React Js,JavaScript",
    students: "1,830,241 ",
    rating: "4.7 ⭐Instructor Rating",
    courses: "7 courses"

  },
  {
    id: "51",
    category: "Data Science",
    image: "https://img-c.udemycdn.com/user/75x75/31926668_94e7_6.jpg",
    name: "Academind by Maximilian Schwarzmüller",
    field: "Data Science, R (programming language)",
    students: "2,744,310 ",
    rating: "4.6 ⭐Instructor Rating",
    courses: "60 courses"

  },
  {
    id: "52",
    category: "Data Science",
    image: "https://img-c.udemycdn.com/user/75x75/9685726_67e7_4.jpg",
    name: "Jose Portilla",
    field: "Python, Data Science",
    students: "2,709,147 ",
    rating: "4.6 ⭐Instructor Rating",
    courses: "46 courses"

  },

  {
    id: "53",
    category: "Data Science",
    image: "https://img-c.udemycdn.com/user/75x75/38516954_b11c_3.jpg",
    name: "Andrei Neagoie",
    field: "Machine Learning, Artificial Intelligence",
    students: "1,336,235 ",
    rating: "4.6 ⭐Instructor Rating",
    courses: "35 courses"
  },
  {
    id: "50",
    category: "Game-Development",
    image: "https://img-c.udemycdn.com/user/75x75/7799204_2091_5.jpg",
    name: "Jonas Schmedtmann",
    field: "React Js,JavaScript",
    students: "1,830,241 ",
    rating: "4.7 ⭐Instructor Rating",
    courses: "7 courses"

  },
  {
    id: "51",
    category: "Game-Development",
    image: "https://img-c.udemycdn.com/user/75x75/31926668_94e7_6.jpg",
    name: "Academind by Maximilian Schwarzmüller",
    field: "React Js,React Hooks",
    students: "2,744,310 ",
    rating: "4.6 ⭐Instructor Rating",
    courses: "60 courses"

  },
  {
    id: "52",
    category: "Game-Development",
    image: "https://img-c.udemycdn.com/user/75x75/31926668_94e7_6.jpg",
    name: "Academind by Maximilian Schwarzmüller",
    field: "Angular,Next.Js",
    students: "2,709,147 ",
    rating: "4.6 ⭐Instructor Rating",
    courses: "46 courses"

  },

  {
    id: "53",
    category: "Game-Development",
    image: "https://img-c.udemycdn.com/user/75x75/5487312_0554.jpg",
    name: "Stephen Grider",
    field: "React JS,Node.Js",
    students: "1,336,235 ",
    rating: "4.6 ⭐Instructor Rating",
    courses: "35 courses"
  },
    {
    id: "50",
    category: "Mobile-Development",
    image: "https://img-c.udemycdn.com/user/75x75/7799204_2091_5.jpg",
    name: "Jonas Schmedtmann",
    field: "React Js,JavaScript",
    students: "1,830,241 ",
    rating: "4.7 ⭐Instructor Rating",
    courses: "7 courses"

  },
  {
    id: "51",
    category: "Mobile-Development",
    image: "https://img-c.udemycdn.com/user/75x75/31926668_94e7_6.jpg",
    name: "Academind by Maximilian Schwarzmüller",
    field: "React Js,React Hooks",
    students: "2,744,310",
    rating: "4.6 ⭐Instructor Rating",
    courses: "60 courses"

  },
  {
    id: "52",
    category: "Mobile-Development",
    image: "https://img-c.udemycdn.com/user/75x75/31926668_94e7_6.jpg",
    name: "Academind by Maximilian Schwarzmüller",
    field: "Angular,Next.Js",
    students: "2,709,147 ",
    rating: "4.6 ⭐Instructor Rating",
    courses: "46 courses"

  },

  {
    id: "53",
    category: "Mobile-Development",
    image: "https://img-c.udemycdn.com/user/75x75/5487312_0554.jpg",
    name: "Stephen Grider",
    field: "React JS,Node.Js",
    students: "1,336,235 ",
    rating: "4.6 ⭐Instructor Rating",
    courses: "35 courses"
  },
    {
    id: "50",
    category: "Programing-Languages",
    image: "https://img-c.udemycdn.com/user/75x75/7799204_2091_5.jpg",
    name: "Jonas Schmedtmann",
    field: "React Js,JavaScript",
    students: "1,830,241 ",
    rating: "4.7 ⭐Instructor Rating",
    courses: "7 courses"

  },
  {
    id: "51",
    category: "Programing-Languages",
    image: "https://img-c.udemycdn.com/user/75x75/31926668_94e7_6.jpg",
    name: "Academind by Maximilian Schwarzmüller",
    field: "React Js,React Hooks",
    students: "2,744,310 ",
    rating: "4.6 ⭐Instructor Rating",
    courses: "60 courses"

  },
  {
    id: "52",
    category: "Programing-Languages",
    image: "https://img-c.udemycdn.com/user/75x75/31926668_94e7_6.jpg",
    name: "Academind by Maximilian Schwarzmüller",
    field: "Angular,Next.Js",
    students: "2,709,147 ",
    rating: "4.6 ⭐Instructor Rating",
    courses: "46 courses"

  },

  {
    id: "53",
    category: "Programing-Languages",
    image: "https://img-c.udemycdn.com/user/75x75/5487312_0554.jpg",
    name: "Stephen Grider",
    field: "React JS,Node.Js",
    students: "1,336,235 ",
    rating: "4.6 ⭐Instructor Rating",
    courses: "35 courses"
  },
    {
        image:"https://img-c.udemycdn.com/user/75x75/4897424_a25c_11.jpg",
        name:"TIA Education, Andrew Ramdayal",
        des:"PMI Project Management Professional (PMP), PMI PMBOK",
        rating:"4.7 ⭐Instructor Rating",
        students:"310,635",
        courses:"18 courses",
        category:"Business"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/75004102_f8b0_2.jpg",
        name:"Maven Analytics",
        field:"Business Intelligence, Microsoft Power BI",
        rating:"4.7 ⭐Instructor Rating",
        students:"1,121,614",
        courses:"38 courses",
        category:"Business"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/8280056_7887_3.jpg",
        name:"365 Careers",
        field:"Data Analysis, Agile",
        rating:"4.7 ⭐Instructor Rating",
        students:"2,623,082",
        courses:"106 courses",
        category:"Business"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/8912846_1a61.jpg",
        name:"Joseph Phillips",
        field:"PMI PMBOK, PMI Project Management Professional (PMP)",
        rating:"4.7 ⭐Instructor Rating",
        students:"766,529",
        courses:"38 courses",
        category:"Business"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/8280056_7887_3.jpg",
        name:"365 Careers",
        field:"Data Analysis, Agile",
        rating:"4.7 ⭐Instructor Rating",
        students:"2,623,082",
        courses:"108 courses",
        category:"Finance & Accounting"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/33900490_19da_2.jpg",
        name:"Mohsen Hassan",
        field:"Stock Trading, Financial Trading",
        rating:"4.6 ⭐Instructor Rating",
        students:"373,818",
        courses:"11 courses",
        category:"Finance & Accounting"
    },
    {
        image:"ttps://img-c.udemycdn.com/user/75x75/10634862_fb77.jpg",
        name:"Steve Ballinger, MBA",
        field:"Stock Trading, Investing",
        rating:"4.5⭐Instructor Rating",
        students:"605,848",
        courses:"68 courses",
        category:"Finance & Accounting"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/14942868_3ed6_38.jpg",
        name:"Chris Haroun | 1.4 Million Students",
        field:"Investing, Finance Fundamentals",
        rating:"4.6 ⭐Instructor Rating",
        students:"1,406,078",
        courses:"76 courses",
        category:"Finance & Accounting"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/16122994_284f_18.jpg",
        name:"Stephane Maarek | AWS Certified Cloud Practitioner",
        field:"Amazon AWS, AWS Certified Cloud Practitioner",
        rating:"4.7 ⭐Instructor Rating",
        students:"2,276,158",
        courses:"64 courses",
        category:"IT & Software"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/27592028_e3fb_6.jpg",
        name:"Jason Dion • 1 Million+ Enrollments Worldwide",
        field:"CompTIA Security+, CompTIA A+",
        rating:"4.6 ⭐Instructor Rating",
        students:"938,858",
        courses:"60 courses",
        category:"IT & Software"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/31303958_8529_3.jpg",
        name:"Mumshad Mannambeth",
        field:"Kubernetes, Certified Kubernetes Administrator (CKA)",
        rating:"4.6 ⭐Instructor Rating",
        students:"929,236",
        courses:"18 courses",
        category:"IT & Software"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/58935_f800_5.jpg",
        name:"Scott Duffy  • 1.000.000+ Students",
        field:"Microsoft Azure, AZ-900: Microsoft Azure Fundamentals",
        rating:"4.6 ⭐Instructor Rating",
        students:"1,055,033",
        courses:"60 courses",
        category:"IT & Software"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/11614232_b0fc.jpg",
        name:"Daniel Walter Scott",
        field:"User Experience Design, Figma",
        rating:"4.7 ⭐Instructor Rating",
        students:"696,429",
        courses:"34 courses",
        category:"Design"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/16146540_ef4c_15.jpg",
        name:"Lindsay Marsh",
        field:"Graphic Design, Adobe Illustrator",
        rating:"4.6 ⭐Instructor Rating",
        students:"367,114",
        courses:"13 courses",
        category:"Design"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/38516954_b11c_3.jpg",
        name:"Andrei Neagoie",
        field:"User Experience Design, Mobile App Design",
        rating:"4.6 ⭐Instructor Rating",
        students:"1,123,305",
        courses:"25 courses",
        category:"Design"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/33027212_4271_10.jpg",
        name:"GameDev.tv Team",
        field:"Blender, Game Development Fundamentals",
        rating:"4.7 ⭐Instructor Rating",
        students:"1,090,600",
        courses:"52 courses",
        category:"Design"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/36921905_7a32_6.jpg",
        name:"Robin & Jesper",
        field:"Digital Marketing, Social Media Marketing",
        rating:"4.6 ⭐Instructor Rating",
        students:"320,368",
        courses:"24 courses",
        category:"Marketing"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/37939456_be61_5.jpg",
        name:"Joshua George",
        field:"Search Engine Optimization (SEO), Link Building",
        rating:"4.7 ⭐Instructor Rating",
        students:"137,081",
        courses:"22 courses",
        category:"Marketing"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/4116740_b790_2.jpg",
        name:"Alex Genadinik",
        field:"Search Engine Optimization (SEO), SEO Audit",
        rating:"4.5⭐Instructor Rating",
        students:"759,588",
        courses:"197 courses",
        category:"Marketing"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/10508972_337e_4.jpg",
        name:"COURSE ENVY",
        field:"Marketing Strategy, Facebook Marketing",
        rating:"4.4⭐Instructor Rating",
        students:"522,970",
        courses:"29 courses",
        category:"Marketing"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/34229724_ec2e_3.jpg",
        name:"Graham Nicholls",
        field:"Neuro-Linguistic Programming, EFT (Emotional Freedom Techniques)",
        rating:"4.7 ⭐Instructor Rating",
        students:"136,812",
        courses:"37 courses",
        category:"Life Style"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/27988174_e5c2.jpg",
        name:"Brent Eviston",
        field:"Drawing, Sketching",
        rating:"4.8⭐Instructor Rating",
        students:"110,700",
        courses:"12 courses",
        category:"Life Style"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/779778_4469_3.jpg",
        name:"Lisa Powers",
        field:"Reiki, Teacher Training",
        rating:"4.8⭐Instructor Rating",
        students:"226,687",
        courses:"5 courses",
        category:"Life Style"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/23121946_3025_4.jpg",
        name:"Melissa Crowhurst",
        field:"Energy Healing, Spiritual Healing",
        rating:"4.8⭐Instructor Rating",
        students:"199,278",
        courses:"21 courses",
        category:"Life Style"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/317821_3cb5_10.jpg",
        name:"Phil Ebiner",
        field:"Photography, Digital Photography",
        rating:"4.6 ⭐Instructor Rating",
        students:"2,862,770",
        courses:"22 courses",
        category:"Photography & Video"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/15601054_5545_28.jpg",
        name:"Louay Zambarakji",
        field:"Video Editing, Color Grading",
        rating:"4.7 ⭐Instructor Rating",
        students:"420,091",
        courses:"18 courses",
        category:"Photography & Video"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/130091392_74a0_2.jpg",
        name:"Dan Britain",
        field:"Video Editing, ChatGPT",
        rating:"4.5⭐Instructor Rating",
        students:"165,755",
        courses:"10 courses",
        category:"Photography & Video"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/37232048_8e49.jpg",
        name:"Dale McManus",
        field:"Photography, Landscape Photography",
        rating:"4.6 ⭐Instructor Rating",
        students:"136,039",
        courses:"5 courses",
        category:"Photography & Video"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/913001_767b_4.jpg",
        name:"Jason Allen",
        field:"Music Theory, Ableton Live",
        rating:"4.6 ⭐Instructor Rating",
        students:"283,539",
        courses:"117 courses",
        category:"Music & Arts"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/23566298_e66f_4.jpg",
        name:"Tomas George",
        field:"Music Production, Music Mixing",
        rating:"4.6 ⭐Instructor Rating",
        students:"327,888",
        courses:"40 courses",
        category:"Music & Arts"
    },
    {
        image:"ttps://img-c.udemycdn.com/user/75x75/5753906_1b3f_4.jpg",
        name:"Robin Hall",
        field:"Piano, Keyboard Instrument",
        rating:"4.7 ⭐Instructor Rating",
        students:"413,402",
        courses:"5 courses",
        category:"Music & Arts"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/603974_a5c2_4.jpg",
        name:"Erich Andreas",
        field:"Guitar, Acoustic Guitar",
        rating:"4.7 ⭐Instructor Rating",
        students:"405,813",
        courses:"20 courses",
        category:"Music & Arts"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/7240640_bf4c_2.jpg",
        name:"Mark Perren-Jones",
        field:"Massage, Sports Massage",
        rating:"4.7 ⭐Instructor Rating",
        students:"221,529",
        courses:"77 courses",
        category:"Health & Fitness"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/21674826_0b4e_2.jpg",
        name:"Bodsphere - Health and Wellness",
        field:"Yoga, Pranayama",
        rating:"4.8⭐Instructor Rating",
        students:"28,840",
        courses:"9 courses",
        category:"Health & Fitness"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/61192080_163c_4.jpg",
        name:"Michael Eric Everson",
        field:"Massage, Sports Massage",
        rating:"4.7 ⭐Instructor Rating",
        students:"20,556",
        courses:"28 courses",
        category:"Health & Fitness"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/26801218_cefd_3.jpg",
        name:"Felix Harder",
        field:"Fitness, Nutrition",
        rating:"4.6 ⭐Instructor Rating",
        students:"212,337",
        courses:"37 courses",
        category:"Health & Fitness"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/133884918_c87f.jpg",
        name:"Linguae Learning",
        field:"Spanish Language, French Language",
        rating:"4.6 ⭐Instructor Rating",
        students:"402,978",
        courses:32,
        category:"Teaching & Academic"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/633228_a6b9_12.jpg",
        name:"Krista King",
        field:"Calculus, Probability",
        rating:"4.7 ⭐Instructor Rating",
        students:"241,048",
        courses:"20 courses",
        category:"Teaching & Academic"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/403134_2c7a_5.jpg",
        name:"Keino Campbell, Esq.",
        field:"IELTS, TOEFL",
        rating:"4.6 ⭐Instructor Rating",
        students:"398,752",
        courses:"12 courses",
        category:"Teaching & Academic"
    },
    {
        image:"https://img-c.udemycdn.com/user/75x75/16912784_49c6_3.jpg",
        name:"Sandra 11Percent",
        field:"German Language, Presentation Skills",
        rating:"4.7 ⭐Instructor Rating",
        students:"110,054",
        courses:7,
        category:"Teaching & Academic"
    },
]

  const categories = [
    'Development',
    'Business',
    'Finance and Accounting',
    'IT and Software',
    'Design',
    'Marketing',
    'Lifestyle',
    'Photography & Video',
    'Music & Arts',
    'Health & Fitness'
  ];

  const subcategories = [
    {
      cat: 'Development',
      subcat1: ['Web-Development', 'Data Science', 'Mobile-Development','Programming-Languages','Game-Development'],
    },
    {
      cat: 'Business',
      subcat1: ['Communication', 'Management', 'Business Strategy','Operations','Human Resources'],
    },
    {
      cat: 'Finance and Accounting',
      subcat1: ['Accounting and Bookkeeping','Compliance','Economics','Finance','Taxes'],
    },
    {
      cat: 'IT and Software',
      subcat1: ['IT Certification', 'Network and Security', 'Hardware', 'OpeRating System and Servers','Other Software and IT'],
    },
    {
      cat: 'Design',
      subcat1: ['Web Design', 'Game Design', '3D and Animation', 'Fashion Design', 'Other Design'],
    },
    {
      cat: 'Marketing',
      subcat1: ['Digital Marketing', 'Social Media Marketing', 'Public Relationship', 'Content Marketing', 'Product Marketing'],
    },
    {
      cat: 'Lifestyle',
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
    {
      cat: 'Health & Fitness',
      subcat1: ['Fitness', 'Sport', 'Yoga','Mental Health','Dance'],
    }
  ];

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
                 <div className="outerlining">
                  <div key={item} className="category-container">
                    <NavLink className="subcategories1" to={`/commonui/${item}`} state={{ratings:staticRatings,instructor:businessPopular_instutor}}>
                      {item} <span className="logo-arrow"><IoIosArrowForward /></span>
                    </NavLink>

                    <ul className="submenu2">
                      {subcategories[index].subcat1.map((subcatItem) => (
                       <NavLink to={`/commonui/${subcatItem}`} state={{ratings:staticRatings,instructor:businessPopular_instutor}} className="submenu2-links"><li key={subcatItem} >{subcatItem}</li></NavLink> 
                      ))}
                    </ul>
                  </div>
                  </div>
                  </>))}
             
              </div>
            </div>
          </div>

          <div className="searchbar">
            <i className="fa-solid fa-magnifying-glass"></i> <input type="text" className="searchbarinput" placeholder="search here" />
          </div>

          <NavLink to="/tech" className="navlinknames">
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
          <Route path="/tech" element={<Tech/>} />
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
