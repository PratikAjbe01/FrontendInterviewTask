import React, { useEffect, useState } from 'react'
import './App.css'
function App() {
const accordionData = [
  {
    question: "What is JavaScript?",
    ans: "JavaScript is a versatile programming language primarily used for creating interactive effects within web browsers. It can also be used for server-side development using environments like Node.js."
  },
  {
    question: "What is the difference between HTML and CSS?",
    ans: "HTML (HyperText Markup Language) structures the content on the web, while CSS (Cascading Style Sheets) is used to style that content, including layout, colors, and fonts."
  },
  {
    question: "What is responsive web design?",
    ans: "Responsive web design is an approach to building websites that adjust their layout and content to look good on all screen sizes—from mobile phones to desktop monitors."
  },
  {
    question: "What are cookies in web development?",
    ans: "Cookies are small text files stored on a user's browser by a website. They're used to remember information such as login sessions, preferences, and tracking data."
  }
];
// not multiOpenaccordian
// const handleToggle = (index) => {
//   setActiveIndex(prevIndex => prevIndex === index ? null : index);
// };
const [active,SetActive]=useState([]);
const handleToggle=(ind)=>{
  const arr=[...active];
    const index = arr.indexOf(ind);
    if(index>=0){
arr.splice(index, 1); //learning
    }
    else{
    arr.push(ind);
    }
   SetActive(arr);
}
useEffect(()=>{

},[active])
  return (
    <div className='main'>
      <div className="accordianDiv">
        {accordionData.map((el,ind)=>(
          <div className='row' key={ind}>
            <div className='question'><h3>{el.question}</h3><span onClick={()=>handleToggle(ind)}>+</span></div>
            <div className='ans' style={{display:(active[ind]==ind)?'block':'none'}}>{el.ans}</div>
          </div>
        ))}
      </div>
    
    </div>
  )
}

export default App