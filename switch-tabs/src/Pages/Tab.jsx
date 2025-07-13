import React, { useState } from 'react'
import './Tab.css'
function Tab() {
    
    const tabs={
        html:"HTML is the backbone of all web pages. It structures the content on the web by using tags like <div>, <p>, <a>, and others to define elements such as paragraphs, links, headers, and images. HTML doesn't handle styling or behavior—its job is to organize and present raw content in a readable format to the browser. Think of it as the skeleton of a webpage.",
        css:"CSS is used to style and visually enhance HTML content. It controls aspects like colors, fonts, layouts, spacing, animations, and responsiveness. With CSS, you can make a plain HTML page look elegant, modern, and user-friendly. CSS works in layers (cascades), allowing developers to apply styles globally or target specific elements using selectors, classes, and IDs. It's the skin and design of a webpage.",
        javascript:"JavaScript adds interactivity and dynamic behavior to web pages. From handling button clicks and form submissions to creating animations, fetching data from servers, or building full-fledged web applications—JavaScript powers the brain and behavior of modern websites. It runs in the browser, interacts with the DOM (Document Object Model), and enables real-time content updates without refreshing the page."
    }
   
const [content,SetContent]=useState("html");

  return (
    <div className='main'>
    <div className="tabBars">
        {Object.keys(tabs).map((tab)=>(
            <button key={tab} onClick={()=>SetContent(tab)} >{tab}</button>
     
        ))}
    </div>
    <div className="Content">
 <p>{tabs[content]}</p>

    </div>
    </div>
  )
}

export default Tab
